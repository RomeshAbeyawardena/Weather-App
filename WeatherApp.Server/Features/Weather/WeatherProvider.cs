using AutoMapper;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using WeatherApp.Server.Base;
using WeatherApp.Shared.Constants;
using WeatherApp.Shared.Contracts.Providers;
using WeatherApp.Shared.Models;
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
                $"{ApiClientContants.GetWeatherForecastEndpoint}{location.Id}");

            var result = await RestClient
                .GetAsync<SourceWeather>(
                request,
                cancellationToken);

            return Mapper
                .Map<IEnumerable<WeatherForecast>>(result.Consolidated_Weather);
        }

        public WeatherProvider(
            IMapper mapper,
            IRestClient restClient)
            : base(mapper,
                   restClient)
        {

        }
    }
}
