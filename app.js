import { MDCTopAppBar } from '@material/top-app-bar/index'
import { html, render } from 'lit-html'
import { installRouter } from 'pwa-helpers/router'

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar')
const topAppBar = new MDCTopAppBar(topAppBarElement)

const pages = document.querySelectorAll('.page')

const pieces = [
  {
    slug: 'maiz',
    name: 'Maiz',
    img: 'http://boonil.art/images/galleries/illustration/Maiz.jpg'
  }, {
    slug: 'muerte',
    name: 'Muerte',
    img: 'http://boonil.art/images/galleries/illustration/muerte.jpg'
  }
]

const goBackTemplate = html`
  <a href="/" class="material-icons mdc-top-app-bar__navigation-icon" aria-label="back" alt="back"><i class="icon ion-md-arrow-round-back"></i></a>
`

const socialMediaTemplate = html`
  <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
    <a href="#" class="material-icons mdc-top-app-bar__action-item" aria-label="instagram" alt="instagram"><i class="icon ion-logo-instagram"></i></a>
    <a href="#" class="material-icons mdc-top-app-bar__action-item" aria-label="facebook" alt="facebook"><i class="icon ion-logo-facebook"></i></a>
    <a href="#" class="material-icons mdc-top-app-bar__action-item" aria-label="twitter" alt="twitter"><i class="icon ion-logo-twitter"></i></a>
  </section>
`

const fullScreenTemplate = html`
  <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
    <a href="#" @click=${fullScreen} class="material-icons mdc-top-app-bar__action-item" aria-label="instagram" alt="instagram"><i class="icon ion-md-expand"></i></a>
  </section>
`

function fullScreen (event) {
  const image = document.querySelector('#piece img.poster')
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    if (image.requestFullscreen) {
      image.requestFullscreen()
    }
  }
  event.preventDefault()
}

installRouter((location, event) => {
  if (event && event.type === 'click') {
    window.scrollTo(0, 0)
  }

  for (const page of pages) {
    page.classList.add('inactive')
  }

  const pieceSlug = location.pathname.split('/')[1]
  const piece = pieces.find(p => p.slug === pieceSlug)
  render(headerTemplate(piece), document.querySelector('header div'))
  render(homeTemplate(pieces), document.querySelector('#home'))
  render(pieceTemplate(piece), document.querySelector('#piece'))
  if (pieceSlug === '') {
    document.querySelector('#home').classList.remove('inactive')
  } else {
    document.querySelector('#piece').classList.remove('inactive')
  }
})

function headerTemplate (piece) {
  return html`
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        ${piece ? goBackTemplate : ''}
        <span class="mdc-top-app-bar__title">${piece ? piece.name : 'Boonil Bej'}</span>
      </section>
      ${piece ? fullScreenTemplate : socialMediaTemplate}
    </div>
  `
}

function pieceTemplate (piece) {
  if (!piece) return
  return html`
    <section>
      <img @click=${fullScreen} class="poster" src="${piece.img}" />
    </section>
  `
}

function itemTemplate (piece) {
  return html`
    <section class="piece">
      <h2>${piece.name}</h2>
      <a href="/${piece.slug}">
        <img class="poster" src="${piece.img}" />
      </a>
    </section>
  `
}

function homeTemplate (pieces) {
  return html`
    ${pieces.map(itemTemplate)}
  `
}
