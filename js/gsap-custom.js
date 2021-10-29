gsap.registerPlugin(ScrollTrigger);

const hero = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        scrub: 0,
        pin: false,
        start: "top top",
        end: "bottom -20%",
        onEnter: () => {
            $(".side-nav li").removeClass("active");
            document
                .querySelector(".side-nav li:nth-child(1)")
                .classList.add("active");
        },
        onEnterBack: () => {
            $(".side-nav li").removeClass("active");
            document
                .querySelector(".side-nav li:nth-child(1)")
                .classList.add("active");
        },
    },
});
//------------------------------//

const productServices = gsap.timeline({
    scrollTrigger: {
        trigger: ".products-services",
        scrub: 0,

        pin: true,
        start: "top top",
        end: "bottom 0%",
        onEnter: () => {
            $(".side-nav li").removeClass("active");
            document
                .querySelector(".side-nav li:nth-child(2)")
                .classList.add("active");
        },
        onEnterBack: () => {
            $(".side-nav li").removeClass("active");
            document
                .querySelector(".side-nav li:nth-child(2)")
                .classList.add("active");
        },
    },
});
const productServicesAnim = gsap.timeline({
    scrollTrigger: {
        trigger: ".products-services",
        scrub: 1,
        start: "top 80%",
        end: "bottom bottom",
    },
});
productServicesAnim.to(".products-services .sec-heading", {
    duration: 10,
    right: "0%",
});
//------------------------------//

let count = 0;

var blueBox = document.getElementById("textBox");
const sportsBook = gsap.timeline({
    scrollTrigger: {
        trigger: ".sportsbook",
        scrub: 1,
        pin: true,
        start: "top top",
        end: "bottom 0%",
        onEnter: () => {
            blueBox.classList.add("show");

            $(".side-nav li").removeClass("active");
            document
                .querySelector(".side-nav li:nth-child(3)")
                .classList.add("active");

            if (count > 0) {
                return;
            }

            count = 1;
            var text1 = document.getElementById("shuffle-one");
            var text2 = document.getElementById("shuffle-two");
            var text3 = document.getElementById("shuffle-three");
            var text4 = document.getElementById("shuffle-four");
            var text5 = document.getElementById("shuffle-five");
            var text6 = document.getElementById("shuffle-six");
            // var text = document.getElementsByClassName('shuffle-this');
            console.log(WordShuffler);
            var pText = new WordShuffler(text1, {
                textColor: "#fff",
                timeOffset: 6,
                randNum: false,
            });
            var pText = new WordShuffler(text2, {
                textColor: "#fff",
                timeOffset: 6,
                randNum: false,
            });
            var pText = new WordShuffler(text3, {
                textColor: "#fff",
                timeOffset: 6,
                randNum: false,
            });
            var pText = new WordShuffler(text4, {
                textColor: "#fff",
                timeOffset: 6,
                randNum: false,
            });
            var pText = new WordShuffler(text5, {
                textColor: "#fff",
                timeOffset: 6,
                randNum: false,
            });
            var pText = new WordShuffler(text6, {
                textColor: "#fff",
                timeOffset: 6,
                randNum: false,
            });
        },
        onLeave: () => {
            blueBox.classList.remove("show");
        },
        onEnterBack: () => {
            blueBox.classList.add("show");

            $(".side-nav li").removeClass("active");
            document
                .querySelector(".side-nav li:nth-child(3)")
                .classList.add("active");
        },
        onLeaveBack: () => {
            blueBox.classList.remove("show");
        },
    },
});

//------------------------------//

const multiTenant = gsap.timeline({
    scrollTrigger: {
        trigger: ".multi-tenant-platform",
        scrub: 1,
        pin: true,
        start: "top top",
        end: "bottom -20%",
        onEnter: () => {
            $(".side-nav li").removeClass("active");
            document
                .querySelector(".side-nav li:nth-child(4)")
                .classList.add("active");
        },
        onEnterBack: () => {
            $(".side-nav li").removeClass("active");
            document
                .querySelector(".side-nav li:nth-child(4)")
                .classList.add("active");
        },
    },
});

const sportsBookAnim = gsap.timeline({
    scrollTrigger: {
        trigger: ".multi-tenant-platform",
        scrub: 1,
        start: "top 80%",
        end: "bottom bottom",
    },
});
sportsBookAnim.to(".multi-tenant-platform .sec-heading", {
    duration: 10,
    right: "0%",
});

