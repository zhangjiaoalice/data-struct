const fileMutil = document.getElementById('file_mutil')
function onFileChange (files) {
  console.log('选择单文件对象:', files[0])
  const file = files[0]
  // const blob1 = file.slice(0, 2 * 1024) // 文件分片
  const url = window.URL.createObjectURL(file)
  console.log('可引用的文件地址:', url)
}

// console.log('获取到的文件对象:', file);
fileMutil.addEventListener('change', function (e) {
  console.log('多选文件事件对象:', e.target.files)
})
