using FluentValidation.Results;
using System.Collections.Generic;

namespace WeatherApp.Shared.Base
{
    public class ResponseBase
    {
        public IEnumerable<ValidationFailure> Errors { get; set; }
    }
}
