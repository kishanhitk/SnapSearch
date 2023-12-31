document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.sync.get("searchEngine", function (data) {
    document.getElementById("searchEngine").value =
      data.searchEngine || "google";
  });
});

document.getElementById("searchEngine").addEventListener("change", function () {
  chrome.storage.sync.set({ searchEngine: this.value });
});
