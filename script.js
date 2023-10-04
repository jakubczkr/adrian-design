function testF(divId) {

    const divs = document.getElementsByClassName("content");

    Array.from(divs).forEach(div => {
        if (div.id === divId)
            div.style.display = "grid";
        else
            div.style.display = "none";
    });


}