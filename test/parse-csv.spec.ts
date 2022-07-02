import { parseCSV } from '../src/parse-csv'

describe('#parseCSV', () => {
  describe('default config', () => {
    it('returns json when parse csv string', () => {
      const csvString = "name,age\nJohn,18\nConnor,20";
      const expected = [
        ["name", "age"],
        ["John", "18"],
        ["Connor", "20"]
      ];
      expect(parseCSV(csvString)).toEqual(expected);
    });
  });

  describe('custom config', () => {
    it('returns json when parse csv string using header config', () => {
      const csvString = "name;age\nJohn;18\nConnor;20";
      const config = { header: true };
      const expected = [
        { name: "John", age: "18" },
        { name: "Connor", age: "20" }
      ];
      expect(parseCSV(csvString, config)).toEqual(expected);
    });

    it('returns json when parse csv string using delimiter config', () => {
      const csvString = "name|age\nJohn|18\nConnor|20";
      const config = { delimiter: '|' };
      const expected = [
        ['name', 'age'],
        ['John', '18'],
        ['Connor', '20']
      ];
      expect(parseCSV(csvString, config)).toEqual(expected);
    });

    it('returns json when parse csv string using skipEmptyLines config', () => {
      const csvString = "name,age\nJohn,18\n\nConnor,20";
      const config = { skipEmptyLines: true };
      const expected = [
        ['name', 'age'],
        ['John', '18'],
        ['Connor', '20']
      ];
      expect(parseCSV(csvString, config)).toEqual(expected);
    });
  });

  it('raises error when csv is invalid', () => {
    const csvString = "name;age\nJohn,18\nConnor|20";
    expect(() => parseCSV(csvString)).toThrow(/Parse error: UndetectableDelimiter/);
  });
});
