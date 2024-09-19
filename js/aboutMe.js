gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ease:'none', duration: 2});

const tl = gsap.timeline();

tl.from('#aboutBodyInfoKnow', {x:'145%'});
tl.from('#aboutBodyInfoSkill', {x:'160%'});
tl.from('#aboutBodyInfoContact', {x:'110%'});

ScrollTrigger.create({
    animation: tl,
    trigger: '#about',
    start: 'top top',
    end: '+=4000px',
    pin: true,
    scrub: true
})