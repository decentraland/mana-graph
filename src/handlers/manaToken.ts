import { MANAToken, Transfer } from '../entities/ManaToken/ManaToken'
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
