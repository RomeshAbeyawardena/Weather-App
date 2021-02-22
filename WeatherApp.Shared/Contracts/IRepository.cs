using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace WeatherApp.Shared.Contracts
{
    public interface IRepository<T>
        where T: class
    {
        IQueryable<T> Query { get; }
        DbSet<T> Context { get; }
        DbContext DbContext { get; }
    }
}
