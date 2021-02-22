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
  and views. The application uses the builtin Identity provider to authenticate
  users via a dedicated login page. To keep it simple styles were managed using
  Bootstrap 4.6, in order to focus on the development side of a working 
  application.
- WeatherApp.Server
  - ASP.NET Web application using the Mediatr pattern and feature slice,
  this is the server-side infrastructure that retrieves the weather data
  and is consumed by the client application.
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

In Visual studio, set up a user secrets directory for containing the connection 
string used by the WeatherApp.Client directory.
Create the configuration setting in the user secrets directory, replacing the
connection string with the actual connection string with the database server
information you intend on using. 

Its recommended the database is blank and
has full database access to create a database and 
create/update tables and insert/update data.
 
`{
  "ConnectionStrings": {
    "WeatherAppClientContextConnection": "<connection string>"
  }
}`
   
In the WeatherApp.Client directory open Powershell and run the follwing command

`dotnet ef database update`

To setup the identity database

## Project Setup

## Running the App