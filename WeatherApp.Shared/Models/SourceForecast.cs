using System;

namespace WeatherApp.Shared.Models
{
    public class SourceForecast
    {
        public long Id { get; set; }
        public string Weather_state_name { get; set; }
        public string Weather_state_abbr { get; set; }
        public string Wind_direction_compass { get; set; }
        public DateTime Created { get; set; }
        public DateTime Applicable_date { get; set; }
        public decimal Min_temp { get; set; }
        public decimal Max_temp { get; set; }
        public decimal The_temp { get; set; }
        public decimal Wind_direction { get; set; }
        public decimal Air_pressure { get; set; }
        public decimal Humidity { get; set; }
        public decimal Visibility { get; set; }
        public decimal Predictability { get; set; } 
    }
}
