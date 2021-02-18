using Microsoft.AspNetCore.Mvc;

namespace WeatherApp.Client.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet] 
        public IActionResult Index()
        {
            return View();
        }
    }
}
