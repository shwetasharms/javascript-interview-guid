const container = document.querySelector('.container');
const loader = document.querySelector('.loader');
const URL = `https://randomfox.ca/images/`;

function getRandomNumber() {
    return Math.floor(Math.random() * 122) + 1;
}

function loadImage(numImages = 6) {
    for (let i = 0; i < numImages; i++) {
        const imgElement = document.createElement('img');
        imgElement.src = `${URL}${getRandomNumber()}.jpg`;
        container.appendChild(imgElement);
    }
}

function showLoader() {
    loader.style.display = 'block';
}

function hideLoader() {
    loader.style.display = 'none';
}

function loadMoreImages() {
    showLoader();
    setTimeout(() => {
        loadImage();
        hideLoader();
    }, 1000);
}

function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20) {
        loadMoreImages();
    }
}

document.addEventListener('scroll', handleScroll);

// Initial load
loadImage();
