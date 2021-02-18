using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WeatherApp.Shared.Models
{
    public class SourceWeather
    {
        public IEnumerable<SourceForecast> Consolidated_Weather { get; set; } 
    }
}
