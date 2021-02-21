using AutoMapper;
using WeatherApp.Shared.Models;

namespace WeatherApp.Shared.Contracts.Convertors
{
    public interface IGeoLocationValueConvertor : IValueConverter<string, GeoLocation>
    {
        GeoLocation Convert(string value);
    }
}
