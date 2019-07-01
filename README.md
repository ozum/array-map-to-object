# mapToObject

Like `map()`, but creates object instead of array. `mapToObject` creates a new object with the results of calling a provided function on every element in the calling array.

Published as `.js`, `.mjs`, `umd.js` including type definitions for `TypeScript`.

# Syntax

```ts
const newObject = mapToObject(array, (currentValue[, index[, array]]) => {
  // Return key for object item
  // or [key, value] tuple (array) for key and value
  // or { key, value } object for key and value
}, [, thisArg]);
```

# Examples

## Using a property for key to create object

```ts
const users = [{ name: "George", basketSize: 3 }, { name: "Lisa", basketSize: 2 }];
const usersLookup = mapToObject(users, user => user.name);
// Callback returns only key, value is same item. `usersLookup` is:
// { George: { name: "George", basketSize: 3 }, Lisa: { name: "Lisa", basketSize: 2 } }
```

## Creating custom object using key/value pair.

```ts
const users = [{ name: "George", basketSize: 3 }, { name: "Lisa", basketSize: 2 }];
const usersLookup = mapToObject(users, user => [user.name, user.basketSize]);
// Callback returns [key, value] tuple (array). First returned value used for key, second for value. `usersLookup` is:
// { George: 3, Lisa: 2 }
```

## Creating custom object using key/value object.

```ts
const users = [{ name: "George", basketSize: 3 }, { name: "Lisa", basketSize: 2 }];
const usersLookup = mapToObject(users, user => ({ key: user.name, value: user.basketSize }));
// Callback returns { key, value } object. `usersLookup` is:
// { George: 3, Lisa: 2 }
```

## Mapping an array of numbers to an array of square roots

```ts
const numbers = [1, 4, 9];
const roots = mapToObject(numbers, num => [num, Math.sqrt(num)]);
// `roots` is { 1: 1, 4: 2, 9: 3 }
```

# API
> **[maptoobject](README.md)**

### Index

#### Type aliases

