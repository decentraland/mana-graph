// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Account entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Account entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Account", id.toString(), this);
  }

  static load(id: string): Account | null {
    return store.get("Account", id) as Account | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get mana(): BigInt | null {
    let value = this.get("mana");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set mana(value: BigInt | null) {
    if (value === null) {
      this.unset("mana");
    } else {
      this.set("mana", Value.fromBigInt(value as BigInt));
    }
  }

  get updatedAt(): BigInt {
    let value = this.get("updatedAt");
    return value.toBigInt();
  }

  set updatedAt(value: BigInt) {
    this.set("updatedAt", Value.fromBigInt(value));
  }
}

export class Log extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Log entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Log entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Log", id.toString(), this);
  }

  static load(id: string): Log | null {
    return store.get("Log", id) as Log | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get txHash(): string {
    let value = this.get("txHash");
    return value.toString();
  }

  set txHash(value: string) {
    this.set("txHash", Value.fromString(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get from(): string {
    let value = this.get("from");
    return value.toString();
  }

  set from(value: string) {
    this.set("from", Value.fromString(value));
  }

  get to(): string {
    let value = this.get("to");
    return value.toString();
  }

  set to(value: string) {
    this.set("to", Value.fromString(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get involved(): string {
    let value = this.get("involved");
    return value.toString();
  }

  set involved(value: string) {
    this.set("involved", Value.fromString(value));
  }

  get time(): BigInt {
    let value = this.get("time");
    return value.toBigInt();
  }

  set time(value: BigInt) {
    this.set("time", Value.fromBigInt(value));
  }
}
