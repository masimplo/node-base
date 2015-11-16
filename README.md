[![Build Status](https://travis-ci.org/masimakopoulos/node-base.svg)](https://travis-ci.org/masimakopoulos/node-base)
# node-base

This aims to be start project for nodejs and express projects. Source and test files support typescript. Unit tests use the excellent tape library and integration api tests use the supertest library.

No gulp, grunt etc build tools are required as this project leverages the strength and simplicity of npm task runners.
In particular this project offers the following tools.

**npm run lint**: runs tslint across all files specified in tsconfig.json both in files array and fileGlobs array.

**npm run build**: lints and builds all typescript files to javascript files along with sourcemaps.

**npm start**: builds the projects and starts node process.

**npm test**: builds and runs unit tests included in spec folder

**npm run test:watch**: builds and runs unit tests everytime a source or spec ts file is changed.

**npm run e2e**: runs integration tests included in e2e folder

**npm run e2e:watch**: runs integration tests everytime a source or e2e ts files changes.
