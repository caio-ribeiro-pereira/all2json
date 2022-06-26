import { parse } from 'papaparse';
export function parseCSV(csvString, config) {
    const { data, errors } = parse(csvString, config);
    if (errors === null || errors === void 0 ? void 0 : errors.length) {
        throw new Error(`Parse error: ${errors[0].code}`);
    }
    return data;
}
//# sourceMappingURL=parse-csv.js.map