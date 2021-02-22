using System;

namespace WeatherApp.Shared.Extensions
{
    public static class TypeExtension
    {
        public static bool IsOfType(
            this Type type, 
            Type ofType)
        {
            return type == ofType
                || type.BaseType == ofType;
        }
    }
}
