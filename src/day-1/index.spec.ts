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
const stringifiedExample = JSON.stringify(processFile(exampleFile));

// ============
// == Part 1 ==
// ============
describe(`The solver for Day ${DAY_NUM}: ${CHALLENGE_TITLE}, Part 1`, () => {
    let example: number[];

    beforeEach(() => {
        example = JSON.parse(stringifiedExample);
    });

    describe(`for the exmaple input`, () => {
        it(`should return 7`, () => {
            const solution = part1Solver(example);

            assert.strictEqual(solution, 7);
        });
    });
});

// ============
// == Part 2 ==
// ============
describe(`The solver for Day ${DAY_NUM}: ${CHALLENGE_TITLE}, Part 2`, () => {
    let example: number[];

    beforeEach(() => {
        example = JSON.parse(stringifiedExample);
    });

    describe(`for the exmaple input`, () => {
        it(`should return 5`, () => {
            const solution = part2Solver(example);

            assert.strictEqual(solution, 5);
        });
    });

    describe(`for the exmaple input with 239 as the last entry`, () => {
        it(`should return 4`, () => {
            example[example.length - 1] = 239;

            const solution = part2Solver(example);

            assert.strictEqual(solution, 4);
        });
    });

    describe(`for the exmaple input with 239 as the last entry`, () => {
        it(`should return 6`, () => {
            example[4] = 201;

            const solution = part2Solver(example);

            assert.strictEqual(solution, 6);
        });
    });
});
