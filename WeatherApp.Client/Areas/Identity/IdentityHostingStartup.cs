using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using WeatherApp.Client.Data;

[assembly: HostingStartup(typeof(WeatherApp.Client.Areas.Identity.IdentityHostingStartup))]
namespace WeatherApp.Client.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
                services.AddDbContext<WeatherAppClientContext>(options =>
                    options.UseSqlServer(
                        context.Configuration.GetConnectionString("WeatherAppClientContextConnection")));

                services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
                    .AddEntityFrameworkStores<WeatherAppClientContext>();
            });
        }
    }
}