# testcafe-browser-provider-browserless

This is the **browserless** browser provider plugin for [TestCafe](http://devexpress.github.io/testcafe).

**NOTE: BETA! This plugin doesn't currently support the hosted service due to how the tests are ran (via a local web-server. Only use this plugin if your tests are network-accessible from where browserless is running!**

## Requirements

This module doesn't use a build-system, and does use `async/await` keywords, so at least Node > 8.x.x is required.

## Install

```
npm install testcafe-browser-provider-browserless
```

## Usage


When you run tests from the command line, use the provider name when specifying browsers:

```
testcafe browserless:chrome 'path/to/test/file.js'
```

You can specify _where_ browserless is running by setting an enviroment variable of `BROWSERLESS_URL`:

```sh
BROWSERLESS_URL="ws://192.168.1.1:4000?token=YOUR-API-TOKEN-IF-SET" testcafe browserless:chrome 'path/to/test/file.js'
```

When you use API, pass the provider name to the `browsers()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('browserless:chrome')
    .run();
```

## Author
Joel Griffith (https://browserless.io)
