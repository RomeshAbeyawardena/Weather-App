using Moq;
using NUnit.Framework;
using RestSharp;
using System.Threading;
using System.Threading.Tasks;
using WeatherApp.Server.Features.Location;

namespace WeatherApp.UnitTests
{
    public class LocationProviderTests
    {
        [SetUp]
        public void Setup()
        {
            restClientMock = new Mock<IRestClient>();
            sut = new LocationProvider(
                restClientMock.Object);
        }

        [Test]
        public async Task GetLocations_by_latitude_and_longitude()
        {
            var restMock = new Mock<IRestResponse>();

            restMock.SetupGet(a => a.IsSuccessful)
                .Returns(true);

            restMock.SetupGet(a => a.Content).Returns("[  {" +
                "\"title\": \"San Francisco\", " +
                "\"location_type\": \"City\", " +
                "\"woeid\": 2487956," +
                "\"latt_long\": \"37.777119, -122.41964\"" +
            "}, " +
            "{" +
                "\"title\": \"San Francisco\", " +
                "\"location_type\": \"City\", " +
                "\"woeid\": 2487956," +
                "\"latt_long\": \"37.777119, -122.41964\"" +
            "}]");
            
            restClientMock
                .Setup(a => a
                .ExecuteGetAsync(
                    It.IsAny<IRestRequest>(), 
                    CancellationToken.None))
                .Returns(Task.FromResult(restMock.Object))
                .Verifiable();

            var result = await sut
                .GetLocationsAsync("BER", CancellationToken.None);
        }

        [Test]
        public async Task GetLocations_by_query()
        {
            var restMock = new Mock<IRestResponse>();

            restMock.SetupGet(a => a.IsSuccessful)
                .Returns(true);

            restMock.SetupGet(a => a.Content).Returns("[  {" +
                "\"title\": \"San Francisco\", " +
                "\"location_type\": \"City\", " +
                "\"woeid\": 2487956," +
                "\"latt_long\": \"37.777119, -122.41964\"" +
            "}, " +
            "{" +
                "\"title\": \"San Francisco\", " +
                "\"location_type\": \"City\", " +
                "\"woeid\": 2487956," +
                "\"latt_long\": \"37.777119, -122.41964\"" +
            "}]");
            
            restClientMock
                .Setup(a => a
                .ExecuteGetAsync(
                    It.IsAny<IRestRequest>(), 
                    CancellationToken.None))
                .Returns(Task.FromResult(restMock.Object))
                .Verifiable();

            var result = await sut
                .GetLocationsAsync("BER", CancellationToken.None);
        }

        private LocationProvider sut;
        private Mock<IRestClient> restClientMock;
    }
}