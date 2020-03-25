const textColor = document.getElementById('font')
const backgroundColor = document.getElementById('background')
const smallFont = document.querySelector('.small-font')
const largeFont = document.querySelector('.large-font')
const lessSpace = document.querySelector('.small-text-spacing')
const mostSpace = document.querySelector('.large-text-spacing')
const fontFamily = document.querySelectorAll('option')
const articleParagraphs = document.querySelectorAll('article p')
const fontVerdana = document.querySelector('.verdana')
const fontHelvetica = document.querySelector('.helvetica')
const fontArial = document.querySelector('.arial')
const fontCalibri = document.querySelector('.calibri')
const fontTahoma = document.querySelector('.tahoma')

const changeColor = () => {
    for (let i = 0; i < articleParagraphs.length; i++) {
        articleParagraphs[i].style.color = localStorage.color
        textColor.addEventListener('input', () => {
            localStorage.setItem('color', textColor.value)
            articleParagraphs[i].style.color = localStorage.color
        })
        articleParagraphs[i].style.backgroundColor = localStorage.background
        backgroundColor.addEventListener('input', () => {
            localStorage.setItem('background', backgroundColor.value)
            articleParagraphs[i].style.backgroundColor = localStorage.background
            
        })
    }
}

const buttonSize = () => {
    for(let x = 0; x < articleParagraphs.length; x++){
        const computedFontSize = window.getComputedStyle(articleParagraphs[x], null).getPropertyValue('font-size')
        let stylish = parseFloat(computedFontSize)
        largeFont.addEventListener('click', () => {
           articleParagraphs[x].style.fontSize = (stylish + 1) + 'px'
           console.log(computedFontSize)
        })      
    }
}

buttonSize()
changeColor()
 