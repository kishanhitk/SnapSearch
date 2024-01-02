# SnapSearch- Better Search on Arc

SnapSearch is a Arc Browser Extension that enhances the search functionality in the Arc Browser. It allows users to select text on a webpage and search for it using their preferred search engine in a "Little Arc" window.
<!-- Add image -->
![SnapSearch](/icons/icon128.png)

## Features

- Select text and search with Google, Bing, or DuckDuckGo
- The search results open in a "Little Arc" window

## Installation
### Chrome Web Store
Install the extension from the [Chrome Web Store](https://chromewebstore.google.com/detail/snapsearch-better-search/aeblbpjamlpjfedjbkhnbiecmepbgkdo?hl=en).

### Manual Installation

1. Clone this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable Developer Mode by clicking the toggle switch at the top right.
4. Click the `Load unpacked` button and select the directory where you cloned the repository.

## Usage

![SnapSearch Demo](/screenshots/demo.jpg)

1. After installing the extension, right-click on any webpage in Arc Browser.
2. Select the `Search with...` option in the context menu.
3. Choose your preferred search engine from the popup.

## Technical Implementation

SnapSearch is built using JavaScript, HTML, and CSS. It uses the Context Menus API to add a context menu item that appears when the user selects text on a webpage. When this context menu item is clicked, the extension opens a new window with the search query, using the user's preferred search engine.

The extension uses the Storage API to save the user's preferred search engine, and the Windows API to open new windows. On Arc Browser, this method opens a "Little Arc" window.

## Permissions

SnapSearch requires the following permissions:

- `contextMenus`: To add a context menu item that appears when the user selects text.
- `storage`: To save the user's preferred search engine.
- `tabs`: To open new tabs with the search query.


## Development

To build this extension, you need to have Node.js and npm installed on your machine.

1. Clone this repository to your local machine.
2. Run `npm install` to install the necessary dependencies.
3. Make your changes to the code.
4. Test the extension by loading it into Chrome as described in the Installation section.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

