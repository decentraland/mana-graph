import { MANAToken, Transfer, Mint, Burn } from '../entities/ManaToken/ManaToken'
import { Account } from '../entities/schema'

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export function handleTransfer(event: Transfer): void {
  let manaContract = MANAToken.bind(event.address)

  let accountFromId = event.params.from.toHex()
  if (accountFromId != ZERO_ADDRESS) {
    let accountFrom = new Account(accountFromId)

    accountFrom.mana = manaContract.balanceOf(event.params.from)
    accountFrom.save()
  }

  let accountToId = event.params.to.toHex()
  if (accountToId != ZERO_ADDRESS) {
    let accountTo = new Account(accountToId)

    accountTo.mana = manaContract.balanceOf(event.params.to)
    accountTo.save()
  }
}

export function handleMint(event: Mint): void {
  let manaContract = MANAToken.bind(event.address)

  let accountToId = event.params.to.toHex()
  if (accountToId != ZERO_ADDRESS) {
    let accountTo = new Account(accountToId)

    accountTo.mana = manaContract.balanceOf(event.params.to)
    accountTo.save()
  }
}

export function handleBurn(event: Burn): void {
  let manaContract = MANAToken.bind(event.address)

  let accountFromId = event.params.burner.toHex()
  if (accountFromId != ZERO_ADDRESS) {
    let accountTo = new Account(accountFromId)

    accountTo.mana = manaContract.balanceOf(event.params.burner)
    accountTo.save()
  }
}