//------------------------------//

const customOdds = gsap.timeline({
    scrollTrigger: {
        trigger: ".custom-odds",
        scrub: 1,
        pin: true,
        start: "top top",
        end: "bottom 0%",
        onEnter: () => {
            $(".side-nav li").removeClass("active");
            document
                .querySelector(".side-nav li:nth-child(5)")
                .classList.add("active");
        },
        onEnterBack: () => {
            $(".side-nav li").removeClass("active");
            document
                .querySelector(".side-nav li:nth-child(5)")
                .classList.add("active");
        },
    },
});
const customOddsAnim = gsap.timeline({
    scrollTrigger: {
        trigger: ".custom-odds",
        scrub: 1,
        start: "top 80%",
        end: "bottom bottom",
    },
});
customOddsAnim.to(".custom-odds .sec-heading", {
    duration: 10,
    right: "0%",
});
//------------------------------//

const productLocalisation = gsap.timeline({
    scrollTrigger: {
        trigger: ".product-localisation",
        scrub: 1,
        pin: true,
        start: "top top",
        end: "bottom 0%",
        onEnter: () => {
            $(".side-nav li").removeClass("active");
            document
                .querySelector(".side-nav li:nth-child(6)")
                .classList.add("active");
        },
        onEnterBack: () => {
            $(".side-nav li").removeClass("active");
            document
                .querySelector(".side-nav li:nth-child(6)")
                .classList.add("active");
        },
    },
});
//------------------------------//

const userInterface = gsap.timeline({
    scrollTrigger: {
        trigger: ".user-interface",
        scrub: 1,
        pin: true,
        start: "top top",
        end: "bottom 0%",
        onEnter: () => {
            $(".side-nav li").removeClass("active");
            document
                .querySelector(".side-nav li:nth-child(7)")
                .classList.add("active");
        },
        onEnterBack: () => {
            $(".side-nav li").removeClass("active");
            document
                .querySelector(".side-nav li:nth-child(7)")
                .classList.add("active");
        },
    },
});
const userInterfaceAnim = gsap.timeline({
    scrollTrigger: {
        trigger: ".user-interface",
        scrub: 1,
        start: "top 80%",
        end: "bottom bottom",
    },
});
userInterfaceAnim.to(".user-interface .sec-heading", {
    duration: 10,
    right: "0%",
});
//------------------------------//

const standAlone = gsap.timeline({
    scrollTrigger: {
        trigger: ".standalone",
        scrub: 1,
        pin: true,
        start: "top top",
        end: "bottom 0%",
        onEnter: () => {
            $(".side-nav li").removeClass("active");
            document
                .querySelector(".side-nav li:nth-child(8)")
                .classList.add("active");
        },
        onEnterBack: () => {
            $(".side-nav li").removeClass("active");
            document
                .querySelector(".side-nav li:nth-child(8)")
                .classList.add("active");
        },
    },
});
const standAloneAnim = gsap.timeline({
    scrollTrigger: {
        trigger: ".standalone",
        scrub: 1,
        start: "top 80%",
        end: "bottom bottom",
    },
});
standAloneAnim.to(".slide-standalone .sec-heading", {
    duration: 10,
    right: "0%",
});
//------------------------------//

const secMedia = gsap.timeline({
    scrollTrigger: {
        trigger: ".media",
        scrub: 1,
        pin: false,
        start: "top top",
        end: "bottom 0%",
        onEnter: () => {
            $(".side-nav li").removeClass("active");
            document
                .querySelector(".side-nav li:nth-child(9)")
                .classList.add("active");
        },
        onEnterBack: () => {
            $(".side-nav li").removeClass("active");
            document
                .querySelector(".side-nav li:nth-child(9)")
                .classList.add("active");
        },
    },
});
//------------------------------//

const secPartners = gsap.timeline({
    scrollTrigger: {
        trigger: ".partners",
        scrub: 1,
        pin: false,
        start: "top top",
        end: "bottom 0%",
        onEnter: () => {
            $(".side-nav li").removeClass("active");
            document
                .querySelector(".side-nav li:nth-child(10)")
                .classList.add("active");
        },
        onEnterBack: () => {
            $(".side-nav li").removeClass("active");
            document
                .querySelector(".side-nav li:nth-child(10)")
                .classList.add("active");
        },
    },
});
//------------------------------//
