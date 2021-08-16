let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let intro = document.querySelector(".containerabout");
let about = document.querySelector('.about');
let projects = document.querySelector('.projects');
let contacts = document.querySelector('.contacts');

function disappear() {
    intro.classList.remove("intro")
    intro.classList.add("outro");
    intro.classList.add("checked");
    setTimeout(function() {
        intro.classList.add("hidden");
    }, 200)
}

function disappear1() {
    projects.classList.remove("reveal")
    projects.classList.add("disappear");
    contacts.classList.remove("reveal")
    contacts.classList.add("disappear");
    setTimeout(function() {
        projects.classList.add("hidden");
        contacts.classList.add("hidden");
    }, 200)
}

function disappear2() {
    about.classList.remove("reveal")
    about.classList.add("disappear");
    contacts.classList.remove("reveal")
    contacts.classList.add("disappear");
    setTimeout(function() {
        about.classList.add("hidden");
        contacts.classList.add("hidden");
    }, 200)
}

function disappear3() {
    about.classList.remove("reveal")
    about.classList.add("disappear");
    projects.classList.remove("reveal")
    projects.classList.add("disappear");
    setTimeout(function() {
        about.classList.add("hidden");
        projects.classList.add("hidden");
    }, 200)
}

btn1.addEventListener("click", function() {
    if (intro.classList.contains("checked")) {
        disappear1();
        about.classList.remove("disappear");
        setTimeout(function() {
        about.classList.remove("hidden");
        about.classList.add("reveal");
    }, 200)
    } else {
        disappear();
        disappear1();
        setTimeout(function() {
        about.classList.remove("disappear");
        about.classList.remove("hidden");
        about.classList.add("reveal");
    }, 200)
    }
});

btn2.addEventListener("click", function() {
    if (intro.classList.contains("checked")) {
        disappear2()
        projects.classList.remove("disappear");
        setTimeout(function() {
        projects.classList.remove("hidden");
        projects.classList.add("reveal");
    }, 200)
    } else {
        disappear();
        disappear2()
        setTimeout(function() {
        projects.classList.remove("disappear");
        projects.classList.remove("hidden");
        projects.classList.add("reveal");
    }, 200)
    }
});

btn3.addEventListener("click", function() {
    if (intro.classList.contains("checked")) {
        disappear3()
        contacts.classList.remove("disappear");
        setTimeout(function() {
        contacts.classList.remove("hidden");
        contacts.classList.add("reveal");
    }, 200)
    } else {
        disappear();
        disappear2()
        setTimeout(function() {
        contacts.classList.remove("disappear");
        contacts.classList.remove("hidden");
        contacts.classList.add("reveal");
    }, 200)
    }
});