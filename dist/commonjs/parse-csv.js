"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCSV = void 0;
const papaparse_1 = require("papaparse");
function parseCSV(csvString, config) {
    const { data, errors } = (0, papaparse_1.parse)(csvString, config);
    if (errors === null || errors === void 0 ? void 0 : errors.length) {
        throw new Error(`Parse error: ${errors[0].code}`);
    }
    return data;
}
exports.parseCSV = parseCSV;
//# sourceMappingURL=parse-csv.js.map