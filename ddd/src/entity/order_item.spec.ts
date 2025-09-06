import OrderItem from "./order_item";

describe("Order item unit tests", () => {

  it("should return id correctly", () => {
    const item = new OrderItem("i1", "Item 1", 100, "p1", 2);

    expect(item.id).toBe("i1");
  });

  it("should return name correctly", () => {
    const item = new OrderItem("i1", "Item 1", 100, "p1", 2);

    expect(item.name).toBe("Item 1");
  });

  it("should return productId correctly", () => {
    const item = new OrderItem("i1", "Item 1", 100, "p1", 2);

    expect(item.productId).toBe("p1");
  });

  it("should return quantity correctly", () => {
    const item = new OrderItem("i1", "Item 1", 100, "p1", 2);

    expect(item.quantity).toBe(2);
  });

  it("should return price correctly", () => {
    const item = new OrderItem("i1", "Item 1", 100, "p1", 2);

    expect(item.price).toBe(200);
  });
});