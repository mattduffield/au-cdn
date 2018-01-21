# Project referencing aurelia-dialog externally
This project demonstrates how you can  reference external libraries in your application. This project references the `aurelia-dialog` plugin as an external project without installing it locally.

## Assumptions
This projects uses the Aurelia CLI and RequireJS as its bundler.

## Bundling the External Reference
It is necessary to bundle the plugin or code you wish to reference so that it can be loaded correctly using RequireJS.

### Steps to bundle `aurelia-dialog`
The following are the steps necessary to create a bundle of the `aurelia-dialog` plugin:

The external plugin bundle, `aurelia-dialog`, was created by using a separate Aurelia CLI project to create a custom bundle. This can easily be achieved by defining a bundle in the `aurelia.json` file.

The bundle then needs to be hosted on the web so that the URL can be referenced.

In this project, we exposed the bundle in Azure Storage as a Blob to the following location:  [https://fec.blob.core.windows.net/bundles/aurelia-dialog/1.0.0-rc.2.0.0/aurelia-dialog.js](https://fec.blob.core.windows.net/bundles/aurelia-dialog/1.0.0-rc.2.0.0/aurelia-dialog.js)

## Using the Bundle in your Project
The following are the steps required to use the bundle you created in your own project:

- The external reference is performed using the following in the `index.html` file as a script tag:
  ```javascript
  require.config({
    paths: {
      "aurelia-dialog": "https://fec.blob.core.windows.net/bundles/aurelia-dialog/1.0.0-rc.2.0.0/aurelia-dialog"
    }
  });
  ```
  Notice, that we do not include the file extension as RequireJS will add it for us.

- You include the plugin in your `main.js` file just like you would any other plugin installed locally:
  ```javascript
  aurelia.use
    .standardConfiguration()
    .feature('resources')
    .plugin('aurelia-dialog', config => {
      config.useDefaults();
      config.settings.lock = true;
      config.settings.centerHorizontalOnly = false;
      config.settings.startingZIndex = 5;
      config.settings.keyboard = true;
    });
  ```
Running the application will allow you to test a simple dialog prompt demonstrating the external plugin loaded fine.
