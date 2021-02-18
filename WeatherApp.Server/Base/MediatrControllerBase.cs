﻿using FluentValidation.Results;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using WeatherApp.Shared.Base;

namespace WeatherApp.Server.Base
{
    [ApiController, 
     Route("[controller]")]
    public class MediatrControllerBase 
        : ControllerBase
    {
        protected IMediator Mediator => mediator ??= HttpContext.RequestServices.GetRequiredService<IMediator>();

        public async Task<IActionResult> SendAsync(
            object request, 
            CancellationToken cancellationToken)
        {
            if(!ModelState.IsValid)
            { 
                return BadRequest(ModelState);
            }

             var response = await Mediator
                    .Send(request, cancellationToken);

            if(response is ResponseBase responseBase)
            {
                if (responseBase.Errors !=null 
                    && responseBase.Errors.Any())
                {
                    return BadRequest(responseBase.Errors);
                }
            }

            return Ok(response);
        }

        protected IActionResult BadRequest(
            IEnumerable<ValidationFailure> validationFailures)
        {
            foreach(var validationFailure in validationFailures)
            {
                ModelState
                    .AddModelError(
                        validationFailure.PropertyName, 
                        validationFailure.ErrorMessage);
            }

            return BadRequest(ModelState);
        }

        public MediatrControllerBase(
            IMediator mediator = null)
        {
            this.mediator = mediator;
        }

        private IMediator mediator;
    }
}
