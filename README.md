# Decentraland MANA subgraph

- Mainnet: https://thegraph.com/explorer/subgraph/decentraland/mana?selected=logs
- Ropsten: https://thegraph.com/explorer/subgraph/decentraland/mana-ropsten?selected=logs
- Goerli: https://thegraph.com/explorer/subgraph/decentraland/mana-goerli?selected=logs
- Mumbai: https://graph-play.decentraland.io/subgraphs/name/mana-mumbai

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
