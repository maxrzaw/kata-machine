import Trie from "@code/Trie";

test("Trie", function () {
    const trie = new Trie();
    trie.insert("foo");
    trie.insert("fool");
    trie.insert("foolish");
    trie.insert("bar");

    expect(trie.find("fo").sort()).toEqual(["foo", "fool", "foolish"]);

    expect(trie.find("foo").sort()).toEqual(["foo", "fool", "foolish"]);
    expect(trie.find("fooo").sort()).toEqual([]);

    trie.delete("fool");

    expect(trie.find("fo").sort()).toEqual(["foo", "foolish"]);
});
