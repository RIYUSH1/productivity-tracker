let activeTab = null;
let startTime = null;

chrome.tabs.onActivated.addListener(async ({ tabId }) => {
  const tab = await chrome.tabs.get(tabId);
  if (startTime && activeTab) {
    const timeSpent = Date.now() - startTime;
    await fetch('http://localhost:5000/api/log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ website: activeTab, timeSpent }),
    });
  }
  activeTab = new URL(tab.url).hostname;
  startTime = Date.now();
});
