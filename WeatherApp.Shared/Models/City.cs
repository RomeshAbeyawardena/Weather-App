using System.ComponentModel.DataAnnotations;

namespace WeatherApp.Shared.Models
{
    public class City
    {
        [Key] public int Id { get; set; }
        public int CountryId { get; set; }
        public string Name { get; set; }


        public virtual Country County { get; set; }
    }
}
