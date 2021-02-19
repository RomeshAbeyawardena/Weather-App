using Microsoft.AspNetCore.Mvc;
using System.Threading;
using System.Threading.Tasks;
using WeatherApp.Server.Base;
using WeatherApp.Server.Features.Location.GetLocation;

namespace WeatherApp.Server.Features.Location
{
    public class LocationController : MediatrControllerBase
    {
        [HttpGet, HttpOptions]
        public Task<IActionResult> GetLocation([FromQuery]GetLocationRequest request,
            CancellationToken cancellationToken)
        {
            return SendAsync(
                request, 
                cancellationToken);
        }
    }
}
