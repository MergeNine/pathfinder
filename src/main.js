import './style.css'


const app = document.querySelector('#app')

const headerSection = document.createElement('header')
headerSection.id = 'header'
const footerSection = document.createElement('footer')
footerSection.id = 'footer'
const mainSection = document.createElement('section')
mainSection.id = 'main'


app.appendChild(headerSection)
app.appendChild(mainSection)
app.appendChild(footerSection)



