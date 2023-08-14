const gallery = (function() {
    const galleryItems = [
        {"image":"./assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash.webp",
        "category":"Concert",
        "alt":"image de concert"},
    
        {"image":"./assets/images/gallery/entreprise/ali-morshedlou-wmd64tmfc4k-unsplash.webp",
        "category":"Entreprises",
        "alt":"image d'entreprise"},
    
        {"image":"./assets/images/gallery/entreprise/jason-goodman-tho1-oukbg0-unsplash.webp",
        "category":"Entreprises",
        "alt":"image d'entreprise"},
    
        {"image":"./assets/images/gallery/mariage/hannah-busing-rvf2r-qmprk-unsplash.webp",
        "category":"Mariages",
        "alt":"image de mariage"},
    
        {"image":"./assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash.webp",
        "category":"Portrait",
        "alt":"image de portrait"},
    
        {"image":"./assets/images/gallery/mariage/hannah-busing-rvf2r-qmprk-unsplash.webp",
        "category":"Mariages",
        "alt":"image de mariage"},
    
        {"image":"./assets/images/gallery/portraits/nino-van-prattenburg--443cl1uR_8-unsplash.webp",
        "category":"Portrait",
        "alt":"image de portrait"},
    
        {"image":"./assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplash.webp",
        "category":"Concert",
        "alt":"image de concert"},
    
        {"image":"./assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY-unsplash.webp",
        "category":"Entreprises",
        "alt":"image d'entreprise"}
    ]

    const carouselItems = [
        {
            "image":"./assets/images/slider/ryoji-iwata-wUZjnOv7t0g-unsplash.webp",
            "alt":"image de streetview"
        },
        {
            "image":"./assets/images/slider/nicholas-green-nPz8akkUmDI-unsplash.webp",
            "alt":"image de concert"
        },
        {
            "image":"./assets/images/slider/edward-cisneros-3_h6-1NPDGw-unsplash.webp",
            "alt":"image de mariage"
        }
    ]

    let init = () => {
        const prevButton = document.querySelector('.carousel-control-prev')
        const nextButton = document.querySelector('.carousel-control-next')
        /* gallery */
        const galleryContainer = document.querySelector(".gallery")

        galleryItems.forEach(item => {
            const imageElement = document.createElement("img")

            imageElement.setAttribute("src", item.image)
            imageElement.setAttribute("alt", item.alt)
            imageElement.setAttribute("title", item.category)

            imageElement.classList.add("gallery-item")
            galleryContainer.appendChild(imageElement)
        })

        let modalContainer = document.querySelector(".modal")

        let displayModal = () => {        
            for (let i = 0; i > galleryItems.length; i++) {
            let img = img.querySelectorAll(".gallery-item")

            img.onclick = function(){
                modalContainer.style.display = "block";
                img[i].src = this.src;
            }
        }}

        /* carousel */
        let currentIndex = 0
        const carouselSlide = document.querySelector(".carousel-inner")

        /* handle index of img */
        let changeSlide = (step) => {
            currentIndex += step
        
            if (currentIndex < 0) {
                currentIndex = carouselItems.length - 1
            } else if (currentIndex >= carouselItems.length) {
                currentIndex = 0;
            }
        
            updateSlide()
            updateDot()
        }
        
        /* generate img */ 
        function updateSlide() {
            const currentImage = carouselSlide.querySelector(".carousel-item");
            const nextIndex = (currentIndex + 1) % carouselItems.length;
            const nextItem = carouselItems[nextIndex];
        
            const nextImage = document.createElement("img");
            nextImage.setAttribute("src", nextItem.image);
            nextImage.setAttribute("alt", nextItem.alt);
        
            nextImage.classList.add("carousel-item", "fadeIn");
        
            // Set up animation classes
            currentImage.classList.remove("fadeIn");
            currentImage.classList.add("fadeOut");
        
            carouselSlide.appendChild(nextImage);
            
            setTimeout(() => {
                carouselSlide.removeChild(currentImage);
            }, 999); // Same duration as the animation
        
            currentIndex = nextIndex;
        }

        /* preload img,faster load */

        const initialImage = document.createElement("img");
        initialImage.setAttribute("src", carouselItems[currentIndex].image);
        initialImage.setAttribute("alt", carouselItems[currentIndex].alt);
        initialImage.classList.add("carousel-item");
        carouselSlide.appendChild(initialImage);

        /* add class to active dot */
        let updateDot = () => {
            let allDots = document.querySelectorAll(".carousel-indicator") 

            for (let i = 0; i < carouselItems.length; i++) {
                if ([currentIndex] == allDots[i].id) {
                    allDots[i].classList.add("active")
                } else {
                    allDots[i].classList.remove("active")
                }
            }
        }

    
        prevButton.addEventListener('click', () => changeSlide(-1))
        nextButton.addEventListener('click', () => changeSlide(1))
    
        updateSlide()
        updateDot()
        displayModal()
    }
    return {
        init: init,
    }
})()

gallery.init()