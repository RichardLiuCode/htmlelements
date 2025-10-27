document.getElementById("input").addEventListener("input", function () {
    document.getElementById("display").srcdoc = document.getElementById("input").value
});
let urlInput = new URLSearchParams(window.location.search)
fetch("source/" + urlInput.get('file') + ".html")
    .then(function (response) {
        return response.text()
    })
    .then(function (html) {
        document.getElementById("input").value = html;
        document.getElementById("display").srcdoc = document.getElementById("input").value
    })
