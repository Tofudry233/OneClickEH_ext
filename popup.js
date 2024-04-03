function saveSettings() {
    const OneClickEH_serverAddress = document.getElementById('serverAddress').value;
    const OneClickEH_serverPort = document.getElementById('serverPort').value;
    const OneClickEH_serverPasswd = document.getElementById('serverPasswd').value;
    const saveButton = document.getElementById('saveSettings');

    chrome.storage.sync.set({ OneClickEH_serverAddress, OneClickEH_serverPort, OneClickEH_serverPasswd }, function() {
        console.log('Server settings saved.');
        
        saveButton.textContent = 'Settings Saved!';
        
        setTimeout(function() {
            saveButton.textContent = 'Save Settings';
        }, 2000); // 2000 milliseconds = 2 seconds
    });
}

function loadSettings() {
    chrome.storage.sync.get(['OneClickEH_serverAddress', 'OneClickEH_serverPort', 'OneClickEH_serverPasswd'], function(data) {
        if (data.OneClickEH_serverAddress !== undefined) {
            document.getElementById('serverAddress').value = data.OneClickEH_serverAddress;
        }
        if (data.OneClickEH_serverPort !== undefined) {
            document.getElementById('serverPort').value = data.OneClickEH_serverPort;
        }
        if (data.OneClickEH_serverPasswd !== undefined) {
            document.getElementById('serverPasswd').value = data.OneClickEH_serverPasswd;
        }
    });
}

document.getElementById('saveSettings').addEventListener('click', saveSettings);

document.addEventListener('DOMContentLoaded', loadSettings);