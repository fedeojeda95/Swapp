Swapp
================================================
Small app that shows star wars information. 

## Prerequisites

- Node > 7 and npm (Recommended: Use [nvm](https://github.com/creationix/nvm))
- Watchman `brew install watchman`
- React Native CLI `npm install -g react-native-cli`
- XCode > 10
- [JDK > 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Android Studio and Android SDK](https://developer.android.com/studio/index.html)

## Base dependencies

  - [axios](https://github.com/axios/axios) for networking.
  - [PropTypes](https://github.com/facebook/prop-types) to type-check our components exposed properties.
  - [React-Native-Config](https://github.com/luggit/react-native-config) to manage envionments.
  - [React-Navigation](https://reactnavigation.org/) navigation library.
  - [React-Native-Localization](https://github.com/stefalda/ReactNativeLocalization) for string localization. This allows support for several languages.
  - [Redux](https://redux.js.org/) for state management.
  - [Redux-Persist](https://github.com/rt2zz/redux-persist) as persistance layer. This persists the redux store in asynstorage.
  - [Redux-Thunk](https://github.com/gaearon/redux-thunk) to dispatch asynchronous actions.
  - [Reselect](https://github.com/reactjs/reselect) the selector library for redux.
  - [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/airbnb/enzyme) for testing.
  - [React-native-dotenv](aaa) to manage enviroment variables.

## Folder structure

This template follows a very simple project structure:
- `src`: This folder is the main container of all the code inside your application.
  - `actions`: This folder contains all actions that can be dispatched to redux.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder that contains all your application components.
    - `Common`: Folder to store any common component that you use through your app (such as a generic button, textfields, etc).
    - `MyComponent`: Each component should be stored inside it's own folder, and inside it a file for its code and a separate one for the styles. Then, the `index.js` is only used to export the final component that will be used on the app.
      - `MyComponent.js`
      - `styles.js`
      - `index.js`
  - `helpers`: Folder to store any kind of helper that you have.
  - `reducers`: This folder should have all your reducers, and expose the combined result using its `index.js`
  - `selectors`: Folder to store your selectors for each reducer.
  - `controllers`: Folder to store all your network and storage logic (you should have one controller per resource).
  - `App.js`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.

### Modules

In order to improve module usage and avoid having deep nested imports, the project uses babbel module-resolver's plugin. This allows to define several paths that will be directly accesible, not bothering whether the file is in the project structure. To check thihs paths, refer to the `babel.config.js` file.

## Styleguide

For coding styling the project uses ESLint and [Airbnb's styleguide](https://github.com/airbnb/javascript) with a few exceptions that you can find on the [.eslintrc.json](./.eslintrc.json)
