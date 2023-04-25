window.URL = window.URL || window.webkitURL

let aTag = document.querySelector('#a_tag')

let inputTag = document.querySelector('#input_tag')

let fileList = document.querySelector('#file_list')

aTag.addEventListener('click', function (e) {
  if (inputTag) {
    inputTag.click()
  }
  e.preventDefault()
}, false)

function handelUrlFiles (files) {
  if (!files.length) {
    fileList.innerHTML = `<p>No files selected</p>`
  } else {
    fileList.innerHTML = ''
    let list = document.createElement('ul')
    fileList.append(list)
    for (let i = 0; i < files.length; i++) {
      let li = document.createElement('li')
      list.appendChild(li)
      let img = document.createElement('img')
      img.src = window.URL.createObjectURL(files[i])
      img.height = 60
      img.onload = function () {
        window.URL.revokeObjectURL(this.src)
      }
      li.append(img)
      let info = document.createElement('span')
      info.innerHTML = files[i].name + ':' + files[i].size + 'bytes'
      li.appendChild(info)
    }
  }
}
