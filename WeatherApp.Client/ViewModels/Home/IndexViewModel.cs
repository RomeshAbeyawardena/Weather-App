using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WeatherApp.Client.ViewModels.Home
{
    public class IndexViewModel
    {
        public string ApiBaseUrl { get; set; }
        public string Query { get; set; }
        public int TotalDaysToDisplay { get; set; }
    }
}
