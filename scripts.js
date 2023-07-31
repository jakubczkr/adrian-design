function show(divId) {
    let div = document.getElementById(divId)
    div.style.display = "flex"
}

function hide(divId) {
    let div = document.getElementById(divId)
    div.style.display = "none"
}

onwheel = (event) => { 
    if (event.deltaY < 0) {
        show("logo-div")
        hide("main-div")
    } else {
        show("main-div")
        hide("logo-div")
    }
};