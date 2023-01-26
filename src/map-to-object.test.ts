import mapToObject from "./map-to-object";

const array = ["Red", "Green"];
const arrayOfObjects = [
  { id: 1, name: "Red" },
  { id: 2, name: "Green" },
];

const keyProducer = (item: string): string => item.toUpperCase();
const keyValueProducerArray = (item: string): [string, string] => [item.toUpperCase(), item.toLowerCase()];
const keyValueProducerObject = (item: string): { key: string; value: string } => ({ key: item.toUpperCase(), value: item.toLowerCase() });

function keyProducerWithThis(this: string, item: string): string {
  return `${this}${item.toUpperCase()}`;
}

describe("mapToObject", () => {
  it("should create object with keys.", () => {
    expect(mapToObject(array, keyProducer)).toStrictEqual({ RED: "Red", GREEN: "Green" });
  });

  it("should create object with keys using this arg.", () => {
    expect(mapToObject(array, keyProducerWithThis, "x")).toStrictEqual({ xRED: "Red", xGREEN: "Green" });
  });

  it("should create object with keys and values using array returning callback.", () => {
    expect(mapToObject(array, keyValueProducerArray)).toStrictEqual({ RED: "red", GREEN: "green" });
  });

  it("should create object with keys and values using object returning callback.", () => {
    expect(mapToObject(array, keyValueProducerObject)).toStrictEqual({ RED: "red", GREEN: "green" });
  });

  it("should create object with keys and values using key.", () => {
    expect(mapToObject(arrayOfObjects, "id")).toStrictEqual({ 1: { id: 1, name: "Red" }, 2: { id: 2, name: "Green" } });
  });

  it("should create empty lookup object when value is undefined.", () => {
    const data = undefined as unknown as typeof arrayOfObjects;
    expect(mapToObject(data, "id")).toStrictEqual({});
    expect(mapToObject(data, (r) => r.id)).toStrictEqual({});
  });

  it("should create empty lookup object when value is null.", () => {
    const data = null as unknown as typeof arrayOfObjects;
    expect(mapToObject(data, "id")).toStrictEqual({});
    expect(mapToObject(data, (r) => r.id)).toStrictEqual({});
  });
});
