using MediatR;
using WeatherApp.Shared.Responses;

namespace WeatherApp.Server.Features.Weather.GetWeatherForecast
{
    public class GetWeatherForecastRequest 
        : IRequest<GetWeatherForecastResponse>
    {
        public int Id { get; set; }
        public int? TotalDays { get; set; }
    }
}
