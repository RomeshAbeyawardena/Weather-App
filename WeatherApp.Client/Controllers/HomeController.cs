using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
