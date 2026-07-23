gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Lenis → membuat scrolling terasa smooth
// GSAP → membuat elemen bergerak/animasi
// ScrollTrigger → menjalankan animasi berdasarkan posisi scroll

// Navbar
gsap.from("#navbar", {
  y: -50,
  opacity: 0,
  duration: 1,

  scrollTrigger: {
    trigger: "#navbar",
    start: "bottom 80%",
  },
});

// Hero Section

gsap.from("#title-hero", {
  y: 50,
  opacity: 0,
  duration: 1,

  scrollTrigger: {
    trigger: "#title-hero",
    start: "top 80%",
  },
});

gsap.from("#paragraf-hero", {
  y: 30,
  opacity: 0,
  duration: 1,

  scrollTrigger: {
    trigger: "#paragraf-hero",
    start: "top 80%",
  },
});

gsap.from("#button-hero", {
  y: 30,
  opacity: 0,
  duration: 1,

  scrollTrigger: {
    trigger: "#button-hero",
    start: "top 80%",
  },
});

gsap.from("#image-hero", {
  y: 100,
  opacity: 0,
  duration: 1,

  scrollTrigger: {
    trigger: "#image-hero",
    start: "top 80%",
  },
});

// Cards

// Card 1
gsap.from("#cards-1", {
  y: 50,
  opacity: 0,
  duration: 1,

  scrollTrigger: {
    trigger: "#cards-1",
    start: "top 80%",
  },
});

// Card 2
gsap.from("#cards-2", {
  y: 50,
  opacity: 0,
  duration: 1,

  scrollTrigger: {
    trigger: "#cards-2",
    start: "top 80%",
  },
});

// Card 3
gsap.from("#cards-3", {
  y: 50,
  opacity: 0,
  duration: 1,

  scrollTrigger: {
    trigger: "#cards-3",
    start: "top 80%",
  },
});

// Grid Tech Stack
gsap.from("#section-frontend", {
  y: 50,
  opacity: 0,
  duration: 1,

  scrollTrigger: {
    trigger: "#section-frontend",
    start: "top 80%",
  },
});

gsap.from("#grid-frontend-1", {
  y: 50,
  opacity: 0,
  duration: 1,

  scrollTrigger: {
    trigger: "#grid-frontend-1",
    start: "top 80%",
  },
});
