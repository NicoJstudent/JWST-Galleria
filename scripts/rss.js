$(document).ready(function() {
    // Linkki feediin, voi vaihtaa haluamaansa
    const rssFeedURL = " ";

    // Fetch the RSS feed using jQuery's AJAX method
    $.ajax({
        url: rssFeedURL,
        dataType: "xml",
        success: function(data) {
            // Parse the XML response and extract feed items
            var items = $(data).find("item");

            // Iterate through the feed items and display them
            items.each(function() {
                var title = $(this).find("title").text();
                var link = $(this).find("link").text();
                var description = $(this).find("description").text();

                // Create HTML elements for each feed item
                var itemHTML = `
                    <div class="feed-item">
                        <h2><a href="${link}">${title}</a></h2>
                        <p>${description}</p>
                    </div>
                `;

                // Append the item to the feed container
                $("#rss-feed").append(itemHTML);
            });
        },
        error: function() {
            $("#rss-feed").html("<p>Unable to fetch RSS feed.</p>");
        }
    });
});
