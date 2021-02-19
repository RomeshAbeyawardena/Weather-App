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
        } 

        public string DataProviderBaseUrl { get; set; }
        public string ApiKey { get; set; }
    }
}
