# Weather App

## Introduction

The project makes use of the feature slice structure and uses the mediator pattern 
to keep all classes as decoupled as possible, while maintaining highly testable
code. 

Feature slice enables us to concentrate on the individual features themselves 
and not worry about having to build up large amounts of infrastructure before 
being able to do any development on the task at hand, it works nicely with SCRUM 
or agile from a planning perspective too.

### Layout


- WeatherApp.Client
  - ASP.NET Web application with an Angular web app tied to controllers 
  and views. The application uses the built-in Identity provider to authenticate
  users via a dedicated login page. To keep it simple styles were managed using
  Bootstrap 4.6, in order to focus on the development side of a working 
  application.
- WeatherApp.Server
  - ASP.NET Web application using the Mediatr pattern and feature slice,
  this is the server-side infrastructure that retrieves the weather data
  and is consumed by the client application. The API is secured using a
  X-API-Key so it can only be accessed by trusted applications using custom
  authentication and authorisation handlers based off the standard authentication
  handlers.
- WeatherApp.Shared
  - Shared domain models and constants are housed here to keep things as DRY as 
  possible. Careful consideration was made to ensure classes that are absolutely
  needed to be shared ended up here. 

## System Requirements

This section outlines the requirements to build and run the application

### Development environment
The project was built using vanilla (without extensions) Visual Studio 2019 
(v16.8.4) targetting .NET 3.1 - it should build and run with any 
version of .NET 3.1.

The database server used during development was SQL Server 2019, 
however the database scripts should be compatible with SQL Server 2017+.

### Database Installation

In Visual studio, set up a user secrets file for WeatherApp.Client containing the connection 
string used by the WeatherApp.Client application.

Create the following configuration setting in the user secrets json file, replacing the
connection string with the actual connection string of the database server you intend on using. 

Its recommended the database is blank and the database user
has full database access to create databases and 
create/update tables and insert/update data.
 
`{
  "ConnectionStrings": {
    "WeatherAppClientContextConnection": "<connection string>"
  }
}`
   
In the WeatherApp.Client directory open Powershell and run the following command

`dotnet ef database update`

To setup the identity database

## Running the App

In the solution directory, open Powershell console and 
type `./Start-Server.ps1` and hit enter to start up the server application.

Once that is up and running, open anothr Powershell console in the solution directory
and type `Start-Client.ps1` and hit enter to start up the client application.

Open a browser window and navigate to `https://localhost:5201`, you should be
redirected to a logon page. I've enabled user registration to make it easier
for you to setup a user account to test with. Create an user using the register
link and login using the same credentials to gain access to the weather application.
 
### Additional Notes
The above Powershell scripts are not signed, you will need to temporarily 
allow execution of unsigned Powershell scripts using Set-ExecutionPolicy 
before running the aforementioned scripts.

Further information on this is available on the Microsoft documentation website

[Set-ExecutionPolicy (Microsoft.PowerShell.Security) - PowerShell](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy?view=powershell-7.1)
