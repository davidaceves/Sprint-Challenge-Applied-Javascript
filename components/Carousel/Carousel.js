class Carousel {
    constructor(carouselElement){
        this.currentIndex = 0;
        this.carouselElement = carouselElement;
        this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');
        this.images = document.querySelectorAll('.carousel img');
        this.currentSlide = this.images[this.currentIndex];

        this.currentSlide.style.display = 'flex';

        this.rightButton.addEventListener('click', () => {
            this.playForward();
        });

        this.leftButton.addEventListener('click', () => {
            this.playBackward();
        });
    }

    playForward() {
        this.images[this.currentIndex].style.display = 'none';

        this.images[this.currentIndex + 1].style.display = 'flex';

        this.currentIndex += 1;

        if (this.currentIndex === 3) {
            this.currentIndex = 0;
            this.images[this.currentIndex].style.display = 'flex';
        }
    }

    playBackward() {
        this.images[3].style.display = 'flex';
    }
}

let carousel = document.querySelectorAll(".carousel")
                       .forEach(item => new Carousel(item));



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/