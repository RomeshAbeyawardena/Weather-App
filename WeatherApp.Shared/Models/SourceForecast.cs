using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WeatherApp.Shared.Models
{
    public class SourceForecast
    {
        /*      "id": 6000017740398592,
      "weather_state_name": "Heavy Rain",
      "weather_state_abbr": "hr",
      "wind_direction_compass": "SSW",
      "created": "2021-02-17T21:20:02.418233Z",
      "applicable_date": "2021-02-17",
      "min_temp": 7.0649999999999995,
      "max_temp": 10.809999999999999,
      "the_temp": 10.469999999999999,
      "wind_speed": 9.148194500771494,
      "wind_direction": 213.3131693036207,
      "air_pressure": 1010.5,
      "humidity": 87,
      "visibility": 7.334976238765609,
      "predictability": 77*/
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
