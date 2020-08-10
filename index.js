const fs = require('fs')
const decrypt = require('./decrypt')

const KEYSTORE_FILE = 'solflare-keystore-X.json'
const KEYSTORE_PASSWORD = '<password>'

let file = fs.readFileSync(KEYSTORE_FILE, 'utf8')

let keystore = JSON.parse(file)

let decrypted = decrypt(keystore, KEYSTORE_PASSWORD)

let output = '[' + decrypted.join(',')  + ']'

console.log(output)