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
        [JsonPropertyName("weather_state_name")]
        public string State { get; set; }

        [JsonPropertyName("weather_state_abbr")]
        public string StateAbbreviation { get; set; }

        [JsonPropertyName("the_temp")]
        public decimal Temperature { get; set; }

        [JsonPropertyName("applicable_date")]
        public DateTime Date { get; set; }
    }
}
