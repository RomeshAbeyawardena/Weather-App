using System.Collections.Generic;

namespace WeatherApp.Shared.Models
{
    public class SourceWeather
    {
        public IEnumerable<SourceForecast> Consolidated_Weather { get; set; } 
    }
}
