import MyHeap from "@code/MyHeap";

test("my heap", function () {
    const minHeap = new MyHeap<number>((a: number, b: number) => a < b);

    expect(minHeap.length).toEqual(0);

    minHeap.insert(5);
    minHeap.insert(3);
    minHeap.insert(69);
    minHeap.insert(420);
    minHeap.insert(4);
    minHeap.insert(1);
    minHeap.insert(8);
    minHeap.insert(7);

    expect(minHeap.length).toEqual(8);
    expect(minHeap.delete()).toEqual(1);
    expect(minHeap.delete()).toEqual(3);
    expect(minHeap.delete()).toEqual(4);
    expect(minHeap.delete()).toEqual(5);
    expect(minHeap.length).toEqual(4);
    expect(minHeap.delete()).toEqual(7);
    expect(minHeap.delete()).toEqual(8);
    expect(minHeap.delete()).toEqual(69);
    expect(minHeap.delete()).toEqual(420);
    expect(minHeap.length).toEqual(0);

    const maxHeap = new MyHeap<number>((a: number, b: number) => a > b);

    expect(maxHeap.length).toEqual(0);

    maxHeap.insert(5);
    maxHeap.insert(3);
    maxHeap.insert(69);
    maxHeap.insert(420);
    maxHeap.insert(4);
    maxHeap.insert(1);
    maxHeap.insert(8);
    maxHeap.insert(7);

    expect(maxHeap.length).toEqual(8);
    expect(maxHeap.delete()).toEqual(420);
    expect(maxHeap.delete()).toEqual(69);
    expect(maxHeap.delete()).toEqual(8);
    expect(maxHeap.delete()).toEqual(7);
    expect(maxHeap.delete()).toEqual(5);
    expect(maxHeap.length).toEqual(3);
    expect(maxHeap.delete()).toEqual(4);
    expect(maxHeap.delete()).toEqual(3);
    expect(maxHeap.delete()).toEqual(1);
    expect(maxHeap.length).toEqual(0);
});
