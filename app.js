function openTab(evt, tabName) {
    // Declare all variables
    let i, tabcontent, tablinks;

    // Get all elements with class="tab-content"
    tabcontent = document.getElementsByClassName("tab-content");

    // If "All" is clicked, show all tab content
    if (tabName === "All") {
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "block";
        }
    } else {
        // Otherwise, hide all tab content
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Show the current tab
        document.getElementById(tabName).style.display = "block";
    }

    // Get all elements with class="tab-link" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Add an "active" class to the button that opened the tab
    evt.currentTarget.className += " active";
}

// Set default active tab
document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("tab-link")[1].click(); // Set "Breakfast" as default active tab
});
