using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Primitives;

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

        public string WeatherAppClientContextConnection { get; set; }
        public string DataProviderBaseUrl { get; set; }
        public string ApiKey { get; set; }
    }
}
