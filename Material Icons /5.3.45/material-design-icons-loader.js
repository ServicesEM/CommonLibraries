(function() {
    const stylesheetUrl = "//cdn.materialdesignicons.com/5.3.45/css/materialdesignicons.min.css";
    if (!document.querySelector(`link[rel="stylesheet"][href="${stylesheetUrl}"]`)) {
        const linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.href = stylesheetUrl;
        document.head.appendChild(linkElement);
    }
})();
