using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WeatherApp.Client.ViewModels.Home;
using WeatherApp.Shared;
using WeatherApp.Shared.Extensions;

namespace WeatherApp.Client.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet, Authorize()] 
        public IActionResult Index(
            string query, 
            bool displayTemperature)
        {
            if (string.IsNullOrWhiteSpace(query))
            {
                query = "Belfast";
            }

            return View(
                new IndexViewModel { 
                    ApiKey = applicationSettings
                        .ApiKey
                        .EncodeToBase64(),
                    TotalDaysToDisplay = applicationSettings
                        .TotalDaysToDisplay,
                    Query = query,
                    ApiBaseUrl = applicationSettings
                        .DataProviderBaseUrl
                        .EncodeToBase64(),
                    DisplayTemperature = displayTemperature
                });
        }

        public HomeController(
            ApplicationSettings applicationSettings)
        {
            this.applicationSettings = applicationSettings;
        }

        private readonly ApplicationSettings applicationSettings;
    }
}
