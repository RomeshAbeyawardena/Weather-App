using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Primitives;
using System.Collections.Generic;

namespace WeatherApp.Shared
{
    public class ApplicationSettings
    {
        public ApplicationSettings(
            IConfiguration configuration)
        {
            configuration
                .Bind(this);
            WeatherAppClientContextConnection = configuration
                .GetConnectionString(nameof(WeatherAppClientContextConnection));
        } 

        public int TotalDaysToDisplay { get; set; }
        public string WeatherAppClientContextConnection { get; set; }
        public string DataProviderBaseUrl { get; set; }
        public IEnumerable<string> AcceptedClients { get; set; }
        public IEnumerable<string> AcceptedMethods { get; set; }
        public string ApiKey { get; set; }
    }
}
