import "mocha";
import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import {
    DAY_NUM,
    CHALLENGE_TITLE,
    processFile,
    part1Solver,
    part2Solver,
} from "./index";

const examplePathname = path.resolve(__dirname, "./example.txt");
const exampleFile = fs.readFileSync(examplePathname, "utf-8");
const example = processFile(exampleFile);

// ============
// == Part 1 ==
// ============
describe(`Day ${DAY_NUM}: ${CHALLENGE_TITLE} (Part 1)`, () => {
    it(
        [
            `part1Solver() should return 150 for the example input:`,
            ` [ ${example.join(" ")} ]`,
        ].join(""),
        () => {
            const solution = part1Solver(example);

            assert.strictEqual(solution, 150);
        }
    );
});

// ============
// == Part 2 ==
// ============
describe(`Day ${DAY_NUM}: ${CHALLENGE_TITLE} (Part 2)`, () => {
    it(
        [
            `part2Solver() should return ??? for the example input:`,
            ` [ ${example.join(" ")} ]`,
        ].join(""),
        () => {
            const solution = part2Solver(example);

            assert.strictEqual(solution, "");
        }
    );
});
