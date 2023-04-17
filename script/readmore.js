let readmore = document.getElementById("readmore")

readmore.onclick = () =>{
    let more = document.getElementById("more-progects")
    more.style.display = "block"
    let hide = document.getElementById("hidemore")
    hide.style.display = "block"
    readmore.style.display = "none"
    hide.onclick = () =>{
        more.style.display = "none"
        hide.style.display = "none"
    }

}