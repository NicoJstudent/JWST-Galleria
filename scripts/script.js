const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Alert, pelkästään session ensimmäisellä kerralla
var visited = sessionStorage.getItem('visited');
if (!visited) {
    alert("Tämä sivusto on tehtyä pelkästään harjoittelu tarkoituksessa, eikä ole tarkoitettu julkaistavaksi!");
    sessionStorage.setItem('visited', true);
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Tallentaa vastauksen local storageen, ettei joka sivulla tarvitse erikseen painaa dark modea
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

