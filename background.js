chrome.contextMenus.create({
    id: "sendLinkToServer",
    title: "Seed through OneClickEH",
    contexts: ["link"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "sendLinkToServer") {
        // Retrieve the settings from Chrome's storage
        chrome.storage.sync.get(['OneClickEH_serverAddress', 'OneClickEH_serverPort', 'OneClickEH_serverPasswd'], function(data) {
            const serverUrl = `${data.OneClickEH_serverAddress}:${data.OneClickEH_serverPort}/server`;
            const linkUrl = info.linkUrl;
            const serverPasswd = `${data.OneClickEH_serverPasswd}`;

             // Setup the request options for a POST request
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: linkUrl, passwd: serverPasswd }),
                mode: 'cors' // This might be necessary depending on your server's CORS policy
            };

            // Make the POST request to your server
            fetch(serverUrl, requestOptions)
                .then(response => response.text())
                .then(result => console.log('Success:', result))
                .catch(error => console.error('Error:', error));
        });
    }
});