using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WeatherApp.Client.ViewModels.Home;
using WeatherApp.Shared;

namespace WeatherApp.Client.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet, Authorize] 
        public IActionResult Index(string query)
        {
            if (string.IsNullOrWhiteSpace(query))
            {
                query = "Belfast";
            }

            return View(
                new IndexViewModel { 
                    Query = query,
                    ApiBaseUrl = applicationSettings
                        .DataProviderBaseUrl
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
