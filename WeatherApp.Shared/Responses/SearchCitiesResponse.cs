using System.Collections.Generic;
using WeatherApp.Shared.Models;

namespace WeatherApp.Shared.Responses
{
    public class SearchCitiesResponse
    {
        public IEnumerable<City> Results { get; set; }
    }
}
