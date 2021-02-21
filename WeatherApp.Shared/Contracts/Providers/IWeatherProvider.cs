using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using WeatherApp.Shared.Models;

namespace WeatherApp.Shared.Contracts.Providers
{
    public interface IWeatherProvider
    {
        Task<IEnumerable<WeatherForecast>> GetWeatherForecastsAsync(
            Location location,
            CancellationToken cancellationToken);
    }
}
