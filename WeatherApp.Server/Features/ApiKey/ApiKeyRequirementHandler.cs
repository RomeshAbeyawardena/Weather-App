using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WeatherApp.Shared;
using WeatherApp.Shared.Constants;

namespace WeatherApp.Server.Features.ApiKey
{
    public class ApiKeyRequirementHandler
        : AuthorizationHandler<ApiKeyRequirement>
    {
        protected override async Task HandleRequirementAsync(
            AuthorizationHandlerContext context, 
            ApiKeyRequirement requirement)
        {
            
            await Task.CompletedTask;
        }

        private void SucceedIfApiKeyIsPresentAndValid(
            AuthorizationHandlerContext context,
            ApiKeyRequirement requirement)
        {
            var request = httpContextAccessor.HttpContext.Request;
            
            if(!request.Headers.TryGetValue(
                HttpHeaderConstants.ApiKeyHeaderName, out var apiKeyValue))
            {
                return;
            }

            if(applicationSettings.ApiKey != apiKeyValue)
            {
                return;
            }

            context.Succeed(requirement);
        }

        public ApiKeyRequirementHandler(
            ApplicationSettings applicationSettings,
            IHttpContextAccessor httpContextAccessor)
        {
            this.applicationSettings = applicationSettings;
            this.httpContextAccessor = httpContextAccessor;
        }

        private readonly ApplicationSettings applicationSettings;
        private readonly IHttpContextAccessor httpContextAccessor;
    }
}
