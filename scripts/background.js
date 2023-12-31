chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.get("searchEngine", function (data) {
    createContextMenu(data.searchEngine);
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "searchLittleArc") {
    var query = info.selectionText;
    chrome.storage.sync.get("searchEngine", function (data) {
      createNewWindow(query, data.searchEngine);
    });
  }
});
function createNewWindow(query, searchEngine) {
  var url;
  switch (searchEngine) {
    case "bing":
      url = "https://www.bing.com/search?q=" + encodeURIComponent(query);
      break;
    case "duckduckgo":
      url = "https://duckduckgo.com/?q=" + encodeURIComponent(query);
      break;
    default: // Google
      url = "https://www.google.com/search?q=" + encodeURIComponent(query);
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
      return "Search with Bing in Little Arc";
    case "duckduckgo":
      return "Search with DuckDuckGo in Little Arc";
    default: // Google
      return "Search with Google in Little Arc";
  }
}
function createContextMenu(searchEngine) {
  var title;
  switch (searchEngine) {
    case "bing":
      title = "Search with Bing in Little Arc";
      break;
    case "duckduckgo":
      title = "Search with DuckDuckGo in Little Arc";
      break;
    default: // Google
      title = "Search with Google in Little Arc";
  }
  chrome.contextMenus.create({
    id: "searchLittleArc",
    title: title,
    contexts: ["selection"],
  });
}
