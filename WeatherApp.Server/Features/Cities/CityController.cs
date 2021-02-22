using Microsoft.AspNetCore.Mvc;
using System.Threading;
using System.Threading.Tasks;
using WeatherApp.Server.Base;
using WeatherApp.Server.Features.Cities.SearchCities;

namespace WeatherApp.Server.Features.Cities
{
    public class CityController 
        : MediatrControllerBase
    {
        [HttpGet]
        public Task<IActionResult> SearchCities(
            [FromQuery] SearchCitiesRequest request,
            CancellationToken cancellationToken)
        {
            return SendAsync(
                request,
                cancellationToken);
        }
    }
}
