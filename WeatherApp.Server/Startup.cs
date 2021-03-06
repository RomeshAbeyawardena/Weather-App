using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using RestSharp;
using System;
using System.Linq;
using WeatherApp.Server.Features.ApiKey;
using WeatherApp.Server.Pipelines;
using WeatherApp.Shared;
using WeatherApp.Shared.Constants;
using WeatherApp.Shared.Contracts.Convertors;
using WeatherApp.Shared.Convertors;

namespace WeatherApp.Server
{
    public class Startup
    {
        
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(
            IServiceCollection services)
        {
            var currentAssembly = typeof(Startup).Assembly;
            var sharedAssembly = typeof(Shared.Models.Location).Assembly;
            services
                .AddHttpContextAccessor()
                .AddValidatorsFromAssembly(currentAssembly)
                .AddMediatR(currentAssembly)
                .AddAutoMapper(
                    sharedAssembly, 
                    currentAssembly)
                .AddSingleton<ApplicationSettings>()
                .AddSingleton<IGeoLocationValueConvertor, GeoLocationValueConvertor>()
                .Scan(sourceSelector => sourceSelector
                    .FromAssemblies(currentAssembly)
                    .AddClasses(c => c.Where(type => ServiceConstants.ServerServiceTypes
                        .Any(st => type.Name.EndsWith(st))))
                    .AsImplementedInterfaces())
                .AddScoped(RegisterRestClient)
                .AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidateRequestPipelineBehavior<,>))
                .AddTransient<IAuthorizationHandler, ApiKeyAuthorisationHandler>()
                .AddLogging();

             services
                .AddCors()
                .AddAuthorization(ConfigureAuthorisation)
                .AddAuthentication(ConfigureAuthentication);
            
           
                services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ApplicationSettings applicationSettings)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();
            app.UseCors(builder => CorsPolicyBuild(builder, applicationSettings));
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                 endpoints
                    .MapControllers();

                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("Weather Server");
                });
            });
        }

        private void ConfigureAuthentication(
            AuthenticationOptions options)
        {
            options.AddScheme(PolicyConstants.ApiKeyAuthenticationScheme, 
                builder => { builder.HandlerType = typeof(ApiKeyAuthenticationHandler); });
        }

        private void ConfigureAuthorisation(
            AuthorizationOptions options)
        {
            options
                .AddPolicy(
                    PolicyConstants.ApiKeyPolicy,
                    policyBuilder => policyBuilder
                        .AddAuthenticationSchemes(PolicyConstants.ApiKeyAuthenticationScheme)
                        .AddRequirements(new ApiKeyRequirement()));
        }

        private void CorsPolicyBuild(
            CorsPolicyBuilder builder, 
            ApplicationSettings applicationSettings)
        {
            builder
                .WithOrigins(applicationSettings
                    .AcceptedClients.ToArray())
                    .WithMethods("GET")
                    .AllowAnyHeader();
        }
        
        private IRestClient RegisterRestClient(
            IServiceProvider serviceProvider)
        {
            var applicationSettings = serviceProvider
                .GetRequiredService<ApplicationSettings>();

            return new RestClient(applicationSettings
                .DataProviderBaseUrl);
        }

    }
}
