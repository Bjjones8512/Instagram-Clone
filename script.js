const button = document.querySelector("edit-profile");
const box = document.querySelector("box")

button.addEventListener('click', () =>
{
    box.style.backgroundColor = 'lightblue';
    box.style.width = '100px';
    box.style.height = '100px';
});