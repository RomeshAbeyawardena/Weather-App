using MediatR;
using WeatherApp.Shared.Responses;

namespace WeatherApp.Server.Features.Cities.SearchCities
{
    public class SearchCitiesRequest
        : IRequest<SearchCitiesResponse>
    {
        public object Query { get; set; }
    }
}
