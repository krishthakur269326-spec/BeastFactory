const galleryImages =
    document.querySelectorAll(".gallery-img");

const lightbox =
    document.getElementById("lightbox");

const lightboxImg =
    document.getElementById("lightbox-img");

const closeBtn =
    document.querySelector(".close");

const nextBtn =
    document.querySelector(".next");

const prevBtn =
    document.querySelector(".prev");

let currentIndex = 0;

// OPEN LIGHTBOX

galleryImages.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentIndex = index;

        showImage();

        lightbox.classList.add("active");

    });

});

// SHOW IMAGE

function showImage() {

    lightboxImg.src =
        galleryImages[currentIndex].src;

}

// NEXT IMAGE

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }

    showImage();

});

// PREVIOUS IMAGE

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex =
            galleryImages.length - 1;
    }

    showImage();

});

// CLOSE LIGHTBOX

closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

// CLICK OUTSIDE TO CLOSE

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.classList.remove("active");

    }

});

// KEYBOARD SUPPORT

document.addEventListener("keydown", (e) => {

    if (!lightbox.classList.contains("active")) return;

    if (e.key === "ArrowRight") {

        currentIndex++;

        if (currentIndex >= galleryImages.length) {
            currentIndex = 0;
        }

        showImage();
    }

    if (e.key === "ArrowLeft") {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex =
                galleryImages.length - 1;
        }

        showImage();
    }

    if (e.key === "Escape") {

        lightbox.classList.remove("active");

    }

});