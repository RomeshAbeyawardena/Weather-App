using AutoMapper;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
