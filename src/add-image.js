import Polars from './ones-polars.jpg';

function addImage() {
    const img = document.createElement('img')
    img.alt = 'Polars'
    img.width = 300
    img.src = Polars
    const body = document.querySelector('body')
    body.appendChild(img)
}

export default addImage