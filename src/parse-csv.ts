import { parse } from 'papaparse';
import { CSVConfig } from './types';

export function parseCSV(csvString: string, config?: CSVConfig) {
  const { data, errors } = parse(csvString, config);
  if (errors?.length) {
    throw new Error(`Parse error: ${errors[0].code}`);
  }
  return data;
}