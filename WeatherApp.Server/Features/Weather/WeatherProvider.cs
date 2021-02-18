using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using WeatherApp.Server.Base;
using WeatherApp.Shared.Constants;
using WeatherApp.Shared.Contracts.Providers;
using Models = WeatherApp.Shared.Models;

namespace WeatherApp.Server.Features.Weather
{
    public class WeatherProvider : ProviderBase, IWeatherProvider
    {
        public async Task<IEnumerable<Models.WeatherForecast>> GetWeatherForecastsAsync(
            Models.Location location,
            CancellationToken cancellationToken)
        {
            if(location == default)
            {
                throw new ArgumentNullException(
                    nameof(location));
            }

            var request = new RestRequest(
                $"{ApiClientContants.GetWeatherForecastEndpoint}/{location.Id}");

            return await RestClient
                .GetAsync<List<Models.WeatherForecast>>(
                request,
                cancellationToken);
        }

        public WeatherProvider(
            IRestClient restClient)
            : base(restClient)
        {

        }
    }
}
