using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WeatherApp.Shared.Base;
using WeatherApp.Shared.Models;

namespace WeatherApp.Shared.Response
{
    public class GetWeatherForecastResponse : ResponseBase
    {
        public IEnumerable<WeatherForecast> WeatherForecasts { get; set; }
    }
}
