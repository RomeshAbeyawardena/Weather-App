using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace WeatherApp.Shared.Models
{
    public class WeatherForecast
    {
        public string State { get; set; }

        public string StateAbbreviation { get; set; }

        public decimal Temperature { get; set; }

        public DateTime Date { get; set; }
    }
}
