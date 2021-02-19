﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WeatherApp.Shared.Constants
{
    public static class PolicyConstants
    {
        public const string ClientCorsPolicy = nameof(ClientCorsPolicy);
        public const string ApiKeyPolicy = "API-Key-Policy";
        public const string ApiKeyAuthenticationScheme = nameof(ApiKeyAuthenticationScheme);
        public const string IsValidApiKeyUser = "ValidApiKeyUser";
    }
}
