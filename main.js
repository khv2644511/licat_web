const toggleBar = document.querySelector('.navbar_toglebar');
const menu = document.querySelector('.navbar_menu');
const search = document.querySelector('.navbar_search');

toggleBar.addEventListener('click', () => {
    menu.classList.toggle('active');
    search.classList.toggle('active');
});

