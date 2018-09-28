var loadedData = {};

function getData() {
    const url = "https://sevedgeignitefa.azurewebsites.net/api/GetComments"
    jQuery.getJSON(url, function (data) {
        loadedData = data;
    }).then(function () {
        // update view
        updateView("#comments-table", loadedData);
    });
}

function postData(url, data) {
    $.ajax({
        type: "POST",
        url,
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    }).then(function () {
        console.log(`Data POSTed`)
    });
}

function updateView(el, obj) {
    // update view
    let rows = [];
    let ct = 0;
    obj.forEach(function (item) {
        rows.push(`
            <tr>
                <td>${item.text}</td>
            </tr>
        `);
        ct++;
    });

    var listEl = $(el);
    listEl.empty();
    listEl.append(rows.join("")); // note: defaults to comma...
}

function writeComment() {
    const url = "https://sevedgeignitefa.azurewebsites.net/api/PostComments";
    const data = document.getElementById("newComment").value;
    commentData = {
        'text': data
    };
    postData(url, commentData);
}