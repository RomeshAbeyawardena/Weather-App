using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WeatherApp.Server.Features.ApiKey
{
    public class ApiKeyAuthorisationHandler : AuthorizationHandler<ApiKeyRequirement>
    {
        protected override async Task HandleRequirementAsync(AuthorizationHandlerContext context, ApiKeyRequirement requirement)
        {
            await Task.CompletedTask;
            
            if(!context.User
                .Claims.Any(c => c.Type == "ValidApiKeyUser" 
                    && c.Value == bool.TrueString))
            {
                context.Fail();
            }

            context.Succeed(requirement);
        }
    }
}
