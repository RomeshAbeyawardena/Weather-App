using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WeatherApp.Client.Middleware
{
    public class IncludeHeadersMiddleware
    {
        public IncludeHeadersMiddleware(RequestDelegate next)
        {
            this.next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            var headers = context.Response.Headers;
            headers
                .Add("x-content-type-options", "nosniff");
            headers
                .Add("cache-control", "no-store");
            await next(context);
        }

        private readonly RequestDelegate next;
    }
}
