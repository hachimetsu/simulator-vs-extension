# Welcome to My VS Code Extension Repo

## What's Here
 
* VS Code Extension: `Simulator`
* `Simulator` - Mimic Output of code manly C for now into virtual Terminal
  * Extension Provite option as `Mimic Output` in `Context Menu` of VS.
* `src` - main folder
  * contain 2 folders as
    * `extension`: main.ts file of extension
    * `webview`: main.tsx file of webview
  * `webview` - use `React` + `Tailwind`
* `extension` is build by `webpack`
* and `webview` is build by `Vite`
* `media` folder contains `assets` which will be use by `extension` and out file of webview as `main.js`+`style.css`

## Setup

* Run Following Commands to start
* `npm i` : install packages
* `npm run build` : generate `dist` for `extension` and `media/webview` for webview


## Get up and running straight away

* Press `F5` to open a new window with your extension loaded.
* Run your command from the command palette by pressing (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) and typing `Simulator`.
* You will found all avialable command as `Simulator` with `prefix` in `palette`
* Set breakpoints in your code inside `src/extension/main.ts` to debug your extension.
* Find output from your extension in the debug console.

## Make changes
* for web view use `src/webview/App.tsx` and `Tailwind` or `src/webview/Style.css` 
* You can relaunch the extension from the debug toolbar after changing code in `src/extension/main.ts`.
* You can also reload (`Ctrl+R` or `Cmd+R` on Mac) the VS Code window with your extension to load your changes.


## Explore the API

* You can open the full set of our API when you open the file `node_modules/@types/vscode/index.d.ts`.

## Run tests

* Open the debug viewlet (`Ctrl+Shift+D` or `Cmd+Shift+D` on Mac) and from the launch configuration dropdown pick `Extension Tests`.
* Press `F5` to run the tests in a new window with your extension loaded.
* See the output of the test result in the debug console.
* Make changes to `src/test/suite/extension.test.ts` or create new test files inside the `test/suite` folder.
  * The provided test runner will only consider files matching the name pattern `**.test.ts`.
  * You can create folders inside the `test` folder to structure your tests any way you want.

## Go further

* Reduce the extension size and improve the startup time by [bundling your extension](https://code.visualstudio.com/api/working-with-extensions/bundling-extension).
* [Publish your extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) on the VS Code extension marketplace.
* Automate builds by setting up [Continuous Integration](https://code.visualstudio.com/api/working-with-extensions/continuous-integration).


\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

**Enjoy!**
