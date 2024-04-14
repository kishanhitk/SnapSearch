# SnapSearch - Better Search on Arc

SnapSearch is a Arc Browser Extension that enhances the search functionality in the Arc Browser. It allows users to select text on a webpage and search for it using their preferred search engine in a "Little Arc" window.
<!-- Add image -->
![SnapSearch](/icons/icon128.png)

## Features

- Select text and search with Google, Perplexity Al, Bing, DuckDuckGo or Kagi
- The search results open in a "Little Arc" window
- Choose your preferred search engine

## Installation
### Chrome Web Store
Install the extension from the [Chrome Web Store](https://chromewebstore.google.com/detail/snapsearch-better-search/aeblbpjamlpjfedjbkhnbiecmepbgkdo?hl=en).

### Install from Source

1. **Clone the Source Repository:**

   - Clone the repo: 
       ```
        gh repo clone kishanhitk/SnapSearch
       ```
       or 
       ```
        git clone https://github.com/kishanhitk/SnapSearch.git
       ```
   - Alternatively, download the source as a ZIP file from the repository.

2. **Set Up the Extension in Chrome:**
   - Access `chrome://extensions` in your browser.
   - Enable developer mode (top right toggle).
   - Select "Load Unpacked" and navigate to the `SnapSearch` folder.
      - This will be the downloaded folder, where the `manifest.json` can be found.
   - Confirm by pressing `enter` or `return` on your keyboard, and customize SnapSearch's search engine as required (defaults to Google).

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


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.