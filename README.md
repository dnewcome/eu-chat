# EarnUp chat example app.

This app is intended to illustrate current Node/React development practices. React components are written using [hooks](https://reactjs.org/docs/hooks-intro.html). Contributors submitting PRs using classes will be asked to refactor their code to use hooks. 

## Getting started

Clone the repo and install dependencies using 

``` npm install ```

Package versions are locked with an npm lock file. Please check in changes to this file when new dependencies are added and only update existing dependencies in a standalone commit.

Run the development environment using

``` npm start ```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

```npm test```

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```npm run build```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Note that this step is what happens in the Heroku CI pipeline.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Contributing

PRs submitted against master will be reviewed for possible release in future builds. Tests will be run automatically on pre-commit by default. It's possible to circumvent this with `-u` but please observe this constraint and fix tests before submitting a PR.

## Continuous deployment

Changes merged into the master branch will be built automatically in a Heroku CI pipeline and deployed to 

https://eu-chat.herokuapp.com


## Future work:
- fallback for avatar
- css library
- get logged in users with /list
