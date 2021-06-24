# Decentraland MANA subgraph

- Mainnet: https://thegraph.com/explorer/subgraph/decentraland/mana-ethereum-mainnet?selected=logs
- Ropsten: https://thegraph.com/explorer/subgraph/decentraland/mana-ethereum-ropsten?selected=logs
- Goerli: https://thegraph.com/explorer/subgraph/decentraland/mana-ethereum-goerli?selected=logs
- Mumbai: https://thegraph.com/explorer/subgraph/decentraland/mana-matic-mumbai?selected=logs
- Matic: https://thegraph.com/explorer/subgraph/decentraland/mana-matic-mainnet?selected=logs

### Install

```bash
npm run install
```

### Deploy

```bash
npm run deploy:{network}
```

### Queries

The `id` is the Ethereum address.

Ethereum addresses should be passed lowercased:
`0xB549B2442b2BD0a53795BC5cDcBFE0cAF7ACA9f8` ❌
`0xb549b2442b2bd0a53795bc5cdcbfe0caf7aca9f8` ✅

#### Get first 100 account's balances

```typescript
{
  accounts {
    id
    mana
  }
}
```

#### Get an specific account balance

```typescript
{
  accounts(where: {id:"0x0xB549B2442b2BD0a53795BC5cDcBFE0cAF7ACA9f8"}) {
    id
    mana
  } 
}
```

### Troubleshooting

- If you detect that the data is wrong. Check the [subgraph logs](https://thegraph.com/explorer/subgraph/decentraland/mana-matic-mainnet?selected=logs) to see if the block where the transaction happened has been indexed. If not, wait a little. If yes:
1) Detect what is the event missed. 
2) Check the _subgraph.yaml_ for the event handler function.
3) Go to the handler function. Handlers are inside _src/handlers_.
4) Follow the logic to detect what the error could be.
5) Fix it
6) Send a PR

- If the subgraph indexing has failed. Check the errors in the log
