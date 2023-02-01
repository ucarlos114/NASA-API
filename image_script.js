const apiURL = 'https://api.nasa.gov/planetary/apod?api_key=TCWMLDyd5B8b3XFgbuoV6CL3dLGab9pxM4XGwk8E';

function updateCols(explanation, url, title, date, copyright) {
    // reset body
    clearCols();

    // image
    var img = document.createElement("img");
    img.src = url;
    img.style.width = "100%";
    document.getElementById("col2").appendChild(img);

    // description
    var exp = document.createElement("p");
    exp.innerHTML = explanation;
    exp.id = "text";
    exp.style.fontSize = "1em";
    document.getElementById("col1").appendChild(exp);

    // title
    var img_title = document.createElement("h1");
    img_title.innerHTML = title;
    document.getElementById("title-row").appendChild(img_title);

    // copyright
    var copy = document.createElement("p");
    copy.innerHTML = "Copyright: " + copyright;
    document.getElementById("copyright").appendChild(copy);

    // date
    var img_date = document.createElement("p");
    img_date.innerHTML = "Date: " + date;
    document.getElementById("date").appendChild(img_date);
}

function clearCols() {
    var col1 = document.getElementById("col1");
    var col2 = document.getElementById("col2");
    var title = document.getElementById("title-row");
    var copyright = document.getElementById("copyright");
    var date = document.getElementById("date");

    if (col1.childElementCount > 0) {
        col1.children[0].remove();
        col2.children[0].remove();
        title.children[0].remove();
        copyright.children[0].remove();
        date.children[0].remove();
    }
}

async function NASAfetch() {
    var date = document.getElementById("imgdate").value;
    try {
        const response = await fetch(apiURL + "&date=" + date);
        resultsArray = await response.json();
        console.log(resultsArray)
        var explanation = resultsArray.explanation;
        var img_url = resultsArray.url;
        var title = resultsArray.title;
        var date = resultsArray.date;
        var copyright = resultsArray.copyright;
        console.log(explanation);
        updateCols(explanation, img_url, title, date, copyright);
    }
    catch(error) {
    }
}