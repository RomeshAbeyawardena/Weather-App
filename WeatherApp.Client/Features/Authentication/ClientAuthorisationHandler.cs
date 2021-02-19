using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WeatherApp.Client.Features.Authentication
{
    public class ClientAuthorisationHandler : AuthorizationHandler<ClientRequirement>
    {
        protected override Task HandleRequirementAsync(
            AuthorizationHandlerContext context, 
            ClientRequirement requirement)
        {
            throw new NotImplementedException();
        }
    }
}
