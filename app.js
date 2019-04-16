import { MDCTopAppBar } from '@material/top-app-bar/index'
import { html, render } from 'lit-html'
import { installRouter } from 'pwa-helpers/router'

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar')
const topAppBar = new MDCTopAppBar(topAppBarElement)

const pieces = [
  'http://boonil.art/images/galleries/illustration/Maiz.jpg',
  'http://boonil.art/images/galleries/illustration/muerte.jpg'
]

function fullScreen (event) {
  const image = event.target
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    if (image.requestFullscreen) {
      image.requestFullscreen()
    }
  }
  event.preventDefault()
}

function itemTemplate (piece) {
  return html`
    <section class="piece">
      <img @click=${fullScreen} class="poster" src="${piece}" />
    </section>
  `
}

function homeTemplate (pieces) {
  return html`
    ${pieces.map(itemTemplate)}
  `
}

render(homeTemplate(pieces), document.querySelector('main'))