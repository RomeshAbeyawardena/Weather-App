using FluentValidation;
using System;

namespace WeatherApp.Server.Factories
{
    public class DefaultValidatorFactory
        : ValidatorFactoryBase
    {
         public override IValidator CreateInstance(
            Type validatorType)
        {
            return serviceProvider.GetService(validatorType) as IValidator;
        }

        public DefaultValidatorFactory(
            IServiceProvider serviceProvider)
        {
            this.serviceProvider = serviceProvider;
        }

        private readonly IServiceProvider serviceProvider;
    }
}
