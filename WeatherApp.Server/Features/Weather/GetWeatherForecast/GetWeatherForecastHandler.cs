using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using WeatherApp.Shared.Contracts.Providers;
using Models = WeatherApp.Shared.Models;
using WeatherApp.Shared.Response;

namespace WeatherApp.Server.Features.Weather.GetWeatherForecast
{
    public class GetWeatherForecastHandler 
        : IRequestHandler<GetWeatherForecastRequest, GetWeatherForecastResponse>
    {
        public async Task<GetWeatherForecastResponse> Handle(
            GetWeatherForecastRequest request, 
            CancellationToken cancellationToken)
        {
            var weatherForecasts = await weatherProvider
                .GetWeatherForecastsAsync(
                    new Models.Location { 
                        Id = request.Id },
                    cancellationToken);

            return new GetWeatherForecastResponse 
            { 
                WeatherForecasts = weatherForecasts 
            };
        }

        public GetWeatherForecastHandler(
            IWeatherProvider weatherProvider)
        {
            this.weatherProvider = weatherProvider;
        }

        private readonly IWeatherProvider weatherProvider;
    }
}
