array-map-to-object

# array-map-to-object

## Table of contents

### Functions

- [default](README.md#default)

## Functions

### default

▸ **default**<`T`, `Z`\>(`array`, `key`): `RecordByKey`<`T`, `Z`\>

Creates a new lookup object from array of objects. Keys are values of array elements with the given key, values are array elements.

**`Typeparam`**

T is array elements.

**`Typeparam`**

Z is keys of array elements.

**`Example`**

```ts
const array = [
  { id: 1, name: "Red" },
  { id: 2, name: "Green" },
];
mapToObject(array, "id"); // { 1: { id: 1, name: "Red" }, 2: { id: 2, name: "Green" } }
mapToObject(array, "name"); // { Red: { id: 1, name: "Red" }, Green: { id: 2, name: "Green" } }
```

#### Type parameters

| Name | Type                                     |
| :--- | :--------------------------------------- |
| `T`  | extends `Record`<`Key`, `unknown`\>      |
| `Z`  | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name    | Type            | Description                                                         |
| :------ | :-------------- | :------------------------------------------------------------------ |
| `array` | `None` \| `T`[] | is the array of objects to create new object from.                  |
| `key`   | `Z`             | is the key to get value to be used as new key in the result object. |

#### Returns

`RecordByKey`<`T`, `Z`\>

a new object.

#### Defined in

[map-to-object.ts:96](https://github.com/ozum/array-map-to-object/blob/a962670/src/map-to-object.ts#L96)

▸ **default**<`T`, `K`, `V`\>(`array`, `callback`, `thisArg?`): `Record`<`K`, `V`\>

Creates a new object with the results of a function on every element in the calling array.
Returned key and value is added to created object.

`mapToObject` calls a provided `callback` function once for each element in an array, in order, and constructs a new object from the results.
`callback` is invoked only for indexes of the array which have assigned values, including undefined. It is not called for missing elements
of the array (that is, indexes that have never been set, which have been deleted or which have never been assigned a value).

**`Typeparam`**

T is array elements.

**`Typeparam`**

K is keys of returned object.

**`Typeparam`**

V is values of returned object.

**`Example`**

```ts
const array = ["Red", "Green"];
mapToObject(array, (currentValue) => [currentValue.toUpperCase(), currentValue.toLowerCase()]); // { "RED": "Red", "GREEN": "Green" }
mapToObject(array, (currentValue) => { key: currentValue.toUpperCase(), value: currentValue.toLowerCase() }); // { "RED": "Red", "GREEN": "Green" }
```

#### Type parameters

| Name | Type          |
| :--- | :------------ |
| `T`  | `T`           |
| `K`  | extends `Key` |
| `V`  | `V`           |

#### Parameters

| Name       | Type                               | Description                                                 |
| :--------- | :--------------------------------- | :---------------------------------------------------------- |
| `array`    | `None` \| `T`[]                    | is the array to create new object from.                     |
| `callback` | `KeyValueProducer`<`T`, `K`, `V`\> | is the function to call for each element in the array.      |
| `thisArg?` | `unknown`                          | is the value to be used as `this` in the callback function. |

#### Returns

`Record`<`K`, `V`\>

a new object.

#### Defined in

[map-to-object.ts:119](https://github.com/ozum/array-map-to-object/blob/a962670/src/map-to-object.ts#L119)

▸ **default**<`T`, `K`\>(`array`, `callback`, `thisArg?`): `Record`<`K`, `T`\>

Creates a new object with the results of a function on every element in the calling array.
Returned key and current array item (as value) is added to created object.

`mapToObject` calls a provided `callback` function once for each element in an array, in order, and constructs a new object from the results.
`callback` is invoked only for indexes of the array which have assigned values, including undefined. It is not called for missing elements
of the array (that is, indexes that have never been set, which have been deleted or which have never been assigned a value).

**`Typeparam`**

T is array elements.

**`Typeparam`**

K is keys of returned object.

**`Example`**

```ts
const array = ["Red", "Green"];
mapToObject(array, (currentValue) => currentValue.toUpperCase()); // { "RED": "Red", "GREEN": "Green" }
```

#### Type parameters

| Name | Type          |
| :--- | :------------ |
| `T`  | `T`           |
| `K`  | extends `Key` |

#### Parameters

| Name       | Type                     | Description                                                 |
| :--------- | :----------------------- | :---------------------------------------------------------- |
| `array`    | `None` \| `T`[]          | is the array to create new object from.                     |
| `callback` | `KeyProducer`<`T`, `K`\> | is the function to call for each element in the array.      |
| `thisArg?` | `unknown`                | is the value to be used as `this` in the callback function. |

#### Returns

`Record`<`K`, `T`\>

a new object.

#### Defined in

[map-to-object.ts:140](https://github.com/ozum/array-map-to-object/blob/a962670/src/map-to-object.ts#L140)
