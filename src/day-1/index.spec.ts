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
            `part1Solver() should return 7 for the example input:`,
            ` [ ${example.join(" ")} ]`,
        ].join(""),
        () => {
            const solution = part1Solver(example);

            assert.strictEqual(solution, 7);
        }
    );
});

// ============
// == Part 2 ==
// ============
describe(`Day ${DAY_NUM}: ${CHALLENGE_TITLE} (Part 2)`, () => {
    it(
        [
            `part2Solver() should return 5 for the example input:`,
            ` [ ${example.join(" ")} ]`,
        ].join(""),
        () => {
            const solution = part2Solver(example);

            assert.strictEqual(solution, 5);
        }
    );

    it(
        [
            `part2Solver() should return 4 for the example input:`,
            ` if the last entry is changed to 239`,
        ].join(""),
        () => {
            const newExample = example.slice(0, -1).concat(239);
            const solution = part2Solver(newExample);

            assert.strictEqual(solution, 4);
        }
    );

    it(
        [
            `part2Solver() should return 6 for the example input:`,
            ` if the 5th entry is changed to 201`,
        ].join(""),
        () => {
            const newExample = [...example];

            newExample[4] = 201;

            const solution = part2Solver(newExample);

            assert.strictEqual(solution, 6);
        }
    );
});
