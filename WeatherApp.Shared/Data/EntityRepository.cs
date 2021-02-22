using Microsoft.EntityFrameworkCore;
using System.Linq;
using WeatherApp.Shared.Contracts;

namespace WeatherApp.Shared.Data
{
    public class EntityRepository<TDbContext, T> : IRepository<T>
        where TDbContext: DbContext
        where T: class
    {
        public IQueryable<T> Query { get; }
        public DbSet<T> Context { get; }
        public DbContext DbContext { get; }

        public EntityRepository(TDbContext dbContext)
        {
            DbContext = dbContext;
            Context = dbContext.Set<T>();
            Query = Context;
        }
    }
}
