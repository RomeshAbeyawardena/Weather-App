using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;

namespace WeatherApp.Client.Features.Authentication
{
    public class ClientAuthenticationHandler : AuthenticationHandler<ClientAuthenticationOptions>
    {
        protected override Task<AuthenticateResult> HandleAuthenticateAsync()
        {
            throw new NotImplementedException();
        }

        public ClientAuthenticationHandler(
            IOptionsMonitor<ClientAuthenticationOptions> options, 
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
