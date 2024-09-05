const profileImages = document.querySelectorAll('.profile-image');
const accountPage = document.querySelector('.account-page');

profileImages.forEach(image => {
    image.addEventListener('click', () => {
        // For now, just show the same account page when clicked
        accountPage.style.display = 'block';
    });
});