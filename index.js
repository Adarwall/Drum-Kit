document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        makeSound(button.innerHTML);
        animateButton(button.innerHTML);
    });
});

document.addEventListener('keydown', () => {
    makeSound(this.event.key);
    animateButton(this.event.key);
});

function makeSound(value) {
    switch(value) {
        case 'w':
            const tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            const tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            const tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            const tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            const snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            const kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        case 'l':
            const crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        default: 
            
    }
}

function animateButton(value) {
    const button = document.querySelector('.' + value);
    button.classList.add('pressed');
    setTimeout(() => button.classList.remove('pressed'), 100)
}
