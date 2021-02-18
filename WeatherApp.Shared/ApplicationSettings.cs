using Microsoft.Extensions.Configuration;

namespace WeatherApp.Shared
{
    public class ApplicationSettings
    {
        public ApplicationSettings(
            IConfiguration configuration)
        {
            configuration
                .Bind(this);
        }

        public string DataProviderBaseUrl { get; set; }
    }
}
