import gsap from 'gsap';

const box = document.querySelector('.box');

gsap.to(box, { duration: 2, x: 200, rotate: 360, ease: 'power2.inOut' });
