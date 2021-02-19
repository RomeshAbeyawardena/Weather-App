using MediatR;
using WeatherApp.Shared.Responses;

namespace WeatherApp.Server.Features.Location.GetLocation
{
    public class GetLocationRequest : IRequest<GetLocationResponse>
    {
        public string Query { get; set; }
        public string Longitude { get; set; }
        public string Latitude { get; set; }
    }
}
