import './heading.scss'

class Heading {
    render() {
        const h1 = document.createElement('h1')
        h1.innerHTML = "Oh hai webpack!"
        const body = document.querySelector('body')
        body.appendChild(h1)
    }
}

export default Heading