# Spotify-Homage

A React web clone of Spotify for Homage's technical test.
Uses the latest ReactJS, version 18.

This is a non-ejected CRA project, developed by Yusuf Ismail.

![Alt text](src/assets/screenshot1.png?raw=true 'Discover landing page')

## Prerequisites

Make sure you have the following setup on your system:

- NodeJS (preferably v16, v18 was used for this)
- NPM (should be auto-installed along with NodeJS)
- Run the commands using a Bash terminal (avoid PowerShell/CMD)

## Running Spotify-Homage

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

1. You will be presented with an Authorization screen first.
   You may use the pre-filled Client ID and Client Secret or supply your own.

   ![Authorization page](src/assets/screenshot2.png?raw=true 'Authorization page')

2. After pressing Authorize, you will be sent to Spotify's OAuth login.
   ![OAuth login](src/assets/screenshot3.png?raw=true 'OAuth')
   ![Spotify 2nd page](src/assets/screenshot4.png?raw=true 'Spotify 2nd page')
3. Once you agree, if authorization is successful you'll be brought to the Discover page where Featured Playlists and Released This week will be automatically loaded.
   ![mobile view](src/assets/screenshot5.png?raw=true 'mobile view')

If you have not received the OAuth token, you will always be redirected to the /authorize page until you successfully obtain one.

NOTE:

- No input validation has been setup on this screen. Bad input is not handled.
- No unhappy path for Spotify OAuth, so if you fail to login or disagree to allowing the app to connect this remains unhandled.
- Due to time constraints, only tested on Firefox and Chrome.
- All buttons on the side bar work, but other than Discover they simply lead to a static placeholder page.

EXTRA:

- The app attempts to handle all other routes that are undefined. You will be brought to a page in the color of Homage saying the page does not exist.

## Testing Spotify-Homage

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Origin of the codebase

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
