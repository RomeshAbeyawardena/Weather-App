namespace WeatherApp.Shared.Constants
{
    public static class ApiClientContants
    {
        public static string GetLocationEndpoint = $"{GetWeatherForecastEndpoint}search";
        public const string GetWeatherForecastEndpoint = "/location/";
    }
}
