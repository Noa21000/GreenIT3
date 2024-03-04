const hamburger = document.querySelector(".hamburger")
    , navLinks = document.querySelector(".nav-links")
    , links = document.querySelectorAll(".nav-links li");
hamburger.addEventListener("click", (()=>{
        navLinks.classList.toggle("open"),
            links.forEach((e=>{
                    e.classList.toggle("fade")
                }
            )),
            hamburger.classList.toggle("toggle")
    }
));
