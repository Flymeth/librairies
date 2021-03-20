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
}
]
for(let i in sRevealOptions) {
    if(isNaN(i)) break
    ScrollReveal().reveal(document.querySelectorAll(`.sreveal${parseInt(i)+1}`), sRevealOptions[i])
}