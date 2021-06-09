import './hello-world-button.scss'

class HelloWorldButton {
    butonCssClass = 'hello-world-button'

    render() {
        const button = document.createElement('button')
        button.innerHTML = "Hello World"
        button.classList.add(this.butonCssClass)
        const body = document.querySelector('body')
        body.appendChild(button)
        button.onclick = function () {
            const p = document.createElement('p')
            p.innerHTML = "Hello World!"
            p.classList.add('hello-world-text')
            body.appendChild(p)
        }
    }
}

export default HelloWorldButton