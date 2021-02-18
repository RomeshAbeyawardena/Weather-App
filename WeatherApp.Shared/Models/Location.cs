﻿using System.Text.Json.Serialization;

namespace WeatherApp.Shared.Models
{
    public class Location
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Type { get; set; }

        public GeoLocation GeoLocation { get; set; }
    }
}
