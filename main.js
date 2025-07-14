$(document).ready(function () {
    // this basically means that the webpage will be fully loaded before this function starts

    $.getJSON("data.json", function (data) {
        // getJSON basically pulls data from a different source

        const tableBody = $("#spot-table-body");

        // Go through each spot and create a row
        data.forEach(function (spot) {
            // Destructure latitude and longitude from the location array 
            const [lat, lng] = spot.location;

            // Build the map link using the correct coordinates
            const mapLink = `https://www.google.com/maps?q=${lat},${lng}`;

            // Create the table row with name, description, and map link
            const row = `
                <tr>
                    <td>${spot.name}</td>
                    <td>${spot.description}</td>
                    <td><a href="${mapLink}" target="_blank">🌐 Map</a></td>
                </tr>
            `;

            // Append the row to the table body
            tableBody.append(row);
        });
    });
});
