import { BigInt } from '@graphprotocol/graph-ts'

import { Transfer } from '../entities/ManaToken/ManaToken'
import { Account } from '../entities/schema'

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'


export function handleTransfer(event: Transfer): void {
  let accountFromId = event.params.from.toHex()
  if (accountFromId != ZERO_ADDRESS) {
    let accountFrom = Account.load(accountFromId)
    if (accountFrom == null) {
      accountFrom = new Account(accountFromId)
      accountFrom.mana = BigInt.fromI32(0)
    }
    accountFrom.mana = accountFrom.mana.minus(event.params.value)
    accountFrom.save()
  }

  let accountToId = event.params.to.toHex()
  if (accountToId != ZERO_ADDRESS) { // Mint
    let accountTo = Account.load(accountToId)
    if (accountTo == null) {
      accountTo = new Account(accountToId)
      accountTo.mana = BigInt.fromI32(0)
    }
    accountTo.mana = accountTo.mana.plus(event.params.value)
    accountTo.save()
  }
}
