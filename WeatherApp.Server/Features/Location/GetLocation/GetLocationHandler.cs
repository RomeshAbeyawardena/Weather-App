using FluentValidation.Results;
using MediatR;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using WeatherApp.Shared.Contracts.Convertors;
using WeatherApp.Shared.Contracts.Providers;
using WeatherApp.Shared.Responses;

namespace WeatherApp.Server.Features.Location.GetLocation
{
    public class GetLocationHandler : IRequestHandler<GetLocationRequest, GetLocationResponse>
    {
        public Task<GetLocationResponse> Handle(
            GetLocationRequest request, 
            CancellationToken cancellationToken)
        {
            if (!string.IsNullOrWhiteSpace(request.Query))
            {
                return GetLocationByQuery(
                    request.Query, 
                    cancellationToken);
            }

            if(!string.IsNullOrWhiteSpace(request.Latitude)
                && !string.IsNullOrWhiteSpace(request.Longitude))
            {
                return GetLocationByLatitudeAndLongitude(
                    request.Latitude,
                    request.Longitude, 
                    cancellationToken);
            }

            throw new NotSupportedException();
        }

        private async Task<GetLocationResponse> GetLocationByLatitudeAndLongitude(
            string latitude, 
            string longitude,
            CancellationToken cancellationToken)
        {
            var geoLocation = geoLocationValueConvertor
                .Convert($"{latitude},{longitude}");

            return new GetLocationResponse 
            { 
                Locations = await locationProvider
                    .GetLocationsAsync(
                        geoLocation, 
                        cancellationToken)
            };
        }

        private async Task<GetLocationResponse> GetLocationByQuery(
            string query, 
            CancellationToken cancellationToken)
        {
            var locations = await locationProvider
                    .GetLocationsAsync(
                        query, 
                        cancellationToken);

            return locations.Any() 
                ? new GetLocationResponse
                {
                    Locations = locations
                }
                : new GetLocationResponse
                {
                    Errors = new [] { new ValidationFailure(
                        "validationErrors", 
                        $"There are no locations that match {query}") 
                    }
                };
        }

        public GetLocationHandler(
            ILocationProvider locationProvider,
            IGeoLocationValueConvertor geoLocationValueConvertor)
        {
            this.locationProvider = locationProvider;
            this.geoLocationValueConvertor = geoLocationValueConvertor;
        }

        private readonly ILocationProvider locationProvider;
        private readonly IGeoLocationValueConvertor geoLocationValueConvertor;
    }
}
