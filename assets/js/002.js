function numbers () {
    var fields = document.getElementsByTagName("code");
    for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        // Ensure the field has innerText (it should, if it's a <code> element)
        if (field.innerText) {
            var select = field.innerText;
            var select_f = select.split(/\n/);
            var tab = document.createElement("table");

            // If you need to remove an extra line added by markdown, uncomment:
            // select_f.splice(-1, 1);

            field.innerHTML = "";
            field.appendChild(tab);
            for (var j = 0; j < select_f.length; j++) {
                var row = document.createElement("tr");
                var col = document.createElement("th");
                var colc = document.createElement("th");
                col.innerText = j + 1;
                colc.innerText = select_f[j];
                row.appendChild(col);
                row.appendChild(colc);
                tab.appendChild(row);

                // STYLE SECTION
                col.style.textAlign = "right";
                colc.style.textAlign = "left";
                tab.style.border = "0";
                col.style.border = "0";
                colc.style.border = "0";
                col.style.padding = "3px";
                colc.style.padding = "3px";
                col.style.borderRight = "2px solid #777777";
            }
        }
    }
}

// Set the onload event properly
window.onload = numbers;
