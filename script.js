const profileImages = document.querySelectorAll('.profile-image');
const accountPage = document.querySelector('.account-page');

profileImages.forEach(image => {
    image.addEventListener('click', () => {
        accountPage.style.display = 'block';
    });
});