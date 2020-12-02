### Recreate the issue by
- run npm install in the root of the project
- build the command with 'mbt build' (I'm on version 1.0.16)
- start the express server

### The issue
- when calling a service (e.g. NorthWind) the error 'TypeError: Cannot read property 'target' of undefined' is thrown
