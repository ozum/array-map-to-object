import type { ConditionalKeys } from "type-fest";

/** Type of key used in created object. */
type Key = string | number | symbol;

/** Null or undefined */
type None = null | undefined;

/**
 * Callback function that produces an element of the created object, which returns only single value used for key.
 * Current array item is used as the value for the key in created object.
 * @callback
 * @typeparam T is typeof current value.
 * @typeparam K is typeof key used in created object.
 */
type KeyProducer<T, K extends Key> =
  /**
   * @param currentValue is the current element being processed in the array.
   * @param index is the index of the current element being processed in the array.
   * @param array is the array map was called upon.
   * @returns key to be used for the current element in created object.
   */
  (currentValue: T, index: number, array: T[]) => K;

/**
 * Callback function that produces an element of the created object, which returns values used for key and value in created object.
 * @callback
 * @typeparam T is typeof current value.
 * @typeparam K is typeof key used in created object.
 * @typeparam V is typeof value used in created object.
 */
type KeyValueProducer<T, K extends Key, V> =
  /**
   * @param currentValue is the current element being processed in the array.
   * @param index is the index of the current element being processed in the array.
   * @param array is the array map was called upon.
   * @returns key and value to be used for the current element in created object.
   */
  (currentValue: T, index: number, array: T[]) => [K, V] | { key: K; value: V };

/** KeyProducer or KeyValueProducer */
type Producer<T, K extends Key, V> = KeyValueProducer<T, K, V> | KeyProducer<T, K>;

/** @ignore */
function isKey<T>(array: T[] | None, key: unknown): key is ConditionalKeys<T, Key> {
  return typeof key === "string";
}

/** Object type which keys are generated from values of given object's key. */
type RecordByKey<T, K extends keyof T> = T[K] extends Key ? Record<T[K], T> : never;

/** @ignore */
function useKey<T, Z extends ConditionalKeys<T, Key>>(array: T[] | None, key: Z): RecordByKey<T, Z> {
  const result = {} as RecordByKey<T, Z>;
  if (array === null || array === undefined) return result;
  array.forEach((item) => {
    result[item[key]] = item as RecordByKey<T, Z>[T[Z]];
  });
  return result;
}

/** @ignore */
function useCallback<T, K extends Key, V>(array: T[] | None, callback: Producer<T, K, V>, thisArg?: unknown): Record<K, V> | Record<K, T> {
  const result = {} as Record<K, V> | Record<K, T>;
  if (array === null || array === undefined) return result;

  const cb = thisArg ? (callback as Producer<T, K, V>).bind(thisArg) : callback;

  array.forEach((item, index) => {
    const cbResult = cb(item, index, array);
    if (typeof cbResult === "object") {
      const [key, value] = Array.isArray(cbResult) ? cbResult : [cbResult.key, cbResult.value];
      (result as Record<K, V>)[key as K] = value;
    } else {
      (result as Record<K, T>)[cbResult] = item;
    }
  });

  return result;
}

/**
 * Creates a new lookup object from array of objects. Keys are values of array elements with the given key, values are array elements.
 *
 * @typeparam T is array elements.
 * @typeparam Z is keys of array elements.
 *
 * @param array is the array of objects to create new object from.
 * @param key is the key to get value to be used as new key in the result object.
 * @returns a new object.
 *
 * @example
 * const array = [{ id: 1, name: "Red" }, { id: 2, name: "Green" }];
 * mapToObject(array, 'id'); // { 1: { id: 1, name: "Red" }, 2: { id: 2, name: "Green" } }
 * mapToObject(array, 'name'); // { Red: { id: 1, name: "Red" }, Green: { id: 2, name: "Green" } }
 */
function mapToObject<T extends Record<Key, unknown>, Z extends ConditionalKeys<T, Key>>(array: T[] | None, key: Z): RecordByKey<T, Z>;
/**
 * Creates a new object with the results of a function on every element in the calling array.
 * Returned key and value is added to created object.
 *
 * `mapToObject` calls a provided `callback` function once for each element in an array, in order, and constructs a new object from the results.
 * `callback` is invoked only for indexes of the array which have assigned values, including undefined. It is not called for missing elements
 * of the array (that is, indexes that have never been set, which have been deleted or which have never been assigned a value).
 *
 * @typeparam T is array elements.
 * @typeparam K is keys of returned object.
 * @typeparam V is values of returned object.
 *
 * @param array is the array to create new object from.
 * @param callback is the function to call for each element in the array.
 * @param thisArg is the value to be used as `this` in the callback function.
 * @returns a new object.
 *
 * @example
 * const array = ["Red", "Green"];
 * mapToObject(array, (currentValue) => [currentValue.toUpperCase(), currentValue.toLowerCase()]); // { "RED": "Red", "GREEN": "Green" }
 * mapToObject(array, (currentValue) => { key: currentValue.toUpperCase(), value: currentValue.toLowerCase() }); // { "RED": "Red", "GREEN": "Green" }
 */
function mapToObject<T, K extends Key, V>(array: T[] | None, callback: KeyValueProducer<T, K, V>, thisArg?: unknown): Record<K, V>;
/**
 * Creates a new object with the results of a function on every element in the calling array.
 * Returned key and current array item (as value) is added to created object.
 *
 * `mapToObject` calls a provided `callback` function once for each element in an array, in order, and constructs a new object from the results.
 * `callback` is invoked only for indexes of the array which have assigned values, including undefined. It is not called for missing elements
 * of the array (that is, indexes that have never been set, which have been deleted or which have never been assigned a value).
 *
 * @typeparam T is array elements.
 * @typeparam K is keys of returned object.
 *
 * @param array is the array to create new object from.
 * @param callback is the function to call for each element in the array.
 * @param thisArg is the value to be used as `this` in the callback function.
 * @returns a new object.
 *
 * @example
 * const array = ["Red", "Green"];
 * mapToObject(array, (currentValue) => currentValue.toUpperCase()); // { "RED": "Red", "GREEN": "Green" }
 */
function mapToObject<T, K extends Key>(array: T[] | None, callback: KeyProducer<T, K>, thisArg?: unknown): Record<K, T>;
function mapToObject<T, K extends Key, V, Z extends ConditionalKeys<T, Key>>(
  array: T[] | None,
  callbackOrKey: Producer<T, K, V> | Z,
  thisArg?: unknown
): Record<K, V> | Record<K, T> | RecordByKey<T, Z> {
  return isKey(array, callbackOrKey) ? useKey(array, callbackOrKey) : useCallback(array, callbackOrKey as Producer<T, K, V>, thisArg);
}

export default mapToObject;
