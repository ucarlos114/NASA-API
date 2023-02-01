const apiURL = 'https://api.nasa.gov/planetary/apod?api_key=TCWMLDyd5B8b3XFgbuoV6CL3dLGab9pxM4XGwk8E';

function updateCols(explanation, url) {
    clearCols();
    var img = document.createElement("img");
    img.src = url;
    img.id = "main-img";
    document.getElementById("col2").appendChild(img);

    var text = document.createElement("h2");
    text.innerHTML = explanation;
    text.id = "text";
    text.style.fontSize = "1.5vw";
    document.getElementById("col1").appendChild(text);
}

function clearCols() {
    var col1 = document.getElementById("col1");
    var col2 = document.getElementById("col2");

    if (col1.childElementCount > 0) {
        console.log("lol");
        console.log(col1.children);
        col1.children[0].remove();

    }
    if (col2.childElementCount > 0) {
        console.log("lol");
        col2.children[0].remove();
    }
}

async function NASAfetch() {
    var date = document.getElementById("imgdate").value;
    try {
        console.log("made it in here");
        console.log(apiURL + "&date=" + date);
        const response = await fetch(apiURL + "&date=" + date);
        resultsArray = await response.json();
        var explanation = resultsArray.explanation;
        var img_url = resultsArray.url;
        console.log(explanation);
        updateCols(explanation, img_url);
    }
    catch(error) {
    }
}