# solflare-decrypt

Tool for decrypting solflare.com keystores into native Solana keystore format.

## Installation

```bash
npm install
```

## Usage

Modify the keystore file location and the keystore password

```node
const KEYSTORE_FILE = 'solflare-keystore-X.json'
const KEYSTORE_PASSWORD = '<password>'
```

Run the script and save the output
```bash
node index.js > solana-wallet.json
```

