using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using WeatherApp.Shared.Models;

namespace WeatherApp.Shared.Contracts.Providers
{
    public interface ILocationProvider
    {
        Task<IEnumerable<Location>> GetLocationsAsync(
            GeoLocation location = default,
            CancellationToken cancellationToken = default);

        Task<IEnumerable<Location>> GetLocationsAsync(
            string query = default, 
            CancellationToken cancellationToken = default);
    }
}
