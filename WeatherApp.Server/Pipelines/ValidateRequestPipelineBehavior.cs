﻿using FluentValidation;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace WeatherApp.Server.Pipelines
{
    public class ValidateRequestPipelineBehavior<TRequest, TResponse> 
        : IPipelineBehavior<TRequest, TResponse>
        where TRequest : IRequest<TResponse>
    {
         public async Task<TResponse> Handle(
            TRequest request, 
            CancellationToken cancellationToken, 
            RequestHandlerDelegate<TResponse> next)
        {
            var validator = validatorFactory.GetValidator<TRequest>();

            if(validator != null)
            {
                await validator
                    .ValidateAndThrowAsync(request, cancellationToken);
            }

            return await next();
        }

        public ValidateRequestPipelineBehavior(
            IValidatorFactory validatorFactory)
        {
            this.validatorFactory = validatorFactory;
        }
         
        private readonly IValidatorFactory validatorFactory;
    }
}
