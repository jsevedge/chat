var loadedData = {};

function getData() {
    jQuery.getJSON("https://sevedgeignitefa.azurewebsites.net/api/GetComments", function (data) {
        loadedData = data;
    }).then(function () {
        // update view
        updateView("#comments-table", loadedData);
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