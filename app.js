const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

const plusBTN = document.querySelector('.plus')
const minusBTN = document.querySelector('.minus')
const startBTN = document.querySelector('.start')

const msg = document.querySelector('.message')


let time = 0
let interval = null
let onPause = true

const numberFormatter = (value) => {
    if (value < 10) {
        return `0${value}`
    }
    return `${value}`
}

const pause = () => {
    if (interval) {
        clearInterval(interval)
        interval = null
    }
}

const drawTime = () => {

    const m = Math.floor(time  / 60)
    const s = time - m * 60

    minutes.innerHTML = numberFormatter(m)
    seconds.innerHTML = numberFormatter(s)
}

drawTime()

plusBTN.addEventListener('click', (event) => {
    time = time + 1
    drawTime()
})

minusBTN.addEventListener('click', () => {
    time = time - 1
    drawTime()
})

startBTN.addEventListener('click', () => {
    if (onPause) {
        onPause = false
        if (!interval) {
            interval = setInterval(() => {
                if (time > 0) {
                    time = time - 1
                    drawTime()
                } else {
                    clearInterval(interval)
                    interval = null
                    msg.innerHTML = 'ALARM ALARM ALARM'
                }
            }, 1000);
        }
    } else {
        onPause = true
        pause()
    }
})