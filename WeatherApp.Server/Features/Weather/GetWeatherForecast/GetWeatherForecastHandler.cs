﻿using MediatR;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using WeatherApp.Shared.Contracts.Providers;
using Models = WeatherApp.Shared.Models;
using WeatherApp.Shared.Responses;

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
                WeatherForecast = request.TotalDays.HasValue 
                    ? weatherForecasts.Take(request.TotalDays.Value) 
                    : weatherForecasts
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
