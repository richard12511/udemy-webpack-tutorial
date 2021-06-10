import Polars from './ones-polars.jpg'
import './polars-image.scss'

class PolarsImage {
    render() {
        const img = document.createElement('img')
        img.src = Polars
        img.alt = "Ones Polars"
        img.classList.add('polars-image')

        const body = document.querySelector('body')
        body.appendChild(img)
    }
}

export default PolarsImage