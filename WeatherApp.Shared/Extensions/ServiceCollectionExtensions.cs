using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using WeatherApp.Shared.Contracts;
using WeatherApp.Shared.Data;

namespace WeatherApp.Shared.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection RegisterRepositories<TDbContext>(this IServiceCollection services, 
            Action<IServiceProvider, DbContextOptionsBuilder> optionsAction,
            IEnumerable<Type> entityTypes,
            int poolSize)
            where TDbContext: DbContext
        {
            Console.WriteLine(entityTypes.Count());

            var dbContextType = typeof(TDbContext);
            var repositoryType = typeof(IRepository<>);
            var repositoryImplementationType = typeof(EntityRepository<,>);

            foreach (var entityType in entityTypes)
            {
                services
                    .AddScoped(repositoryType.MakeGenericType(entityType),
                    repositoryImplementationType.MakeGenericType(dbContextType,
                        entityType));
            }

            return services
                .AddDbContextPool<TDbContext>(
                    optionsAction, 
                    poolSize);
        }

        public static IServiceCollection RegisterRepositories<TDbContext>(this IServiceCollection services, 
            Action<IServiceProvider, DbContextOptionsBuilder> optionsAction,
            int poolSize = 128)
            where TDbContext: DbContext
        {
            var entityTypes = typeof(TDbContext)
                .GetProperties()
                .Where(t => t.PropertyType.IsGenericType 
                    && t.PropertyType == typeof(DbSet<>)
                        .MakeGenericType(t.PropertyType.GetGenericArguments()))
                .Select(t => t.PropertyType.GetGenericArguments().FirstOrDefault());

            return RegisterRepositories<TDbContext>(
                services,
                optionsAction,
                entityTypes,
                poolSize);
        }
    }
}
