const fs = require('fs-utils')
const decrypt = require('./decrypt')
const encrypt = require('./encrypt')
const web3 = require('@solana/web3.js')

const COMMAND_INDEX = 2


if (!process.argv[COMMAND_INDEX] || process.argv[COMMAND_INDEX] === 'help') {

    console.log('Usage:')
    console.log('node index.js raw-to-solflare [raw-key-input-file] [output-keystore-file] [output-keystore-password]')
    console.log('node index.js solflare-to-raw [input-keystore-file] [input-keystore-password] [raw-key-output-file]')

} else if (process.argv[COMMAND_INDEX] === 'raw-to-solflare') {

    if (process.argv.length !== 6) {
        throw new Error('Not enough arguments. Expected: node index.js raw-to-solflare [raw-key-input-file] [output-keystore-file] [output-keystore-password]')
    }

    let inputKeystoreFile = process.argv[3]
    let outputKeystoreFile = process.argv[4]
    let outputKeystorePassword = process.argv[5]

    let inputKeystore = fs.readJSONSync(inputKeystoreFile)

    let account = new web3.Account(inputKeystore)

    let keystore = encrypt(account, outputKeystorePassword)

    fs.writeJSONSync(outputKeystoreFile, keystore)

    console.log('OK')

} else if (process.argv[COMMAND_INDEX] === 'solflare-to-raw') {
    
    if (process.argv.length !== 6) {
        throw new Error('Not enough arguments. Expected: node index.js solflare-to-raw [input-keystore-file] [input-keystore-password] [raw-key-output-file]')
    }

    let inputKeystoreFile = process.argv[3]
    let inputKeystorePassword = process.argv[4]
    let outputKeystoreFile = process.argv[5]

    let inputKeystore = fs.readJSONSync(inputKeystoreFile, 'utf8')
        
    let decrypted = decrypt(inputKeystore, inputKeystorePassword)
    
    let output = '[' + decrypted.join(',')  + ']'

    fs.writeFileSync(outputKeystoreFile, output)
    
    console.log('OK')

} else {
    throw new Error('Invalid action. Supported [encrypt/decrypt]')
}
