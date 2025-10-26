document.getElementById("input").addEventListener("input", function () {
    document.getElementById("display").srcdoc = document.getElementById("input").value
})