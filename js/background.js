chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get("searchEngine", ({ searchEngine }) => {
    createContextMenu(searchEngine);
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "searchLittleArc") {
    const query = info.selectionText;
    chrome.storage.sync.get("searchEngine", ({ searchEngine }) => {
      createNewWindow(query, searchEngine);
    });
  }
});

function createNewWindow(query, searchEngine) {
  const searchUrls = {
    bing: `https://www.bing.com/search?q=${encodeURIComponent(query)}`,
    duckduckgo: `https://duckduckgo.com/?q=${encodeURIComponent(query)}`,
    kagi: `https://kagi.com/search?q=${encodeURIComponent(query)}`,
    perplexity: `https://perplexity.ai/search?q=${encodeURIComponent(query)}`,
    google: `https://www.google.com/search?q=${encodeURIComponent(query)}`,
    ecosia: `https://www.ecosia.org/search?q=${encodeURIComponent(query)}`
  };
  const url = searchUrls[searchEngine] || searchUrls.google;
  chrome.windows.create({ url });
}

chrome.storage.onChanged.addListener((changes, namespace) => {
  if (changes.searchEngine) {
    updateContextMenu(changes.searchEngine.newValue);
  }
});

function updateContextMenu(searchEngine) {
  chrome.contextMenus.update("searchLittleArc", {
    title: getContextMenuTitle(searchEngine),
  });
}

function getContextMenuTitle(searchEngine) {
  const titles = {
    bing: 'Search "%s" with Bing in Little Arc',
    duckduckgo: 'Search "%s" with DuckDuckGo in Little Arc',
    kagi: 'Search "%s" with Kagi in Little Arc',
    perplexity: 'Search "%s" with Perplexity AI in Little Arc',
    google: 'Search "%s" with Google in Little Arc',
    ecosia: 'Search "%s" with Ecosia in Little Arc'
  };
  return titles[searchEngine] || titles.google;
}

function createContextMenu(searchEngine) {
  chrome.contextMenus.create({
    id: "searchLittleArc",
    title: getContextMenuTitle(searchEngine),
    contexts: ["selection"],
  });
}