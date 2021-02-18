using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WeatherApp.Shared.Models;

namespace WeatherApp.Shared.Contracts.Convertors
{
    public interface IGeoLocationValueConvertor : IValueConverter<string, GeoLocation>
    {
        GeoLocation Convert(string value);
    }
}
