document.getElementById('saveSettings').addEventListener('click', function() {
    const OneClickEH_serverAddress = document.getElementById('serverAddress').value;
    const OneClickEH_serverPort = document.getElementById('serverPort').value;
    const OneClickEH_serverPasswd = document.getElementById('serverPasswd').value;
    
    // Save the settings using Chrome's storage API
    chrome.storage.sync.set({ OneClickEH_serverAddress, OneClickEH_serverPort, OneClickEH_serverPasswd }, function() {
        console.log('Server settings saved.');
    });
});