using FluentValidation;
using FluentValidation.Validators;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WeatherApp.Server.Features.Weather.GetWeatherForecast
{
    public class GetWeatherForecastValidator 
        : AbstractValidator<GetWeatherForecastRequest>
    {
        public GetWeatherForecastValidator()
        {
            RuleFor(r => r.TotalDays)
                .Custom(ValidateTotalDays);
        }

        private void ValidateTotalDays(
            int? totalDays, 
            CustomContext context)
        {
            if (totalDays.HasValue
                && (totalDays < 1 
                    || totalDays > 6))
            {
                context
                    .AddFailure("Total days out range: Must be a value between 1 and 6");
            }
        }
    }
}
