gsap.registerPlugin(ScrollTrigger);

gsap.to("#text", {
    yPercent: 300,
    ease: "none",
    scrollTrigger: {    
        trigger: ".parallax",
        start: "top top", 
        end: "bottom top", 
        scrub: true
    }
});

gsap.to("#grass", {
    yPercent: -3, 
    ease: "none",
    scrollTrigger: {
        trigger: ".parallax",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

const animalSwiper = new Swiper(".animal-slider", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 20, 
});
