Param (
    [boolean]$developerMode
)

cd WeatherApp.Client/WebApp

if ($developerMode -eq $true)
{
    Write-Warning  ("Developer mode enabled," +
         " this will turn on file watching" +
         " to aid software development however" +
         " wasteful on system resources for " +
         "testing purposes.")

    yarn run watch
}
else
{
    yarn run build
}

cd ..
cd ..