using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using WeatherApp.Shared;
using WeatherApp.Shared.Constants;

namespace WeatherApp.Server.Features.ApiKey
{
    public class ApiKeyAuthenticationHandler : AuthenticationHandler<ApiKeyAuthenticationOptions>
    {
        protected override Task InitializeHandlerAsync()
        {
            var request = Context.Request;
            applicationSettings = Context.RequestServices
                .GetRequiredService<ApplicationSettings>();
            headers = request.Headers;

            return Task.CompletedTask;
        }

        protected override async Task<AuthenticateResult> HandleAuthenticateAsync()
        {
             await Task.CompletedTask;

            if(!headers.TryGetValue(
                HttpHeaderConstants.ApiKeyHeaderName, out var apiKeyValue))
            {
                return AuthenticateResult.Fail(
                    $"Request does not include {HttpHeaderConstants.ApiKeyHeaderName} in the header");
            }

            if(applicationSettings.ApiKey != apiKeyValue)
            {
                return AuthenticateResult.Fail(
                    "Invalid API Key");
            }

            var claimsIdentity = new ClaimsIdentity(
                new [] { new Claim("ValidApiKeyUser", bool.TrueString) } );

            var claimPrinciple = new ClaimsPrincipal(
                claimsIdentity);

            var authenticationTicket = new AuthenticationTicket (
                claimPrinciple, 
                Scheme.Name);

            Logger.LogInformation("Authentication passed");

            return AuthenticateResult
                .Success(authenticationTicket);
        }

        private ApplicationSettings applicationSettings;
        private IHeaderDictionary headers;

        public ApiKeyAuthenticationHandler(
            IOptionsMonitor<ApiKeyAuthenticationOptions> options, 
            ILoggerFactory logger, 
            UrlEncoder encoder, 
            ISystemClock clock) 
            : base(options, 
                   logger, 
                   encoder, 
                   clock)
        {
        }
    }
}
