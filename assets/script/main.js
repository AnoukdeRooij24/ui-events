// twaalfde link - interaction
// voorbeeld
let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// eerste link - frontend
// Ik wil de link laten bibberen als je er op klikt.
let bibberlink = document.querySelector('a:nth-of-type(1)')

bibberlink.addEventListener('click', test)
bibberlink.addEventListener('animationend', test)

function test(){
  bibberlink.classList.toggle('bibberen')
}


// tweede link - design
// ik wil de link van kleur laten veranderen als je er op klikt.
let kleurenlink = document.querySelector('a:nth-of-type(2)')
console.log(kleurenlink)

kleurenlink.addEventListener('click', test2)
kleurenlink.addEventListener('animationend', test2)

function test2(){
  kleurenlink.classList.toggle('kleurenlink')
}


// derde link - &
// ik wil je link laten vergroten en verkleinen als je erop klikt.
let verschaling = document.querySelector('a:nth-of-type(3)')

verschaling.addEventListener('click', verkleinen)
verschaling.addEventListener('animationend', verkleinen)

function verkleinen(){
  verschaling.classList.toggle('groter-maken')
}

// vierde link - development
// ik wil de link op en neer laten gaan als je er op klikt.
let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener('click', spring)
development.addEventListener('animationend', spring)

function spring(){
  development.classList.toggle('op-en-neer')
}


// vijfde link - sprint5
// ik wil de link heen en weer laten gaan als je erop klikt.
let sprint5 = document.querySelector('a:nth-of-type(5)')

sprint5.addEventListener('click', schuif)
sprint5.addEventListener('animationend', schuif)

function schuif(){
  sprint5.classList.toggle('heen-en-weer')
}


// zesde link - fix
// ik wil dat de kleuren van de border veranderen als je erop klikt.
let fix = document.querySelector('a:nth-of-type(6)')

fix.addEventListener('click', borderSwap)
fix.addEventListener('animationend', borderSwap)

function borderSwap(){
  fix.classList.toggle('color-border')
}


// zevende link - the
// ik wil dat de kleuren van de tekst veranderen als je erop klikt.
let the = document.querySelector('a:nth-of-type(7)')

the.addEventListener('click', tekstSwap)
the.addEventListener('animationend', tekstSwap)

function tekstSwap(){
  the.classList.toggle('color-tekst')
}


// achtste link - flow
// ik wil dat de link een salto maakt als je erop klikt.
let flow = document.querySelector('a:nth-of-type(8)')

flow.addEventListener('click', rondjesDraaien)
flow.addEventListener('animationend', rondjesDraaien)

function rondjesDraaien(){
  flow.classList.toggle('koprol')
}


// negende link - user
// ik wil dat de link veranderd van style als je erop klikt.
let user = document.querySelector('a:nth-of-type(9)')

user.addEventListener('click', styleSwap)
user.addEventListener('animationend', styleSwap)

function styleSwap(){
  user.classList.toggle('changeStyle')
}

// tiende link - interface
// ik wil dat de border van de link weg gaat als je erop klikt.
let interface = document.querySelector('a:nth-of-type(10)')

interface.addEventListener('click', borderknipper)
interface.addEventListener('animationend', borderknipper)

function borderknipper (){
  interface.classList.toggle('borderborder')
}
