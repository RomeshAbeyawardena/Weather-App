using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WeatherApp.Shared.Convertors;
using WeatherApp.Shared.Models;

namespace WeatherApp.Shared.Profiles
{
    public class DomainProfile : Profile
    {
        public DomainProfile()
        {
            CreateMap<SourceLocation, Location>()
                .ForMember(member => member.Name, opt => opt.MapFrom(member => member.Title))
                .ForMember(member => member.Id, 
                    opt => opt.MapFrom(member => member.WoeId))
                .ForMember(member => member.GeoLocation, 
                    opt => opt.ConvertUsing(
                        new GeoLocationValueConvertor(), 
                        nameof(SourceLocation.Latt_Long)))
                .ForMember(member => member.Type, opt => opt.MapFrom(member => member.LocationType));
        }

    }

    
}
