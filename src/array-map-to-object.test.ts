import mapToObject from "./array-map-to-object";

const array = ["Red", "Green"];

const keyProducer = (item: string): string => item.toUpperCase();
const keyValueProducerArray = (item: string): [string, string] => [item.toUpperCase(), item.toLowerCase()];
const keyValueProducerObject = (item: string): { key: string; value: string } => ({ key: item.toUpperCase(), value: item.toLowerCase() });

function keyProducerWithThis(this: string, item: string): string {
  return `${this}${item.toUpperCase()}`;
}

describe("mapToObject", () => {
  it("should create object with keys.", () => {
    expect(mapToObject(array, keyProducer)).toEqual({ RED: "Red", GREEN: "Green" });
  });

  it("should create object with keys using this arg.", () => {
    expect(mapToObject(array, keyProducerWithThis, "x")).toEqual({ xRED: "Red", xGREEN: "Green" });
  });

  it("should create object with keys and values using array returning callback.", () => {
    expect(mapToObject(array, keyValueProducerArray)).toEqual({ RED: "red", GREEN: "green" });
  });

  it("should create object with keys and values using object returning callback.", () => {
    expect(mapToObject(array, keyValueProducerObject)).toEqual({ RED: "red", GREEN: "green" });
  });
});
