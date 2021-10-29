let secHeight = document.querySelectorAll("section");
sectionHeight = window.innerHeight * secHeight.length;

//create and append side nav panel items
var item_ul = document.getElementById("navigator");
for (ind = 0; ind < secHeight.childElementCount; ind++) {
    var childElements = secHeight.children[ind];
    var item_li = document.createElement("li");
    var item_a = document.createElement("a");

    item_li.setAttribute("class", childElements.getAttribute("id"));

    item_a.setAttribute("href", "#" + childElements.getAttribute("id"));

    if (childElements.getAttribute("data-sec") !== "") {
        item_a.appendChild(
            document.createTextNode(childElements.getAttribute("data-sec"))
        );
    } else {
        item_a.innerHTML = "&nbsp;";
    }

    item_ul.appendChild(item_li);
    item_li.appendChild(item_a);
}

//set active by default
//item_ul.firstChild.classList.add("active");

var totalNavItems = document.getElementById("navigator").childElementCount;
var totalNavChilds = document.getElementById("navigator").children;
var navHeight = document.getElementById("navigator").offsetHeight;

var indicatorHeight = navHeight / totalNavItems;
var navIndicator = document.getElementById("indicator");
navIndicator.style.height = indicatorHeight + "px";

function childRemoveClass(elem) {
    for (let i = 0; i < elem.length; i++) {
        elem[i].classList.remove("active");
    }
}

var direction;
let lastScrollTop = 0;
let docScroll = 0;
document.addEventListener("scroll", function () {
    docScroll = window.scrollY;

    if (docScroll > lastScrollTop) {
        direction = "down";
    } else {
        direction = "up";
    }
    lastScrollTop = docScroll;

    var scrollTopValue = docScroll * (navHeight / sectionHeight);
    navIndicator.style.top = scrollTopValue + "px";

    var classToAnimate = document.getElementById("content");

    for (let i = 0; i < classToAnimate.childElementCount; i++) {
        var childElements = classToAnimate.children[i];
        if (direction === "down") {
            if (childElements.offsetTop <= docScroll) {
                var elementID = childElements.getAttribute("id");
                if (totalNavChilds[i].classList.contains(elementID)) {
                    childRemoveClass(totalNavChilds);
                    totalNavChilds[i].classList.add("active");
                }
            }
        } else {
            if (
                childElements.offsetTop - childElements.offsetHeight <
                docScroll
            ) {
                var elementID = childElements.getAttribute("id");
                if (totalNavChilds[i].classList.contains(elementID)) {
                    childRemoveClass(totalNavChilds);
                    totalNavChilds[i].classList.add("active");
                }
            }
        }
    }
});

var vid = document.getElementById("platformVideo");

vid.ontimeupdate = function () {
    var newTime = Math.round(vid.currentTime);
    console.log(newTime);

    if (newTime > 5) {
        document.getElementById("showText").classList.add("show");
    }
};
