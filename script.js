Shery.imageEffect("#back", {
    style: 5,
    config: {
    a: { value: 1.49, range: [0, 30] },
    b: { value: -0.98, range: [-1, 1] },
    aspect: { value: 1.8822947576656774 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.33, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 0 },
    noise_speed: { value: 1.59, range: [0, 10] },
meatball: { value: 0.21, range: [0, 2] },
discard_threshold: { value: 0.5, range: [0, 1] },
antialias_threshold: { value: 0, range: [0, 0.1] },
noise_height: { value: 0.47, range: [0, 2] },
noise_scale: { value: 12.15, range: [0, 100] },
    },
    gooey: true,
});

var elems = document.querySelectorAll(".elem");
var isAnimating = false;

elems.forEach(function(elem) {
    elem.dataset.currentH1Index = 0;
});

document.querySelector("#main").addEventListener("click", function () {
    if (!isAnimating) {
        isAnimating = true;

        elems.forEach(function(elem) {
            var h1s = elem.querySelectorAll("h1");
            var currentH1Index = parseInt(elem.dataset.currentH1Index);

            gsap.to(h1s[currentH1Index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function () {
                    gsap.set(this._targets[0], { top: "100%" });
                },
            });

            currentH1Index = (currentH1Index === h1s.length - 1) ? 0 : currentH1Index + 1;
            elem.dataset.currentH1Index = currentH1Index;

            gsap.to(h1s[currentH1Index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
            });
        });

        setTimeout(function() {
            isAnimating = false;
        }, 1000);
    }
});


