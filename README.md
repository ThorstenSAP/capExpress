### Recreate the issue by
- run npm install in the root of the project
- build the command with 'mbt build' (I'm on version 1.0.16)
- start the express server 'node srv/express.js'

### The issue
- when calling a service (e.g. NorthWind) the error 'TypeError: Cannot read property 'target' of undefined' is thrown


#### my versions
- I'm using a local cap version. So in the mta yamlthe builder command uses npx instead of npm
- The output of 'npx cds -v'
@sap/approuter: 8.6.1
@sap/cds: 4.2.4
@sap/cds-compiler: 1.43.0
@sap/cds-dk: 3.1.2
@sap/cds-foss: 2.1.0
@sap/cds-odata-v2-adapter-proxy: 1.4.49
@sap/cds-reflect: 2.13.1
@sap/cds-runtime: 2.5.5
@sap/xsenv: 3.1.0
@sap/xssec: 3.0.10
Node.js: v12.19.0
cbo-tbusinessobject: 1.0.0
home: /Users/tmueller/jssoft/CAP/cbo-tbusinessobject/node_modules/@sap/cds