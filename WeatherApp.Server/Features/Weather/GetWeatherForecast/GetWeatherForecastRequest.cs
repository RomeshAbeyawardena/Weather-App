﻿using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WeatherApp.Shared.Responses;

namespace WeatherApp.Server.Features.Weather.GetWeatherForecast
{
    public class GetWeatherForecastRequest 
        : IRequest<GetWeatherForecastResponse>
    {
        public int Id { get; set; }
    }
}
