const imageDetails = [
  
    { url: 'mountain2.jpg', name: 'Mountain 2' },
    { url: 'mountain4.jpg', name: 'Mountain 3' },
    { url: 'mountain5.jpg', name: 'Mountain 3' },
    { url: 'mountain3.jpg', name: 'Mountain 3' },
    { url: 'mountain6.jpg', name: 'Mountain 3' },
    { url: 'mountain7.jpg', name: 'Mountain 3' },
    { url: 'mountain8.jpg', name: 'Mountain 3' },
    { url: 'mountain9.jpg', name: 'Mountain 3' },
    { url: 'mountain1.jpg', name: 'Mountain 1' },
    // Add more image details as needed
];

const gallery = document.getElementById('gallery');
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');

let currentIndex = 0;

function displayImages() {
    gallery.innerHTML = ''; // Clear existing content

    imageDetails.forEach((detail, index) => {
        const container = document.createElement('div');
        container.classList.add('image-container');

        const img = document.createElement('img');
        img.src = detail.url;
        img.alt = detail.name;

        const name = document.createElement('p');
        name.textContent = detail.name;

        const downloadBtn = document.createElement('a');
        downloadBtn.href = detail.url;
        downloadBtn.download = detail.name + '.jpg';
        downloadBtn.textContent = 'Download';

        container.appendChild(img);
        container.appendChild(name);
        container.appendChild(downloadBtn);

        gallery.appendChild(container);
    });

    updateButtonVisibility();
}

function updateButtonVisibility() {
    scrollLeftBtn.disabled = currentIndex === 0;
    scrollRightBtn.disabled = currentIndex === imageDetails.length - 1;
}

scrollLeftBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        displayImages();
    }
});

scrollRightBtn.addEventListener('click', () => {
    if (currentIndex < imageDetails.length - 1) {
        currentIndex++;
        displayImages();
    }
});

window.onload = displayImages;

