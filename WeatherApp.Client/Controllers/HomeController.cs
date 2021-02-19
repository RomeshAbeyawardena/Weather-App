using Microsoft.AspNetCore.Mvc;
using WeatherApp.Client.ViewModels.Home;
using WeatherApp.Shared;

namespace WeatherApp.Client.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet] 
        public IActionResult Index()
        {
            return View(
                new IndexViewModel { 
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
