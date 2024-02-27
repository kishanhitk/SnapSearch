chrome.runtime.onInstalled.addListener(async function () {
  chrome.storage.sync.get("searchEngine", function (data) {
    createContextMenu(data.searchEngine);
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "searchLittleArc") {
    const query = info.selectionText;
    chrome.storage.sync.get("searchEngine", function (data) {
      createNewWindow(query, data.searchEngine);
    });
  }
});
function createNewWindow(query, searchEngine) {
  let url;
  switch (searchEngine) {
    case "bing":
      url = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
      break;
    case "duckduckgo":
      url = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
      break;
    case "kagi":
      url = `https://kagi.com/?q=${encodeURIComponent(query)}`;
        break;
    default: // Google
      url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
  chrome.windows.create({ url: url });
}

chrome.storage.onChanged.addListener(function (changes, namespace) {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    if (key === "searchEngine") {
      updateContextMenu(newValue);
    }
  }
});

function updateContextMenu(searchEngine) {
  chrome.contextMenus.update("searchLittleArc", {
    title: getContextMenuTitle(searchEngine),
  });
}

function getContextMenuTitle(searchEngine) {
  switch (searchEngine) {
    case "bing":
      return 'Search "%s" with Bing in Little Arc';
    case "duckduckgo":
      return 'Search "%s" with DuckDuckGo in Little Arc';
    case "kagi":
      return 'Search "%s" with Kagi in Little Arc';
    default: // Google
      return 'Search "%s" with Google in Little Arc';
  }
}

function createContextMenu(searchEngine) {
  chrome.contextMenus.create({
    id: "searchLittleArc",
    title: getContextMenuTitle(searchEngine),
    contexts: ["selection"],
  });
}
