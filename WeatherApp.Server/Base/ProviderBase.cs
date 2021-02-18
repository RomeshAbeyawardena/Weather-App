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
            IRestClient restClient)
        {
            RestClient = restClient;
        }

        public IRestClient RestClient { get; }
    }
}
