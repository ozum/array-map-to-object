/**
 * Type of key used in created object.
 */
type Key = string | number | symbol;

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

/**
 * @ignore
 */
type Producer<T, K extends Key, V> = KeyValueProducer<T, K, V> | KeyProducer<T, K>;

/**
 * Creates a new object with the results of calling a provided function on every element in the calling array.
 * Returned key and value is added to created object.
 *
 * `mapToObject` calls a provided `callback` function once for each element in an array, in order, and constructs a new object from the results.
 * `callback` is invoked only for indexes of the array which have assigned values, including undefined. It is not called for missing elements
 * of the array (that is, indexes that have never been set, which have been deleted or which have never been assigned a value).
 * @typeparam T is array elements.
 * @typeparam K is keys of returned object.
 * @typeparam V is values of returned object.
 * @example
 * const array = ["Red", "Green"];
 * mapToObject(array, (currentValue) => [currentValue.toUpperCase(), currentValue.toLowerCase()]); // { "RED": "red", "GREEN": "green" }
 * mapToObject(array, (currentValue) => { key: currentValue.toUpperCase(), value: currentValue.toLowerCase() }); // { "RED": "red", "GREEN": "green" }
 */
function mapToObject<T, K extends Key, V>(array: T[], callback: KeyValueProducer<T, K, V>, thisArg?: any): Record<K, V>;
/**
 * Creates a new object with the results of calling a provided function on every element in the calling array.
 * Returned key and current array item (as value) is added to created object.
 *
 * `mapToObject` calls a provided `callback` function once for each element in an array, in order, and constructs a new object from the results.
 * `callback` is invoked only for indexes of the array which have assigned values, including undefined. It is not called for missing elements
 * of the array (that is, indexes that have never been set, which have been deleted or which have never been assigned a value).
 * @typeparam T is array elements.
 * @typeparam K is keys of returned object.
 * @example
 * const array = ["Red", "Green"];
 * mapToObject(array, (currentValue) => currentValue.toUpperCase()); // { "RED": "Red", "GREEN": "Green" }
 */
function mapToObject<T, K extends Key>(array: T[], callback: KeyProducer<T, K>, thisArg?: any): Record<K, T>;
function mapToObject<T, K extends Key, V>(array: T[], callback: Producer<T, K, V>, thisArg?: any): Record<K, V> | Record<K, T> {
  const result: Record<K, V> | Record<K, T> = {} as any;
  const cb = thisArg ? callback.bind(thisArg) : callback;

  array.forEach((item, index) => {
    const cbResult = cb(item, index, array);
    if (typeof cbResult === "object") {
      const [key, value] = Array.isArray(cbResult) ? cbResult : [cbResult.key, cbResult.value];
      (result as Record<K, V>)[key] = value;
    } else {
      (result as Record<K, T>)[cbResult] = item;
    }
  });

  return result;
}

export default mapToObject;
