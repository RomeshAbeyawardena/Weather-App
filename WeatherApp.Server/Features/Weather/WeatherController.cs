using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using WeatherApp.Server.Base;
using WeatherApp.Server.Features.Weather.GetWeatherForecast;

namespace WeatherApp.Server.Features.Weather
{
    public class WeatherController : MediatrControllerBase
    {
        [HttpGet]
        public Task<IActionResult> GetWeatherForecast(
            [FromQuery]GetWeatherForecastRequest request,
            CancellationToken cancellationToken)
        {
            return SendAsync(
                request, 
                cancellationToken);
        }
    }
}
