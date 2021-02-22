using Microsoft.EntityFrameworkCore;
using WeatherApp.Shared.Models;

namespace WeatherApp.Server.Data
{
    public class WeatherAppDbContext : DbContext
    {
        public WeatherAppDbContext(
            DbContextOptions<WeatherAppDbContext> dbContextOptions)
            : base(dbContextOptions)
        {

        }

        public DbSet<City> Cities { get; set; }

        public DbSet<Country> Countries { get; set; }
    }
}
