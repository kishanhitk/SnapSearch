chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "searchLittleArc",
    title: "Search with Google in Little Arc",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "searchLittleArc") {
    var query = info.selectionText;
    createNewWindow(query);
  }
});

function createNewWindow(query) {
  var url = "https://www.google.com/search?q=" + encodeURIComponent(query);
  chrome.windows.create({ url: url });
}
