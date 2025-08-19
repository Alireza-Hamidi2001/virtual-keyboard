const title = document.querySelector('.title')
const li = document.querySelectorAll('li')
const keyboard = document.querySelector('.keyboard')

window.addEventListener('keyup', function (event) {
    console.log(event.key);
    if (event.key === 'Backspace') {
        title.innerHTML = title.innerHTML.slice(0, -1)
        let backspaceKey = document.getElementById('Backspace')
        backspaceKey.classList.add('hit')
        backspaceKey.addEventListener('animationend', function () {
            backspaceKey.classList.remove('hit')
        })
    }
    // space BTN
    else if (event.key === ' ') {
        let spaceElem = document.getElementById('Space')
        spaceElem.classList.add('spaceHit')
        title.innerHTML += ' '
        spaceElem.addEventListener('animationend', function () {
            spaceElem.classList.remove('spaceHit')
        })
    }
    else if (event.key === 'Ctrl' || event.key === 'Alt' || event.key === 'Shift' || event.key === 'CapsLock' || event.key === 'Control') {
        title.innerHTML += ''
    }
    else {
        title.innerHTML += event.key.toUpperCase()
        li.forEach(function (q) {
            if (q.id == event.key.toUpperCase()) {
                q.classList.add('hit')
                q.addEventListener('animationend', function () {
                    q.classList.remove('hit')
                })
            }
        })
    }

    if (event.key == 'Escape') {
        title.innerHTML = ''
    }
})

function back(event) {
    console.log(event);
}