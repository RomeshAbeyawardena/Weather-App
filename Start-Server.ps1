Param (
    [boolean]$developerMode
)

cd WeatherApp.Server

if ($developerMode -eq $true)
{
    Write-Warning  ("Developer mode enabled," +
         " this will turn on file watching" +
         " to aid software development however" +
         " wasteful on system resources for " +
         "testing purposes.")

    dotnet watch run
}
else
{
    dotnet run
}