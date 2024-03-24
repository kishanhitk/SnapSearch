document.addEventListener("DOMContentLoaded", () => {
  const searchEngineSelect = document.getElementById("searchEngine");

  chrome.storage.sync.get("searchEngine", ({ searchEngine }) => {
    searchEngineSelect.value = searchEngine || "google";
  });

  searchEngineSelect.addEventListener("change", () => {
    chrome.storage.sync.set({ searchEngine: searchEngineSelect.value });
  });
});