# solflare-decrypt

Tool for decrypting solflare.com keystores into native Solana keystore format and encrypting native Solana keystores to SolFlare compatible ones.

## Installation

```bash
npm install
```

## Help

```bash
node index.js help

# Usage:
# node index.js raw-to-solflare [raw-key-input-file] [output-keystore-file] [output-keystore-password]
# node index.js solflare-to-raw [input-keystore-file] [input-keystore-password] [raw-key-output-file]
```

## Raw Solana Keystore to SolFlare Keystore

```bash
node index.js raw-to-solflare ~/path-to-solana-keystore.json output-solflare-keystore.json "keystore password"
```

## SolFlare Keystore to Raw Solana Keystore

```bash
node index.js solflare-to-raw ~/path-to-solflare-keystore.json "solflare keystore password" output-solana-keystore.json
```

## Mnemonic Phrase to SolFlare Keystore

Coming soon...
