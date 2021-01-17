let menubtn = document.querySelector('.plussign');
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');
let line3 = document.querySelector('.line3');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let intro = document.querySelector(".containerabout");
let about = document.querySelector('.about');
let projects = document.querySelector('.projects');
let contacts = document.querySelector('.contacts');

menubtn.addEventListener("click", function() {
    if (menubtn.classList.contains('inactive')) 
        {
        menubtn.classList.remove('inactive');
        menubtn.classList.add('active');
        line1.classList.add('line1anim');
        line2.classList.add('line2anim');
        line3.classList.add('line3anim');
        btn1.classList.add('btn1anim');
        btn2.classList.add('btn2anim');
        btn3.classList.add('btn3anim');
        menubtn.animate([
            {transform: "rotate(180deg)"}
        ], {
            duration: 200,
            fill: 'forwards'
        });
        } 
        else {
        menubtn.classList.add('inactive');
        menubtn.classList.remove('active');
        line1.classList.remove('line1anim');
        line2.classList.remove('line2anim');
        line3.classList.remove('line3anim');
        btn1.classList.remove('btn1anim');
        btn2.classList.remove('btn2anim');
        btn3.classList.remove('btn3anim');
        menubtn.animate([
            {transform: "rotate(0deg)"}
        ], {
            duration: 200,
            fill: 'forwards'
        });
        }
});

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