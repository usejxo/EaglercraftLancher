function showTab(tabName) {
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.opacity = 0; // Fade out current tabs
        setTimeout(function(tab) {
            tab.style.display = "none"; // Hide after fade out
        }, 300, tabs[i]);
    }
    var currentTab = document.getElementById(tabName);
    currentTab.style.display = "block"; // Show the selected tab
    setTimeout(function() {
        currentTab.style.opacity = 1; // Fade in the selected tab
    }, 10);
}

function updatePlayButton() {
    var selectedVersion = document.getElementById("versions").value;
    var playButton = document.getElementById("playButton");
    playButton.setAttribute("data-version", selectedVersion);
}

function playGame() {
    var selectedVersion = document.getElementById("playButton").getAttribute("data-version");
    if (selectedVersion) {
        // Get the current page's URL and construct the full path for the selected version
        var currentUrl = window.location.origin;
        window.location.href = currentUrl + "/versions/" + selectedVersion + "/index.html";
    } else {
        alert("Please select a version to play.");
    }
}

function changeAccountName() {
    var newName = document.getElementById("newAccountName").value;
    if (newName.trim() !== "") {
        document.getElementById("accountName").textContent = newName;
        alert("Account name updated successfully!");
    } else {
        alert("Please enter a valid account name.");
    }
}

function changeProfilePic() {
    var fileInput = document.getElementById("newProfilePic");
    var profilePic = document.getElementById("profilePic");

    // Check if the user uploaded a new profile picture
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            profilePic.src = e.target.result;
            alert("Profile picture updated successfully!");
        }
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        alert("Please select a valid image file.");
    }
}
