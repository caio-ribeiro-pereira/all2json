import { parse } from 'yaml';

export function parseYaml(yamlString: string) {
  try {
    return parse(yamlString);
  } catch (err) {
    throw new Error(`Parse Yaml Error: ${err.code}`);
  }
}
