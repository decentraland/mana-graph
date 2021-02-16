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
npm run deploy:{{network}
```

### Query Example

```typescript
accounts {
  id
  mana
}
```
