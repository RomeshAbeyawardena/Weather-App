using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace WeatherApp.Shared.Models
{
    public class SourceLocation
    {
        [JsonPropertyName("title")]
        public string Title { get; set; }

        [JsonPropertyName ("location_type")]
        public string LocationType { get; set; }

        [JsonPropertyName ("woeid")]
        public int WoeId { get; set; }

        [JsonPropertyName("latt_long")]
        public string Latt_Long { get; set; }
    }
}
