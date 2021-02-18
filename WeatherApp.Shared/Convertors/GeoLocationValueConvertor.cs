using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WeatherApp.Shared.Contracts.Convertors;
using WeatherApp.Shared.Models;

namespace WeatherApp.Shared.Convertors
{
    public class GeoLocationValueConvertor : IGeoLocationValueConvertor
    {
        public GeoLocation Convert(string sourceMember, ResolutionContext context)
        {
            return Convert(sourceMember);
        }

        public GeoLocation Convert(string value)
        {
            if(string
                .IsNullOrWhiteSpace(value))
            {
                throw new ArgumentNullException(value);
            }

            var geoCoordinates = value.Split(
                ',', 
                StringSplitOptions.RemoveEmptyEntries);

            if(geoCoordinates.Length != 2)
            {
                throw new ArgumentException("Invalid geo coordinates detected");
            }

            if(!double.TryParse(geoCoordinates[0], out var latitude) 
                || !double.TryParse(geoCoordinates[1], out var longitude))
            {
                throw new ArgumentException("Unable to parse geo coordinates");
            }

            return new GeoLocation(latitude, longitude);
        }
    }
}