* [Key](README.md#key)
* [KeyProducer](README.md#keyproducer)
* [KeyValueProducer](README.md#keyvalueproducer)

#### Functions

* [mapToObject](README.md#maptoobject)

## Type aliases

###  Key

Ƭ **Key**: *string | number | symbol*

Defined in maptoobject.ts:4

Type of key used in created object.

___

###  KeyProducer

Ƭ **KeyProducer**: *function*

Defined in maptoobject.ts:13

Callback function that produces an element of the created object, which returns only single value used for key.
Current array item is used as the value for the key in created object.

**`callback`** 

#### Type declaration:

▸ (`currentValue`: *`T`*, `index`: *number*, `array`: *`T`[]*): *`K`*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`currentValue` | `T` | is the current element being processed in the array. |
`index` | number | is the index of the current element being processed in the array. |
`array` | `T`[] | is the array map was called upon. |

___

###  KeyValueProducer

Ƭ **KeyValueProducer**: *function*

Defined in maptoobject.ts:29

Callback function that produces an element of the created object, which returns values used for key and value in created object.

**`callback`** 

#### Type declaration:

▸ (`currentValue`: *`T`*, `index`: *number*, `array`: *`T`[]*): *[`K`, `V`] | object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`currentValue` | `T` | is the current element being processed in the array. |
`index` | number | is the index of the current element being processed in the array. |
`array` | `T`[] | is the array map was called upon. |

## Functions

###  mapToObject

▸ **mapToObject**<**T**, **K**, **V**>(`array`: *`T`[]*, `callback`: *[KeyValueProducer](README.md#keyvalueproducer)‹*`T`*, *`K`*, *`V`*›*, `thisArg?`: *any*): *`Record<K, V>`*

Defined in maptoobject.ts:58

Creates a new object with the results of calling a provided function on every element in the calling array.
Returned key and value is added to created object.

`mapToObject` calls a provided `callback` function once for each element in an array, in order, and constructs a new object from the results.
`callback` is invoked only for indexes of the array which have assigned values, including undefined. It is not called for missing elements
of the array (that is, indexes that have never been set, which have been deleted or which have never been assigned a value).#### Example
```typescript
const array = ["Red", "Green"];
mapToObject(array, (currentValue) => [currentValue.toUpperCase(), currentValue.toLowerCase()]); // { "RED": "red", "GREEN": "green" }
mapToObject(array, (currentValue) => { key: currentValue.toUpperCase(), value: currentValue.toLowerCase() }); // { "RED": "red", "GREEN": "green" }
```

**Type parameters:**

▪ **T**

is array elements.

▪ **K**: *[Key](README.md#key)*

is keys of returned object.

▪ **V**

is values of returned object.

**Parameters:**

Name | Type |
------ | ------ |
`array` | `T`[] |
`callback` | [KeyValueProducer](README.md#keyvalueproducer)‹*`T`*, *`K`*, *`V`*› |
`thisArg?` | any |

**Returns:** *`Record<K, V>`*

▸ **mapToObject**<**T**, **K**>(`array`: *`T`[]*, `callback`: *[KeyProducer](README.md#keyproducer)‹*`T`*, *`K`*›*, `thisArg?`: *any*): *`Record<K, T>`*

Defined in maptoobject.ts:72

Creates a new object with the results of calling a provided function on every element in the calling array.
Returned key and current array item (as value) is added to created object.

`mapToObject` calls a provided `callback` function once for each element in an array, in order, and constructs a new object from the results.
`callback` is invoked only for indexes of the array which have assigned values, including undefined. It is not called for missing elements
of the array (that is, indexes that have never been set, which have been deleted or which have never been assigned a value).#### Example
```typescript
const array = ["Red", "Green"];
mapToObject(array, (currentValue) => currentValue.toUpperCase()); // { "RED": "Red", "GREEN": "Green" }
```

**Type parameters:**

▪ **T**

is array elements.

▪ **K**: *[Key](README.md#key)*

is keys of returned object.

**Parameters:**

Name | Type |
------ | ------ |
`array` | `T`[] |
`callback` | [KeyProducer](README.md#keyproducer)‹*`T`*, *`K`*› |
`thisArg?` | any |

**Returns:** *`Record<K, T>`*# mapToObject

Like `map()`, but creates object instead of array. `mapToObject` creates a new object with the results of calling a provided function on every element in the calling array.

Published as `.js`, `.mjs`, `umd.js` including type definitions for `TypeScript`.

# Syntax

```ts
const newObject = mapToObject(array, (currentValue[, index[, array]]) => {
  // Return key for object item
  // or [key, value] tuple (array) for key and value
  // or { key, value } object for key and value
}, [, thisArg]);
```

# Examples

## Using a property for key to create object

```ts
const users = [{ name: "George", basketSize: 3 }, { name: "Lisa", basketSize: 2 }];
const usersLookup = mapToObject(users, user => user.name);
// Callback returns only key, value is same item. `usersLookup` is:
// { George: { name: "George", basketSize: 3 }, Lisa: { name: "Lisa", basketSize: 2 } }
```

## Creating custom object using key/value pair.

```ts
const users = [{ name: "George", basketSize: 3 }, { name: "Lisa", basketSize: 2 }];
const usersLookup = mapToObject(users, user => [user.name, user.basketSize]);
// Callback returns [key, value] tuple (array). First returned value used for key, second for value. `usersLookup` is:
// { George: 3, Lisa: 2 }
```

## Creating custom object using key/value object.

```ts
const users = [{ name: "George", basketSize: 3 }, { name: "Lisa", basketSize: 2 }];
const usersLookup = mapToObject(users, user => ({ key: user.name, value: user.basketSize }));
// Callback returns { key, value } object. `usersLookup` is:
// { George: 3, Lisa: 2 }
```

## Mapping an array of numbers to an array of square roots

```ts
const numbers = [1, 4, 9];
const roots = mapToObject(numbers, num => [num, Math.sqrt(num)]);
// `roots` is { 1: 1, 4: 2, 9: 3 }
```

# API
> **[maptoobject](README.md)**

[Globals](globals.md) /

# mapToObject

Like `map()`, but creates object instead of array. `mapToObject` creates a new object with the results of calling a provided function on every element in the calling array.

Published as `.js`, `.mjs`, `umd.js` including type definitions for `TypeScript`.

# Syntax

```ts
const newObject = mapToObject(array, (currentValue[, index[, array]]) => {
  // Return key for object item
  // or [key, value] tuple (array) for key and value
  // or { key, value } object for key and value
}, [, thisArg]);
```

# Examples

## Using a property for key to create object

```ts
const users = [{ name: "George", basketSize: 3 }, { name: "Lisa", basketSize: 2 }];
const usersLookup = mapToObject(users, user => user.name);
// Callback returns only key, value is same item. `usersLookup` is:
// { George: { name: "George", basketSize: 3 }, Lisa: { name: "Lisa", basketSize: 2 } }
```

## Creating custom object using key/value pair.

```ts
const users = [{ name: "George", basketSize: 3 }, { name: "Lisa", basketSize: 2 }];
const usersLookup = mapToObject(users, user => [user.name, user.basketSize]);
// Callback returns [key, value] tuple (array). First returned value used for key, second for value. `usersLookup` is:
// { George: 3, Lisa: 2 }
```

## Creating custom object using key/value object.

```ts
const users = [{ name: "George", basketSize: 3 }, { name: "Lisa", basketSize: 2 }];
const usersLookup = mapToObject(users, user => ({ key: user.name, value: user.basketSize }));
// Callback returns { key, value } object. `usersLookup` is:
// { George: 3, Lisa: 2 }
```

## Mapping an array of numbers to an array of square roots

```ts
const numbers = [1, 4, 9];
const roots = mapToObject(numbers, num => [num, Math.sqrt(num)]);
// `roots` is { 1: 1, 4: 2, 9: 3 }
```

# API
> **[maptoobject](README.md)**

### Index

#### Type aliases

* [Key](README.md#key)
* [KeyProducer](README.md#keyproducer)
* [KeyValueProducer](README.md#keyvalueproducer)

#### Functions

* [mapToObject](README.md#maptoobject)

## Type aliases

###  Key

Ƭ **Key**: *string | number | symbol*

Defined in maptoobject.ts:4

Type of key used in created object.

___

###  KeyProducer

Ƭ **KeyProducer**: *function*

Defined in maptoobject.ts:13

Callback function that produces an element of the created object, which returns only single value used for key.
Current array item is used as the value for the key in created object.

**`callback`** 

#### Type declaration:

▸ (`currentValue`: *`T`*, `index`: *number*, `array`: *`T`[]*): *`K`*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`currentValue` | `T` | is the current element being processed in the array. |
`index` | number | is the index of the current element being processed in the array. |
`array` | `T`[] | is the array map was called upon. |

___

###  KeyValueProducer

Ƭ **KeyValueProducer**: *function*

Defined in maptoobject.ts:29

Callback function that produces an element of the created object, which returns values used for key and value in created object.

**`callback`** 

#### Type declaration:

▸ (`currentValue`: *`T`*, `index`: *number*, `array`: *`T`[]*): *[`K`, `V`] | object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`currentValue` | `T` | is the current element being processed in the array. |
`index` | number | is the index of the current element being processed in the array. |
`array` | `T`[] | is the array map was called upon. |

## Functions

###  mapToObject

▸ **mapToObject**<**T**, **K**, **V**>(`array`: *`T`[]*, `callback`: *[KeyValueProducer](README.md#keyvalueproducer)‹*`T`*, *`K`*, *`V`*›*, `thisArg?`: *any*): *`Record<K, V>`*

Defined in maptoobject.ts:58

Creates a new object with the results of calling a provided function on every element in the calling array.
Returned key and value is added to created object.

`mapToObject` calls a provided `callback` function once for each element in an array, in order, and constructs a new object from the results.
`callback` is invoked only for indexes of the array which have assigned values, including undefined. It is not called for missing elements
of the array (that is, indexes that have never been set, which have been deleted or which have never been assigned a value).#### Example
```typescript
const array = ["Red", "Green"];
mapToObject(array, (currentValue) => [currentValue.toUpperCase(), currentValue.toLowerCase()]); // { "RED": "red", "GREEN": "green" }
mapToObject(array, (currentValue) => { key: currentValue.toUpperCase(), value: currentValue.toLowerCase() }); // { "RED": "red", "GREEN": "green" }
```

**Type parameters:**

▪ **T**

is array elements.

▪ **K**: *[Key](README.md#key)*

is keys of returned object.

▪ **V**

is values of returned object.

**Parameters:**

Name | Type |
------ | ------ |
`array` | `T`[] |
`callback` | [KeyValueProducer](README.md#keyvalueproducer)‹*`T`*, *`K`*, *`V`*› |
`thisArg?` | any |

**Returns:** *`Record<K, V>`*

▸ **mapToObject**<**T**, **K**>(`array`: *`T`[]*, `callback`: *[KeyProducer](README.md#keyproducer)‹*`T`*, *`K`*›*, `thisArg?`: *any*): *`Record<K, T>`*

Defined in maptoobject.ts:72

Creates a new object with the results of calling a provided function on every element in the calling array.
Returned key and current array item (as value) is added to created object.

`mapToObject` calls a provided `callback` function once for each element in an array, in order, and constructs a new object from the results.
`callback` is invoked only for indexes of the array which have assigned values, including undefined. It is not called for missing elements
of the array (that is, indexes that have never been set, which have been deleted or which have never been assigned a value).#### Example
```typescript
const array = ["Red", "Green"];
mapToObject(array, (currentValue) => currentValue.toUpperCase()); // { "RED": "Red", "GREEN": "Green" }
```

**Type parameters:**

▪ **T**

is array elements.

▪ **K**: *[Key](README.md#key)*

is keys of returned object.

**Parameters:**

Name | Type |
------ | ------ |
`array` | `T`[] |
`callback` | [KeyProducer](README.md#keyproducer)‹*`T`*, *`K`*› |
`thisArg?` | any |

**Returns:** *`Record<K, T>`*# map-array-to-object

Like `map()`, but creates object instead of array. `mapToObject` creates a new object with the results of calling a provided function on every element in the calling array.

Published as `.js`, `.mjs`, `umd.js` including type definitions for `TypeScript`.

# Syntax

```ts
const newObject = mapToObject(array, (currentValue[, index[, array]]) => {
  // Return key for object item
  // or [key, value] tuple (array) for key and value
  // or { key, value } object for key and value
}, [, thisArg]);
```

# Examples

```ts
import mapToObject from "map-array-to-object";
```

## Using a property for key to create object

```ts
const users = [{ name: "George", basketSize: 3 }, { name: "Lisa", basketSize: 2 }];
const usersLookup = mapToObject(users, user => user.name);
// Callback returns only key, value is same item. `usersLookup` is:
// { George: { name: "George", basketSize: 3 }, Lisa: { name: "Lisa", basketSize: 2 } }
```

## Creating custom object using key/value pair.

```ts
const users = [{ name: "George", basketSize: 3 }, { name: "Lisa", basketSize: 2 }];
const usersLookup = mapToObject(users, user => [user.name, user.basketSize]);
// Callback returns [key, value] tuple (array). First returned value used for key, second for value. `usersLookup` is:
// { George: 3, Lisa: 2 }
```

## Creating custom object using key/value object.

```ts
const users = [{ name: "George", basketSize: 3 }, { name: "Lisa", basketSize: 2 }];
const usersLookup = mapToObject(users, user => ({ key: user.name, value: user.basketSize }));
// Callback returns { key, value } object. `usersLookup` is:
// { George: 3, Lisa: 2 }
```

## Mapping an array of numbers to an array of square roots

```ts
const numbers = [1, 4, 9];
const roots = mapToObject(numbers, num => [num, Math.sqrt(num)]);
// `roots` is { 1: 1, 4: 2, 9: 3 }
```

# API
> **[map-array-to-object](README.md)**

[Globals](globals.md) /

# mapToObject

Like `map()`, but creates object instead of array. `mapToObject` creates a new object with the results of calling a provided function on every element in the calling array.

Published as `.js`, `.mjs`, `umd.js` including type definitions for `TypeScript`.

# Syntax

```ts
const newObject = mapToObject(array, (currentValue[, index[, array]]) => {
  // Return key for object item
  // or [key, value] tuple (array) for key and value
  // or { key, value } object for key and value
}, [, thisArg]);
```

# Examples

## Using a property for key to create object

```ts
const users = [{ name: "George", basketSize: 3 }, { name: "Lisa", basketSize: 2 }];
const usersLookup = mapToObject(users, user => user.name);
// Callback returns only key, value is same item. `usersLookup` is:
// { George: { name: "George", basketSize: 3 }, Lisa: { name: "Lisa", basketSize: 2 } }
```

## Creating custom object using key/value pair.

```ts
const users = [{ name: "George", basketSize: 3 }, { name: "Lisa", basketSize: 2 }];
const usersLookup = mapToObject(users, user => [user.name, user.basketSize]);
// Callback returns [key, value] tuple (array). First returned value used for key, second for value. `usersLookup` is:
// { George: 3, Lisa: 2 }
```

## Creating custom object using key/value object.

```ts
const users = [{ name: "George", basketSize: 3 }, { name: "Lisa", basketSize: 2 }];
const usersLookup = mapToObject(users, user => ({ key: user.name, value: user.basketSize }));
// Callback returns { key, value } object. `usersLookup` is:
// { George: 3, Lisa: 2 }
```

## Mapping an array of numbers to an array of square roots

```ts
const numbers = [1, 4, 9];
const roots = mapToObject(numbers, num => [num, Math.sqrt(num)]);
// `roots` is { 1: 1, 4: 2, 9: 3 }
```

# API
> **[maptoobject](README.md)**

### Index

#### Type aliases

* [Key](README.md#key)
* [KeyProducer](README.md#keyproducer)
* [KeyValueProducer](README.md#keyvalueproducer)

#### Functions

* [mapToObject](README.md#maptoobject)

## Type aliases

###  Key

Ƭ **Key**: *string | number | symbol*

Defined in maptoobject.ts:4

Type of key used in created object.

___

###  KeyProducer

Ƭ **KeyProducer**: *function*

Defined in maptoobject.ts:13

Callback function that produces an element of the created object, which returns only single value used for key.
Current array item is used as the value for the key in created object.

**`callback`** 

#### Type declaration:

▸ (`currentValue`: *`T`*, `index`: *number*, `array`: *`T`[]*): *`K`*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`currentValue` | `T` | is the current element being processed in the array. |
`index` | number | is the index of the current element being processed in the array. |
`array` | `T`[] | is the array map was called upon. |

___

###  KeyValueProducer

Ƭ **KeyValueProducer**: *function*

Defined in maptoobject.ts:29

Callback function that produces an element of the created object, which returns values used for key and value in created object.

**`callback`** 

#### Type declaration:

▸ (`currentValue`: *`T`*, `index`: *number*, `array`: *`T`[]*): *[`K`, `V`] | object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`currentValue` | `T` | is the current element being processed in the array. |
`index` | number | is the index of the current element being processed in the array. |
`array` | `T`[] | is the array map was called upon. |

## Functions

###  mapToObject

▸ **mapToObject**<**T**, **K**, **V**>(`array`: *`T`[]*, `callback`: *[KeyValueProducer](README.md#keyvalueproducer)‹*`T`*, *`K`*, *`V`*›*, `thisArg?`: *any*): *`Record<K, V>`*

Defined in maptoobject.ts:58

Creates a new object with the results of calling a provided function on every element in the calling array.
Returned key and value is added to created object.

`mapToObject` calls a provided `callback` function once for each element in an array, in order, and constructs a new object from the results.
`callback` is invoked only for indexes of the array which have assigned values, including undefined. It is not called for missing elements
of the array (that is, indexes that have never been set, which have been deleted or which have never been assigned a value).#### Example
```typescript
const array = ["Red", "Green"];
mapToObject(array, (currentValue) => [currentValue.toUpperCase(), currentValue.toLowerCase()]); // { "RED": "red", "GREEN": "green" }
mapToObject(array, (currentValue) => { key: currentValue.toUpperCase(), value: currentValue.toLowerCase() }); // { "RED": "red", "GREEN": "green" }
```

**Type parameters:**

▪ **T**

is array elements.

▪ **K**: *[Key](README.md#key)*

is keys of returned object.

▪ **V**

is values of returned object.

**Parameters:**

Name | Type |
------ | ------ |
`array` | `T`[] |
`callback` | [KeyValueProducer](README.md#keyvalueproducer)‹*`T`*, *`K`*, *`V`*› |
`thisArg?` | any |

**Returns:** *`Record<K, V>`*

▸ **mapToObject**<**T**, **K**>(`array`: *`T`[]*, `callback`: *[KeyProducer](README.md#keyproducer)‹*`T`*, *`K`*›*, `thisArg?`: *any*): *`Record<K, T>`*

Defined in maptoobject.ts:72

Creates a new object with the results of calling a provided function on every element in the calling array.
Returned key and current array item (as value) is added to created object.

`mapToObject` calls a provided `callback` function once for each element in an array, in order, and constructs a new object from the results.
`callback` is invoked only for indexes of the array which have assigned values, including undefined. It is not called for missing elements
of the array (that is, indexes that have never been set, which have been deleted or which have never been assigned a value).#### Example
```typescript
const array = ["Red", "Green"];
mapToObject(array, (currentValue) => currentValue.toUpperCase()); // { "RED": "Red", "GREEN": "Green" }
```

**Type parameters:**

▪ **T**

is array elements.

▪ **K**: *[Key](README.md#key)*

is keys of returned object.

**Parameters:**

Name | Type |
------ | ------ |
`array` | `T`[] |
`callback` | [KeyProducer](README.md#keyproducer)‹*`T`*, *`K`*› |
`thisArg?` | any |

**Returns:** *`Record<K, T>`*# mapToObject

Like `map()`, but creates object instead of array. `mapToObject` creates a new object with the results of calling a provided function on every element in the calling array.

Published as `.js`, `.mjs`, `umd.js` including type definitions for `TypeScript`.

# Syntax

```ts
const newObject = mapToObject(array, (currentValue[, index[, array]]) => {
  // Return key for object item
  // or [key, value] tuple (array) for key and value
  // or { key, value } object for key and value
}, [, thisArg]);
```

# Examples

## Using a property for key to create object

```ts
const users = [{ name: "George", basketSize: 3 }, { name: "Lisa", basketSize: 2 }];
const usersLookup = mapToObject(users, user => user.name);
// Callback returns only key, value is same item. `usersLookup` is:
// { George: { name: "George", basketSize: 3 }, Lisa: { name: "Lisa", basketSize: 2 } }
```

## Creating custom object using key/value pair.

```ts
const users = [{ name: "George", basketSize: 3 }, { name: "Lisa", basketSize: 2 }];
const usersLookup = mapToObject(users, user => [user.name, user.basketSize]);
// Callback returns [key, value] tuple (array). First returned value used for key, second for value. `usersLookup` is:
// { George: 3, Lisa: 2 }
```

## Creating custom object using key/value object.

```ts
const users = [{ name: "George", basketSize: 3 }, { name: "Lisa", basketSize: 2 }];
const usersLookup = mapToObject(users, user => ({ key: user.name, value: user.basketSize }));
// Callback returns { key, value } object. `usersLookup` is:
// { George: 3, Lisa: 2 }
```

## Mapping an array of numbers to an array of square roots

```ts
const numbers = [1, 4, 9];
const roots = mapToObject(numbers, num => [num, Math.sqrt(num)]);
// `roots` is { 1: 1, 4: 2, 9: 3 }
```

# API
> **[maptoobject](README.md)**

[Globals](globals.md) /

# mapToObject

Like `map()`, but creates object instead of array. `mapToObject` creates a new object with the results of calling a provided function on every element in the calling array.

Published as `.js`, `.mjs`, `umd.js` including type definitions for `TypeScript`.

# Syntax

```ts
const newObject = mapToObject(array, (currentValue[, index[, array]]) => {
  // Return key for object item
  // or [key, value] tuple (array) for key and value
  // or { key, value } object for key and value
}, [, thisArg]);
```

# Examples

## Using a property for key to create object

```ts
const users = [{ name: "George", basketSize: 3 }, { name: "Lisa", basketSize: 2 }];
const usersLookup = mapToObject(users, user => user.name);
// Callback returns only key, value is same item. `usersLookup` is:
// { George: { name: "George", basketSize: 3 }, Lisa: { name: "Lisa", basketSize: 2 } }
```

## Creating custom object using key/value pair.

```ts
const users = [{ name: "George", basketSize: 3 }, { name: "Lisa", basketSize: 2 }];
const usersLookup = mapToObject(users, user => [user.name, user.basketSize]);
// Callback returns [key, value] tuple (array). First returned value used for key, second for value. `usersLookup` is:
// { George: 3, Lisa: 2 }
```

## Creating custom object using key/value object.

```ts
const users = [{ name: "George", basketSize: 3 }, { name: "Lisa", basketSize: 2 }];
const usersLookup = mapToObject(users, user => ({ key: user.name, value: user.basketSize }));
// Callback returns { key, value } object. `usersLookup` is:
// { George: 3, Lisa: 2 }
```

## Mapping an array of numbers to an array of square roots

```ts
const numbers = [1, 4, 9];
const roots = mapToObject(numbers, num => [num, Math.sqrt(num)]);
// `roots` is { 1: 1, 4: 2, 9: 3 }
```

# API
> **[maptoobject](README.md)**

### Index

#### Type aliases

* [Key](README.md#key)
* [KeyProducer](README.md#keyproducer)
* [KeyValueProducer](README.md#keyvalueproducer)

#### Functions

* [mapToObject](README.md#maptoobject)

## Type aliases

###  Key

Ƭ **Key**: *string | number | symbol*

Defined in maptoobject.ts:4

Type of key used in created object.

___

###  KeyProducer

Ƭ **KeyProducer**: *function*

Defined in maptoobject.ts:13

Callback function that produces an element of the created object, which returns only single value used for key.
Current array item is used as the value for the key in created object.

**`callback`** 

#### Type declaration:

▸ (`currentValue`: *`T`*, `index`: *number*, `array`: *`T`[]*): *`K`*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`currentValue` | `T` | is the current element being processed in the array. |
`index` | number | is the index of the current element being processed in the array. |
`array` | `T`[] | is the array map was called upon. |

___

###  KeyValueProducer

Ƭ **KeyValueProducer**: *function*

Defined in maptoobject.ts:29

Callback function that produces an element of the created object, which returns values used for key and value in created object.

**`callback`** 

#### Type declaration:

▸ (`currentValue`: *`T`*, `index`: *number*, `array`: *`T`[]*): *[`K`, `V`] | object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`currentValue` | `T` | is the current element being processed in the array. |
`index` | number | is the index of the current element being processed in the array. |
`array` | `T`[] | is the array map was called upon. |

## Functions

###  mapToObject

▸ **mapToObject**<**T**, **K**, **V**>(`array`: *`T`[]*, `callback`: *[KeyValueProducer](README.md#keyvalueproducer)‹*`T`*, *`K`*, *`V`*›*, `thisArg?`: *any*): *`Record<K, V>`*

Defined in maptoobject.ts:58

Creates a new object with the results of calling a provided function on every element in the calling array.
Returned key and value is added to created object.

`mapToObject` calls a provided `callback` function once for each element in an array, in order, and constructs a new object from the results.
`callback` is invoked only for indexes of the array which have assigned values, including undefined. It is not called for missing elements
of the array (that is, indexes that have never been set, which have been deleted or which have never been assigned a value).#### Example
```typescript
const array = ["Red", "Green"];
mapToObject(array, (currentValue) => [currentValue.toUpperCase(), currentValue.toLowerCase()]); // { "RED": "red", "GREEN": "green" }
mapToObject(array, (currentValue) => { key: currentValue.toUpperCase(), value: currentValue.toLowerCase() }); // { "RED": "red", "GREEN": "green" }
```

**Type parameters:**

▪ **T**

is array elements.

▪ **K**: *[Key](README.md#key)*

is keys of returned object.

▪ **V**

is values of returned object.

**Parameters:**

Name | Type |
------ | ------ |
`array` | `T`[] |
`callback` | [KeyValueProducer](README.md#keyvalueproducer)‹*`T`*, *`K`*, *`V`*› |
`thisArg?` | any |

**Returns:** *`Record<K, V>`*

▸ **mapToObject**<**T**, **K**>(`array`: *`T`[]*, `callback`: *[KeyProducer](README.md#keyproducer)‹*`T`*, *`K`*›*, `thisArg?`: *any*): *`Record<K, T>`*

Defined in maptoobject.ts:72

Creates a new object with the results of calling a provided function on every element in the calling array.
Returned key and current array item (as value) is added to created object.

`mapToObject` calls a provided `callback` function once for each element in an array, in order, and constructs a new object from the results.
`callback` is invoked only for indexes of the array which have assigned values, including undefined. It is not called for missing elements
of the array (that is, indexes that have never been set, which have been deleted or which have never been assigned a value).#### Example
```typescript
const array = ["Red", "Green"];
mapToObject(array, (currentValue) => currentValue.toUpperCase()); // { "RED": "Red", "GREEN": "Green" }
```

**Type parameters:**

▪ **T**

is array elements.

▪ **K**: *[Key](README.md#key)*

is keys of returned object.

**Parameters:**

Name | Type |
------ | ------ |
`array` | `T`[] |
`callback` | [KeyProducer](README.md#keyproducer)‹*`T`*, *`K`*› |
`thisArg?` | any |

**Returns:** *`Record<K, T>`*