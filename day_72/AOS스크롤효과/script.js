function myAOS() {
    AOS.init({
            startEvent: 'DOMContentLoaded',
            offset: 120,
            delay: 300,
            duration: 1000,
            easing: 'ease',
            once: false,
            mirror: false,
            anchorPlacement: 'top-bottom',
        });
}
myAOS();