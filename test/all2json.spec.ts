import { parseCSV } from '../src/all2json'

describe('#parseCSV', () => {
  it('returns json when parse csv string with default config', () => {
    const csvString = "name,age\nJohn,18\nConnor,20";
    const expected = [
      ["name", "age"],
      ["John", "18"],
      ["Connor", "20"]
    ];
    expect(parseCSV(csvString)).toEqual(expected);
  });

  it('returns json when parse csv string with custom config', () => {
    const csvString = "name;age\nJohn;18\nConnor;20";
    const config = { header: true, delimiter: ';' };
    const expected = [
      { name: "John", age: "18" },
      { name: "Connor", age: "20" }
    ];
    expect(parseCSV(csvString, config)).toEqual(expected);
  });

  it('raises error when csv is invalid', () => {
    const csvString = "name;age\nJohn,18\nConnor|20";
    expect(() => parseCSV(csvString)).toThrow(/Parse error: UndetectableDelimiter/);
  });
});
