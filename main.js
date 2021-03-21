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
    duration: 1500,
    delay: 250
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