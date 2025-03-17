(function() {
    const stylesheetUrl = "https://fonts.googleapis.com/icon?family=Material+Icons";
    const existingLink = document.head.querySelector('link[rel="stylesheet"]');

    if (!existingLink || existingLink.getAttribute("href") !== stylesheetUrl) {
        requestAnimationFrame(() => {
            const linkElement = document.createElement("link");
            linkElement.rel = "stylesheet";
            linkElement.href = stylesheetUrl;
            document.head.insertAdjacentElement("beforeend", linkElement);
        });
    }
})();
