using System;
using System.Text;

namespace WeatherApp.Shared.Extensions
{
    public static class StringExtensions
    {
        public static string EncodeToBase64(this string value, Encoding encoding = default)
        {
            if(encoding == default)
            {
                encoding = Encoding.UTF8;
            }

            var bytesValue = encoding.GetBytes(value);
            return Convert.ToBase64String(bytesValue);
        }
    }
}
