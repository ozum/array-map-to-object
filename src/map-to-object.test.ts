import mapToObject from "./map-to-object";

const array = ["red", "green"];
const arrayOfObjects = [
  { id: 1, name: "red" },
  { id: 2, name: "green" },
];

const undefinedData = undefined as { id: number; name: string }[] | undefined | null;
const nullData = null as { id: number; name: string }[] | undefined | null;

const keyProducer = (item: string): string => item.toUpperCase();
const keyValueProducerArray = (item: string): [string, string] => [item.toUpperCase(), item.toLowerCase()];
const keyValueProducerObject = (item: string): { key: string; value: string } => ({ key: item.toUpperCase(), value: item.toLowerCase() });

function keyProducerWithThis(this: string, item: string): string {
  return `${this}${item.toUpperCase()}`;
}

describe("mapToObject", () => {
  it("should create object with keys.", () => {
    expect(mapToObject(array, keyProducer)).toStrictEqual({ RED: "red", GREEN: "green" });
  });

  it("should create object with keys using this arg.", () => {
    expect(mapToObject(array, keyProducerWithThis, "x")).toStrictEqual({ xRED: "red", xGREEN: "green" });
  });

  it("should create object with keys and values using array returning callback.", () => {
    expect(mapToObject(array, keyValueProducerArray)).toStrictEqual({ RED: "red", GREEN: "green" });
  });

  it("should create object with keys and values using object returning callback.", () => {
    expect(mapToObject(array, keyValueProducerObject)).toStrictEqual({ RED: "red", GREEN: "green" });
  });

  it("should create object with keys and values using key.", () => {
    expect(mapToObject(arrayOfObjects, "id")).toStrictEqual({ 1: { id: 1, name: "red" }, 2: { id: 2, name: "green" } });
  });

  it("should create empty lookup object when value is undefined.", () => {
    const result = mapToObject(undefinedData, "name");

    expect(result).toStrictEqual({});
    expect(result.red).toBeUndefined(); // Ensure key is available in type. If not `lookup.id` throws TypeScript exception.
  });

  it("should create empty object when value is undefined.", () => {
    const result = mapToObject(undefinedData, (r) => r.name);

    expect(result).toStrictEqual({});
    expect(result.red).toBeUndefined(); // Ensure key is available in type. If not `lookup.id` throws TypeScript exception.
  });

  it("should create empty lookup object when value is null.", () => {
    const result = mapToObject(nullData, "name");

    expect(result).toStrictEqual({});
    expect(result.name).toBeUndefined(); // Ensure key is available in type. If not `lookup.id` throws TypeScript exception.
  });

  it("should create empty object when value is null.", () => {
    const result = mapToObject(nullData, (r) => r.name);

    expect(result).toStrictEqual({});
    expect(result.name).toBeUndefined(); // Ensure key is available in type. If not `lookup.id` throws TypeScript exception.
  });
});
