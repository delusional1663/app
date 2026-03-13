//modules

//elements
const btn = document.querySelector('button')
const input = document.querySelector('input')
const select = document.querySelector('select')
const loader = document.querySelector('#window')

//valid links
const links = ['https://www.youtube.com/']

//functions
function isValidUrl(url, arr) {
    try {
        new URL(url)
        return arr.some(value => url.includes(value))
    } catch (err) {
        return false
    }
}

//events
btn.addEventListener('click', (event) => {
    if (!isValidUrl(input.value, links)) {
        input.setCustomValidity('Please enter a valid URL.')
        input.reportValidity()
        input.value = ""
    } else {
        loader.style.display = 'flex'
        input.value = ""
    }
    
})
