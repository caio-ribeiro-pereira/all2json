import { parseYaml } from '../src/parse-yaml'

describe('#parseYaml', () => {
  it('returns json when parse yaml string', () => {
    const yamlString = "- name: John\n  age: 18\n- name: Connor\n  age: 20\n";
    const expected = [
      { name: "John", age: 18 },
      { name: "Connor", age: 20 }
    ];
    expect(parseYaml(yamlString)).toEqual(expected);
  });

  it('raises error when yaml is invalid', () => {
    const yamlString = "name\t\t\tage:\n\n-Invalid";
    expect(() => parseYaml(yamlString)).toThrow(/Parse Yaml Error: MISSING_CHAR/);
  });
});
