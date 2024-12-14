
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


const searchInput = document.querySelector('main input');
searchInput.addEventListener('focus', () => {
    searchInput.style.transition = '0.3s ease-in-out';
    searchInput.style.width = '400px';
});

searchInput.addEventListener('blur', () => {
    searchInput.style.width = '300px';
});


const logo = document.querySelector('.logo img');
logo.addEventListener('mouseover', () => {
    logo.style.transform = 'scale(1.1)';
    logo.style.transition = 'transform 0.3s ease';
});

logo.addEventListener('mouseout', () => {
    logo.style.transform = 'scale(1)';
});