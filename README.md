<table>
  <tr>
    <td><img src="/icons/icon128.png" alt="SnapSearch" width="64"></td>
    <td><h2 style="margin-left: 20px;">SnapSearch- Better Search on Arc</h2></td>
  </tr>
</table>

SnapSearch is a Arc Browser Extension that enhances the search functionality in the Arc Browser. It allows users to select text on a webpage and search for it using their preferred search engine in a "Little Arc" window.

## Features

- Select text and search with Google, Perplexity Al, Bing, DuckDuckGo or Kagi
- The search results open in a "Little Arc" window

## Install Guide

The Chrome extension store lags in releases because Chrome's review process can take **up to** a month. Changes should go live within a few hours ideally. If you install from the source and seek quicker updates than Chrome's Web Store, go for it!

### Install from Chrome Web Store

1. **Install SnapSearch:**

   - Visit the [Chrome Web Store](https://chromewebstore.google.com/detail/snapsearch-better-search/aeblbpjamlpjfedjbkhnbiecmepbgkdo?hl=en).
   - Click "Add to Chrome" and review the permissions required.
   - Proceed by clicking "Add Extension."

2. **Set your search engine**
   - This can be done by opening the popup, and selecting one of the defined search engines.

### Permissions Explained

SnapSearch requires the following permissions:

- `contextMenus`: To add a context menu item that appears when the user selects text.
- `storage`: To save the user's preferred search engine.
- `tabs`: To open new tabs with the search query.

### Install from Source

1. **Clone the Source Repository:**

   - Clone via terminal: `gh repo clone kishanhitk/SnapSearch` or `git clone https://github.com/kishanhitk/SnapSearch.git`
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

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
