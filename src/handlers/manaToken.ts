import { Transfer, Mint, Burn, Transfer3, Transfer2, Transfer1 } from '../entities/ManaToken/ManaToken'
import { Account, Log } from '../entities/schema'

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export function handleTransfer(event: Transfer): void {
  let log = new Log(event.transaction.hash.toHexString() + '-' + event.logIndex.toString())
  log.from = event.params.from.toHexString()
  log.to = event.params.to.toHexString()
  log.txHash = event.transaction.hash.toHexString()
  log.index = event.logIndex
  log.value = event.params.value
  log.involved = event.params.from.toHexString() + '-' + event.params.to.toHexString()
  log.time = event.block.timestamp
  log.save()

  let accountFromId = event.params.from.toHexString()
  if (accountFromId != ZERO_ADDRESS) {
    let accountFrom = Account.load(accountFromId)
    if (accountFrom == null) {
      accountFrom = new Account(accountFromId)
    }

    accountFrom.mana = accountFrom.mana.minus(event.params.value)
    accountFrom.save()
  }

  let accountToId = event.params.to.toHexString()
  if (accountToId != ZERO_ADDRESS) {
    let accountTo = Account.load(accountToId)
    if (accountTo == null) {
      accountTo = new Account(accountToId)
    }

    accountTo.mana = accountTo.mana.plus(event.params.value)
    accountTo.save()
  }
}

export function handleTransfer1(event: Transfer1): void {
  let log = new Log(event.transaction.hash.toHexString() + '-' + event.logIndex.toString())
  log.from = event.params.from.toHexString()
  log.to = event.params.to.toHexString()
  log.txHash = event.transaction.hash.toHexString()
  log.index = event.logIndex
  log.value = event.params.value
  log.involved = event.params.from.toHexString() + '-' + event.params.to.toHexString()
  log.time = event.block.timestamp
  log.save()

  let accountFromId = event.params.from.toHexString()
  if (accountFromId != ZERO_ADDRESS) {
    let accountFrom = Account.load(accountFromId)
    if (accountFrom == null) {
      accountFrom = new Account(accountFromId)
    }

    accountFrom.mana = accountFrom.mana.minus(event.params.value)
    accountFrom.save()
  }

  let accountToId = event.params.to.toHexString()
  if (accountToId != ZERO_ADDRESS) {
    let accountTo = Account.load(accountToId)
    if (accountTo == null) {
      accountTo = new Account(accountToId)
    }

    accountTo.mana = accountTo.mana.plus(event.params.value)
    accountTo.save()
  }
}

export function handleTransfer2(event: Transfer2): void {
  let log = new Log(event.transaction.hash.toHexString() + '-' + event.logIndex.toString())
  log.from = event.params.from.toHexString()
  log.to = event.params.to.toHexString()
  log.txHash = event.transaction.hash.toHexString()
  log.index = event.logIndex
  log.value = event.params.value
  log.involved = event.params.from.toHexString() + '-' + event.params.to.toHexString()
  log.time = event.block.timestamp
  log.save()

  let accountFromId = event.params.from.toHexString()
  if (accountFromId != ZERO_ADDRESS) {
    let accountFrom = Account.load(accountFromId)
    if (accountFrom == null) {
      accountFrom = new Account(accountFromId)
    }

    accountFrom.mana = accountFrom.mana.minus(event.params.value)
    accountFrom.save()
  }

  let accountToId = event.params.to.toHexString()
  if (accountToId != ZERO_ADDRESS) {
    let accountTo = Account.load(accountToId)
    if (accountTo == null) {
      accountTo = new Account(accountToId)
    }

    accountTo.mana = accountTo.mana.plus(event.params.value)
    accountTo.save()
  }
}

export function handleTransfer3(event: Transfer3): void {
  let log = new Log(event.transaction.hash.toHexString() + '-' + event.logIndex.toString())
  log.from = event.params.from.toHexString()
  log.to = event.params.to.toHexString()
  log.txHash = event.transaction.hash.toHexString()
  log.index = event.logIndex
  log.value = event.params.value
  log.involved = event.params.from.toHexString() + '-' + event.params.to.toHexString()
  log.time = event.block.timestamp
  log.save()

  let accountFromId = event.params.from.toHexString()
  if (accountFromId != ZERO_ADDRESS) {
    let accountFrom = Account.load(accountFromId)
    if (accountFrom == null) {
      accountFrom = new Account(accountFromId)
    }

    accountFrom.mana = accountFrom.mana.minus(event.params.value)
    accountFrom.save()
  }

  let accountToId = event.params.to.toHexString()
  if (accountToId != ZERO_ADDRESS) {
    let accountTo = Account.load(accountToId)
    if (accountTo == null) {
      accountTo = new Account(accountToId)
    }

    accountTo.mana = accountTo.mana.plus(event.params.value)
    accountTo.save()
  }
}

export function handleMint(event: Mint): void {
  let log = new Log(event.transaction.hash.toHexString() + '-' + event.logIndex.toString())
  log.from = ZERO_ADDRESS
  log.to = event.params.to.toHexString()
  log.txHash = event.transaction.hash.toHexString()
  log.index = event.logIndex
  log.value = event.params.amount
  log.involved = ZERO_ADDRESS + '-' + event.params.to.toHexString()
  log.time = event.block.timestamp
  log.save()

  let accountToId = event.params.to.toHexString()
  if (accountToId != ZERO_ADDRESS) {
    let accountTo = Account.load(accountToId)
    if (accountTo == null) {
      accountTo = new Account(accountToId)
    }

    accountTo.mana = accountTo.mana.plus(event.params.amount)
    accountTo.save()
  }
}

export function handleBurn(event: Burn): void {
  let log = new Log(event.transaction.hash.toHexString() + '-' + event.logIndex.toString())
  log.from = event.params.burner.toHexString()
  log.to = ZERO_ADDRESS
  log.txHash = event.transaction.hash.toHexString()
  log.index = event.logIndex
  log.value = event.params.value
  log.involved = event.params.burner.toHexString() + '-' + ZERO_ADDRESS
  log.time = event.block.timestamp
  log.save()

  let accountFromId = event.params.burner.toHexString()
  if (accountFromId != ZERO_ADDRESS) {
    let accountFrom = Account.load(accountFromId)
    if (accountFrom == null) {
      accountFrom = new Account(accountFromId)
    }

    accountFrom.mana = accountFrom.mana.minus(event.params.value)
    accountFrom.save()
  }
}
