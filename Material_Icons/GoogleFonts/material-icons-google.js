(function() {
    const stylesheetUrl = "https://fonts.googleapis.com/icon?family=Material+Icons";
    if (!document.querySelector(`link[rel="stylesheet"][href="${stylesheetUrl}"]`)) {
        const linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.href = stylesheetUrl;
        document.head.appendChild(linkElement);
    }
})();
