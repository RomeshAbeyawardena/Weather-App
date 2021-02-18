using AutoMapper;
using RestSharp;
using RestSharp.Serialization.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using WeatherApp.Server.Base;
using WeatherApp.Shared;
using WeatherApp.Shared.Constants;
using WeatherApp.Shared.Contracts.Providers;
using Models = WeatherApp.Shared.Models;

namespace WeatherApp.Server.Features.Location
{
    public class LocationProvider : 
        ProviderBase,
        ILocationProvider
    {
        public async Task<IEnumerable<Models.Location>> GetLocationsAsync(
            Models.GeoLocation location, 
            CancellationToken cancellationToken)
        {
            if(location == default)
            {
                throw new ArgumentNullException(nameof(location));
            }

            var request = new RestRequest(
                ApiClientContants.GetLocationEndpoint,
                Method.GET);

            request
                .AddQueryParameter(
                    "lattlong", 
                    location.ToString());

            return await RestClient
                .GetAsync<List<Models.Location>>(
                    request, 
                    cancellationToken);
        }


        public async Task<IEnumerable<Models.Location>> GetLocationsAsync(
            string query = null, 
            CancellationToken cancellationToken = default)
        {
            
            if(string
                .IsNullOrWhiteSpace(query))
            {
                throw new ArgumentNullException(nameof(query));
            }

            var request = new RestRequest(
                ApiClientContants.GetLocationEndpoint,
                Method.GET);

            request
                .AddQueryParameter(
                    "query", 
                    query);

            var locations = await RestClient
                .GetAsync<List<Models.SourceLocation>>(
                    request, 
                    cancellationToken);

            return Mapper
                .Map<IEnumerable<Models.Location>>(locations);

        }

        public LocationProvider(
            IRestClient restClient,
            IMapper mapper)
            : base(mapper,
                   restClient)
        {
        }
    }
}
