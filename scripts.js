window.addEventListener('DOMContentLoaded', (event) => {
    const cookieAcceptBtn = document.getElementById('cookie-accept')
    const cookieNotification = document.getElementById('cookie-notification')

    cookieAcceptBtn.addEventListener('click', () => {
        cookieNotification.classList.remove("active");
        localStorage.setItem('cookieNotice', true)
    });

    setTimeout(() => {
        if (!localStorage.getItem("cookieNotice")) {
            cookieNotification.classList.add("active");
        }
    }, 1000)
});