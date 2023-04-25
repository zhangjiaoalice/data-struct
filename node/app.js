const md5 = require('md5')
const fs = require('fs')

fs.readFile('./textFile/a.txt', (err, msg) => {
  if (!err) {
    console.log('msg:', msg.toString())
    const md5Msg = md5(msg)
    console.log('md5 msg:', md5Msg)
  }
})
