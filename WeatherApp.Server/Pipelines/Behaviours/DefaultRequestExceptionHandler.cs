using MediatR.Pipeline;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using WeatherApp.Shared.Base;

namespace WeatherApp.Server.Pipelines.Behaviours
{
    public class DefaultRequestExceptionHandler<TRequest, TResponse, TException> 
        : IRequestExceptionHandler<TRequest, TResponse, TException>
        where TException : Exception        
    {
        public DefaultRequestExceptionHandler(
            ILogger<TRequest> logger)
        {
            this.logger = logger;
        }

        public Task Handle(
            TRequest request, 
            TException exception, 
            RequestExceptionHandlerState<TResponse> state, 
            CancellationToken cancellationToken)
        {
            Console.WriteLine(exception.Message);

            var response = Activator.CreateInstance<TResponse>();

            if(exception is FluentValidation.ValidationException validationException 
                && response is ResponseBase responseBase)
            { 
                logger.LogError(exception, "Exception handled.");
                responseBase.Errors = validationException.Errors;
                state.SetHandled(response);
            }

            return Task.CompletedTask;
        }

        private readonly ILogger logger;
    }
}
