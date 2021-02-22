using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using WeatherApp.Shared.Contracts;
using WeatherApp.Shared.Models;
using WeatherApp.Shared.Responses;

namespace WeatherApp.Server.Features.Cities.SearchCities
{
    public class SearchCitiesHandler
        : IRequestHandler<SearchCitiesRequest, SearchCitiesResponse>
    {
        public async Task<SearchCitiesResponse> Handle(
            SearchCitiesRequest request, 
            CancellationToken cancellationToken)
        {
            var query = from city in cityRepository.Query.AsNoTracking()
            where EF.Functions.Like(nameof(City.Name), $"%{request.Query}%")
            select city;

            return new SearchCitiesResponse { 
                Results = await query.ToArrayAsync(cancellationToken) 
            };
        }

        public SearchCitiesHandler(
            IRepository<City> cityRepository)
        {
            this.cityRepository = cityRepository;
        }

        private readonly IRepository<City> cityRepository;
    }
}
