Param (
    [boolean]$developerMode
)

if ($developerMode -eq $true)
{
    Write-Warning  ("Developer mode enabled," +
         " this will turn on file watching" +
         " to aid software development however" +
         " wasteful on system resources for " +
         "testing purposes.")
}
    Write-Output "Starting Server in separate process..."
    $output = Start-Process -filePath "powershell" -ArgumentList "Start-Server.ps1 -developerMode $developerMode" -Wait -NoNewWindow
    
    $output.ExitCode
    
    Write-Output "Starting Angular build in separate process..."
    .\Start-Angular-build.ps1


    Write-Output "Starting client..."
    .\Start-Client.ps1 -developerMode $developerMode