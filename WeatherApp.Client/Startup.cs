using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using WeatherApp.Client.Middleware;
using WeatherApp.Shared;
using WeatherApp.Shared.Models;

namespace WeatherApp.Client
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(
            IServiceCollection services)
        { 
            services 
                .AddSingleton<ApplicationSettings>();

            services
                .AddAuthentication()
                .AddCookie();

            services
                .AddAuthorization()
                .AddControllersWithViews();

            services
                .AddRazorPages();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(
            IApplicationBuilder app, 
            IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseStaticFiles(new StaticFileOptions { OnPrepareResponse = PrepareStaticFileResponse });
            app.UseRouting();
            app.UseCors();

            app.UseAuthentication();
            app.UseAuthorization();
            app.UseMiddleware<IncludeHeadersMiddleware>();
            app.UseEndpoints(endpoints =>
            {
                endpoints
                    .MapControllerRoute(name: "Identity",
                    pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}");

                endpoints.MapRazorPages();
                endpoints
                    .MapDefaultControllerRoute();
            });
        }

        private void PrepareStaticFileResponse(StaticFileResponseContext context)
        {
            var headers = context.Context.Response.Headers;
            
            headers
                .Add("cache-control", "private,max-age=31536000,immutable");
            headers 
                .Add("x-content-type-options", "nosniff");
        }
    }
}
