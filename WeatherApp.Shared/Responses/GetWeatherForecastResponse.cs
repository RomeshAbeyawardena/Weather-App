using System.Collections.Generic;
using WeatherApp.Shared.Base;
using WeatherApp.Shared.Models;

namespace WeatherApp.Shared.Responses
{
    public class GetWeatherForecastResponse : ResponseBase
    {
        public IEnumerable<WeatherForecast> WeatherForecast { get; set; }
    }
}
