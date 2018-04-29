// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCzoEdhClo90oqNZ2PT12_N3Ub6UOZ68Os",
    authDomain: "maestro-hiring-challenge.firebaseapp.com",
    databaseURL: "https://maestro-hiring-challenge.firebaseio.com",
    projectId: "maestro-hiring-challenge",
    storageBucket: "maestro-hiring-challenge.appspot.com",
    messagingSenderId: "451186154433"
  }
};
