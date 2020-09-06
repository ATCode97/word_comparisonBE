const { expect } = require("chai");
const { formatDates } = require("../db/utils/utils");

describe("formatDates", () => {
  it("will return a empty array when passed through a empty array", () => {
    expect(formatDates([])).to.eql([]);
  });
  it("will format the date of an object array that contains one value", () => {
    const input = [
      {
        primary_words: "Hello",
        secondary_words: "World",
        compared_at: 1542284514171,
      },
    ];
    const actual = formatDates(input);

    expect(actual[0].compared_at instanceof Date).to.equal(true);
  });
  it("will format the date of an object array that contains more than one value", () => {
    const input = [
      {
        primary_words: "Hello",
        secondary_words: "World",
        compared_at: 1542284514171,
      },
      {
        primary_words: "silent",
        secondary_words: "listen",
        compared_at: 1416140514171,
      },
    ];
    const actual = formatDates(input);

    expect(actual[0].compared_at instanceof Date).to.equal(true);
    expect(actual[1].compared_at instanceof Date).to.equal(true);
  });
  it("MUTATION -won't mutate the original array", () => {
    const input = [
      {
        primary_words: "silent",
        secondary_words: "listen",
        compared_at: 1416140514171,
      },
    ];
    formatDates(input);

    expect(input).to.eql([
      {
        primary_words: "silent",
        secondary_words: "listen",
        compared_at: 1416140514171,
      },
    ]);
  });
});
