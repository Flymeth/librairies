let sRevealOptions=[
{
    reset: false,
    distance: '15px',
    duration: 1000,
    scale: 1.5
},
{
    reset: false,
    distance: '20px',
    duration: 1500,
    delay: 150
},
{
    reset: false,
    distance: '-50px',
    duration:  2000,
    delay: 500
}
]
for(let i in sRevealOptions) {
    if(isNaN(i)) break
    ScrollReveal().reveal(document.querySelectorAll(`.sreveal${parseInt(i)+1}`), sRevealOptions[i])
}

// if mobile

if(navigator.userAgent.toLowerCase().includes('mobile')) {
    document.body.classList.add('mobile')
}else {
    document.body.classList.add('pc')
}

// show/hide menu
let s=0
window.addEventListener('scroll', () => {
    nav()
})
function nav() {
    let nav = document.querySelector('nav')
    if(window.scrollY<window.innerHeight/4*3) {
        return nav.classList.remove('hide')
    }
    if(s<window.scrollY) {
        nav.classList.add('hide')
    }else {
        nav.classList.remove('hide')
    }
    s=window.scrollY
}
nav()

// style viewer
let style = document.querySelector('.styleviewer')
let nextBtn = document.querySelector('button.next')
let previousBtn = document.querySelector('button.previous')
let styles = [
    "css1",
    "vscode"
]
console.log(style.firstChild.lastChild.firstChild.childNodes[4].childNodes[1].firstChild.innerText)
let actualStyle = 0
function setStyle(nb, newNb) {
    if(nb){
        style.classList.replace(styles[nb], styles[newNb])
        style.firstChild.lastChild.firstChild.childNodes[4].childNodes[1].firstChild.innerText = style.firstChild.lastChild.firstChild.childNodes[4].childNodes[1].firstChild.innerText.replace(styles[nb], styles[newNb])
    }else {
        style.classList.add(styles[newNb])
        style.firstChild.lastChild.firstChild.childNodes[4].childNodes[1].firstChild.innerText = styles[newNb]
    }
}
setStyle(null, 0)
function next() {
    let nb = actualStyle
    actualStyle++
    if(actualStyle>styles.length-1) {
        actualStyle=0
    }
    setStyle(nb,actualStyle)
}
function previous() {
    let nb = actualStyle
    actualStyle--
    if(actualStyle<0) {
        actualStyle=styles.length-1
    }
    setStyle(nb,actualStyle)
}