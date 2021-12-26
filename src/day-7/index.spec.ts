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
    let example: any; // Refer to Day-2's solution for a typed example.

    beforeEach(() => {
        example = JSON.parse(stringifiedExample);
    });

    describe(`for the exmaple input`, () => {
        it(`should return 37`, () => {
            const solution = part1Solver(example);

            assert.strictEqual(solution, 37);
        });
    });

    describe(`for the input "0,0"`, () => {
        it(`should return 0`, () => {
            const solution = part1Solver([0, 0]);

            assert.strictEqual(solution, 0);
        });
    });

    describe(`for the input "0,1,0"`, () => {
        it(`should return 1`, () => {
            const solution = part1Solver([0, 1, 0]);

            assert.strictEqual(solution, 1);
        });
    });

    describe(`for the input "0,1,2"`, () => {
        it(`should return 2`, () => {
            const solution = part1Solver([0, 1, 2]);

            assert.strictEqual(solution, 2);
        });
    });

    describe(`for the input "0,1,1,2,2,4"`, () => {
        it(`should return 6`, () => {
            const solution = part1Solver([0, 1, 1, 2, 2, 4]);

            assert.strictEqual(solution, 6);
        });
    });
});

// ============
// == Part 2 ==
// ============
describe(`The solver for Day ${DAY_NUM}: ${CHALLENGE_TITLE}, Part 2`, () => {
    let example: any; // Refer to Day-2's solution for a typed example.

    beforeEach(() => {
        example = JSON.parse(stringifiedExample);
    });

    describe(`for the exmaple input`, () => {
        it(`should return 168`, () => {
            const solution = part2Solver(example);

            assert.strictEqual(solution, 168);
        });
    });

    describe(`for the input "0,0"`, () => {
        it(`should return 0`, () => {
            const solution = part2Solver([0, 0]);

            assert.strictEqual(solution, 0);
        });
    });

    describe(`for the input "0,1,0"`, () => {
        it(`should return 1`, () => {
            const solution = part2Solver([0, 1, 0]);

            assert.strictEqual(solution, 1);
        });
    });

    describe(`for the input "0,1,2"`, () => {
        it(`should return 2`, () => {
            const solution = part2Solver([0, 1, 2]);

            assert.strictEqual(solution, 2);
        });
    });

    describe(`for the input "0,1,1,2,2,4"`, () => {
        it(`should return 8`, () => {
            const solution = part2Solver([0, 1, 1, 2, 2, 4]);

            assert.strictEqual(solution, 8);
        });
    });
});
