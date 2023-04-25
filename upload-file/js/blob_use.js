const Blob = window.Blob
const FileReader = window.FileReader

let link = document.querySelector('#load_bolb')
let file = document.querySelector('#blob_file')

link.addEventListener('click', function (e) {
  if (file) {
    file.click()
  }
}, false)

function getFileList (files) {
  const blob = new Blob(files)
  blob.arrayBuffer(files[0]).then(buffer => {
    console.log('blob arrayBuffer对象:', buffer)
  })
  console.log('blob 对象:', blob)
  const reader = new FileReader()
  //   reader.readAsText(blob)
  reader.readAsArrayBuffer(blob)
  //   reader.readAsBinaryString(blob)
  reader.onload = function (e) {
    console.log('读取结果:', reader.result)
  }
}
