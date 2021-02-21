namespace WeatherApp.Client.ViewModels.Home
{
    public class IndexViewModel
    {
        public string ApiKey { get; set; }
        public string ApiBaseUrl { get; set; }
        public string Query { get; set; }
        public int TotalDaysToDisplay { get; set; }
        public bool DisplayTemperature { get; set; }
    }
}
