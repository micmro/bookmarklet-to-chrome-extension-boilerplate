# Bookmarklet to Chrome Extension Template

This is an updated version of [bookmarklet-to-chrome-extension-boilerplate](https://github.com/micmro/bookmarklet-to-chrome-extension-boilerplate) by micmro. In this version, the extension code is updated from V2 to V3.

Template to port your bookmarklet to a Chrome extension.

Simply copy your bookmarklet code into `bookmarklet-code.js` and test it localy, update the metadata and you're ready to pack it.

In order to publish your extension follow the steps [here](https://developer.chrome.com/webstore/publish).


## Test the chrome extension localy

The documentation below is from the [Chrome Developer site](https://developer.chrome.com/extensions/getstarted#unpacked), augmented with screenshots from this Template project:

> Extensions that you download from the Chrome Web Store are packaged up as .crx files, which is great for distribution, but not so great for development. Recognizing this, Chrome gives you a quick way of loading up your working directory for testing. Let's do that now.



> Visit [chrome://extensions](chrome://extensions) in your browser (or open up the Chrome menu by clicking the icon to the far right of the Omnibox:  The menu's icon is three horizontal bars. and select Extensions under the Tools menu to get to the same place).

> Ensure that the Developer mode checkbox in the top right-hand corner is checked.

![alt text](https://raw.githubusercontent.com/micmro/bookmarklet-to-chrome-extension-boilerplate/gh-pages/images/developer-mode.png "screenshot of developer mode checkbox")

> Click Load unpacked extension… to pop up a file-selection dialog.

![alt text](https://raw.githubusercontent.com/micmro/bookmarklet-to-chrome-extension-boilerplate/gh-pages/images/load-unpacked-extension.png "screenshot of load unpacked extension checkbox")

> Navigate to the directory in which your extension files live, and select it.

> Alternatively, you can drag and drop the directory where your extension files live onto chrome://extensions in your browser to load it.

> If the extension is valid, it'll be loaded up and active right away! If it's invalid, an error message will be displayed at the top of the page. Correct the error, and try again.

![alt text](https://raw.githubusercontent.com/micmro/bookmarklet-to-chrome-extension-boilerplate/gh-pages/images/local-extension-loaded.png "screenshot of local Chrome Extension added")

![alt text](https://raw.githubusercontent.com/micmro/bookmarklet-to-chrome-extension-boilerplate/gh-pages/images/bookmark-bar.png "screenshot of local Chrome Extension")

## Updating the manifest.json metadata

You'll need to update the following keys in the `manifest.json` file:

- `name`
  Name of the chrome extension
- `description`
  Expain your chrome extension
- `homepage_url`
  _(optinal)_ Your projects website, e.g. github repo
- `author`
  Your or your organizations name
- `icons`
  Icon in various sizes for the Chrome Webstore
- `default_icon`
  Icon for the browser extension bar

##More
Check out [bookmarklet-to-firefox-addon-boilerplate](https://github.com/micmro/bookmarklet-to-firefox-addon-boilerplate) if you want to port your bookmarklet to Firefox as well.
