using AutoMapper;
using RestSharp;

namespace WeatherApp.Server.Base
{
    public class ProviderBase
    {
        public ProviderBase(
            IMapper mapper,
            IRestClient restClient)
        {
            Mapper = mapper;
            RestClient = restClient;
        }

        protected IMapper Mapper { get; }
        protected IRestClient RestClient { get; }
    }
}
