const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});

const savedMode = localStorage.getItem('dark-mode');
if (savedMode === 'enabled') {
    body.classList.add('dark-mode');
} else {
    body.classList.remove('dark-mode');
}

 $(document).ready(function() {
    // Linkki feediin
    const rssFeedURL = "https://www.jpl.nasa.gov/feeds/news/";

    //jotenkin toimiva linkki: https://feeds.megaphone.fm/newheights

    // Fetchataan feedi ajax metodilla
    $.ajax({
        url: rssFeedURL,
        dataType: "xml",
        success: function(data) {
            var items = $(data).find("item");

            //feedin itemit
            items.each(function() {
                var title = $(this).find("title").text();
                var link = $(this).find("link").text();
                var description = $(this).find("description").text();

                //luodaan html
                var itemHTML = `
                    <div class="feed-item">
                        <h2><a href="${link}">${title}</a></h2>
                        <p>${description}</p>
                    </div>
                `;
                
                $("#rss-feed").append(itemHTML);
            });
        },
        //error viesti jos feediä ei löydy
        error: function() {
            $("#rss-feed").html("<p>Unable to fetch RSS feed.</p>");
        }
    });
});

