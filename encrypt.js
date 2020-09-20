const pbkdf2 = require('pbkdf2')
const aesjs = require('aes-js')
const cryptoRandomString = require('crypto-random-string');


module.exports =  function encrypt(account, password) {
    const options = {
        c: 8192,
        dklen: 32,
        prf: 'sha512',
        salt: cryptoRandomString({ length: 64 }),
    }

    const key = pbkdf2.pbkdf2Sync(password, options.salt, options.c, options.dklen, options.prf)
    const counter = generateRandomNumber();
    const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(counter));
    const encryptedBytes = aesCtr.encrypt(account.secretKey);
    const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);

    const keystore = {
        publicKey: account.publicKey.toString(),
        Crypto: {
            cipher: 'aes-128-ctr',
            ciphertext: encryptedHex,
            cipherparams: {
                counter: counter
            },
            kdf: 'pbkdf2',
            kdfparams: options
        },
    }

    return keystore;
}

function generateRandomNumber() {
    return Math.floor(100000 + Math.random() * 900000);
}