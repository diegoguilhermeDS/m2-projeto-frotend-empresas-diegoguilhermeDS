function eventShowMenu() {
    const btnMenu = document.querySelector(".button-menu-icon")
    const formHomePage = document.querySelector(".nav-header")

    let img = btnMenu.children[0]

    btnMenu.addEventListener("click", () => {
        formHomePage.classList.toggle("nav-show")

        if (btnMenu.id == "show") {
            btnMenu.id = "close"
            img.src = "/src/assets/img/Vector (4).png"

        } else if(btnMenu.id == "close") {
            btnMenu.id = "show"
            img.src = "/src/assets/img/Vector.png"
        }
    })
}


function eventShowMenuCard(){
    const btns = document.querySelectorAll("[data-menu-control]")

    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            console.log(btn.parentElement.children[1])
            btn.parentElement.children[1].classList.toggle("nav-show")

            if (btn.id == "show") {
                btn.id = "close"
                btn.children[0].src = "/src/assets/img/Vector (4).png"
                btn.children[0].style.width = "16px"

            } else if (btn.id == "close") {
                btn.id = "show"
                btn.children[0].src = "/src/assets/img/Vector.png"
            }
        })
    })
}


export {
    eventShowMenu,
    eventShowMenuCard
}

