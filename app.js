import { MDCTopAppBar } from '@material/top-app-bar/index'
import { html, render } from 'lit-html'
import { installRouter } from 'pwa-helpers/router'

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar')
const topAppBar = new MDCTopAppBar(topAppBarElement)

const pieces = [
  'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/treeWeb.jpg',
  'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/colibriDescalzo.jpg',
  'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/Dragona.jpg',
  'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/MCIWeb.jpg',
  'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/Maiz.jpg',
  'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/muerte.jpg',
  'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/Core1.jpg',
  'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/Core2.jpg',
  'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/smile.jpg',
  'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/itzpapalotl.jpg',
  'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/ElserManos.jpg',
  'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/vuelodePajaro.jpg',
  'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/cuento2.jpg',
  'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/cuento3.jpg',
  'https://raw.githubusercontent.com/boonil/boonil.art/gh-pages/images/galleries/illustration/Campo.jpg'
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
