using System.Text.Json.Serialization;

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
