window.URL = window.URL || window.webkitURL

let input = document.querySelector('#pdf_file')
let a = document.querySelector('#load_pdf')
let pdfBox = document.querySelector('#pdf_box')

a.addEventListener('click', function (e) {
  if (input) {
    input.click()
  }
}, false)

function handelPdfFileChange (files) {
  const pdf = files[0]
  if (pdf) {
    const url = window.URL.createObjectURL(pdf)
    const iframe = document.createElement('iframe')
    iframe.width = '900'
    iframe.height = '1000'
    iframe.style.border = '2px solid red'
    iframe.style.padding = '16px'
    iframe.src = url
    pdfBox.appendChild(iframe)
  }
}
