//sidebar enable/disable
function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

//darkmode enable/disable, also keeps preference after closing window
const themeSwitch = document.querySelector(".theme-switch");

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
};

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', 'inactive');
};

// Apply dark mode on page load if needed
if (localStorage.getItem('darkmode') === 'active') {
    enableDarkMode();
}

themeSwitch.addEventListener("click", () => {
    if (document.body.classList.contains('darkmode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});
