using System;

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
