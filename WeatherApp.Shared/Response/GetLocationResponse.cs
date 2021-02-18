using System.Collections.Generic;
using WeatherApp.Shared.Base;
using WeatherApp.Shared.Models;

namespace WeatherApp.Shared.Response
{
    public class GetLocationResponse : ResponseBase
    {
        public IEnumerable<Location> Locations { get; set; }
    }
}
