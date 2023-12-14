## cannot get logs on karura fork
- start local karura fork
```
bunx @acala-network/chopsticks@latest -c configs/karura.yml
```
- start an rpc adapter
```
bunx @acala-network/eth-rpc-adapter@latest -e ws://localhost:8000
```

- run token transfer for karura
```
yarn test:karura

-----------------------
transfer complete!
logs:  []
```

## can get logs on acala fork
```
bunx @acala-network/chopsticks@latest -c configs/acala.yml
bunx @acala-network/eth-rpc-adapter@latest -e ws://localhost:8000

yarn test:acala

-----------------------
transfer complete!
logs:  [
  {
    transactionIndex: 0,
    blockNumber: 5101905,
    transactionHash: '0x7c90bdcfb06e74e68d6cd670c3e85dd117c0736655db4eda82b97128cd9ad60c',
    address: '0x0000000000000000000100000000000000000000',
    topics: [
      '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
      '0x00000000000000000000000075e480db528101a381ce68544611c169ad7eb342',
      '0x00000000000000000000000075e480db528101a381ce68544611c169ad7eb342'
    ],
    data: '0x000000000000000000000000000000000000000000000006aaf7c8516d0c0000',
    logIndex: 0,
    blockHash: '0xb9cd1a8d39cb930eca66e9bc1426edaa1985bebfe69f100038e76882ce8e7895'
  }
]

