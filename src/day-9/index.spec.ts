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
    let example: any;

    beforeEach(() => {
        example = JSON.parse(stringifiedExample);
    });

    describe(`for the exmaple input`, () => {
        it(`should return 15`, () => {
            const solution = part1Solver(example);

            assert.strictEqual(solution, 15);
        });
    });

    describe(`for the input [[1, 1, 1], [1, 1, 1], [1, 1, 1]]`, () => {
        it(`should return 0`, () => {
            const solution = part1Solver([
                [1, 1, 1],
                [1, 1, 1],
                [1, 1, 1],
            ]);

            assert.strictEqual(solution, 0);
        });
    });

    describe(`for the input [[1, 1, 1], [1, 0, 1], [1, 1, 1]]`, () => {
        it(`should return 1`, () => {
            const solution = part1Solver([
                [1, 1, 1],
                [1, 0, 1],
                [1, 1, 1],
            ]);

            assert.strictEqual(solution, 1);
        });
    });

    describe(`for the input [[3, 4, 5], [9, 0, 9], [5, 4, 3]]`, () => {
        it(`should return 1`, () => {
            const solution = part1Solver([
                [3, 4, 5],
                [9, 0, 9],
                [5, 4, 3],
            ]);

            assert.strictEqual(solution, 1);
        });
    });

    describe(`for the input [[8,8,8], [4,2,4], [8,8,8]]`, () => {
        it(`should return 3`, () => {
            const solution = part1Solver([
                [8, 8, 8],
                [4, 2, 4],
                [8, 8, 8],
            ]);

            assert.strictEqual(solution, 3);
        });
    });

    describe(`for the input [[0,1,1], [1,1,1], [1,1,1]]`, () => {
        it(`should return 1`, () => {
            const solution = part1Solver([
                [0, 1, 1],
                [1, 1, 1],
                [1, 1, 1],
            ]);

            assert.strictEqual(solution, 1);
        });
    });

    describe(`for the input [[0,1,1], [1,0,1], [1,1,1]]`, () => {
        it(`should return 2`, () => {
            const solution = part1Solver([
                [0, 1, 1],
                [1, 0, 1],
                [1, 1, 1],
            ]);

            assert.strictEqual(solution, 2);
        });
    });

    describe(`for the input [[0,1,1], [1,0,1], [1,0,1]]`, () => {
        it(`should return 1`, () => {
            const solution = part1Solver([
                [0, 1, 1],
                [1, 0, 1],
                [1, 0, 1],
            ]);

            assert.strictEqual(solution, 1);
        });
    });

    describe(`for the input [[0,1,0], [1,1,1], [0,1,0]]`, () => {
        it(`should return 4`, () => {
            const solution = part1Solver([
                [0, 1, 0],
                [1, 1, 1],
                [0, 1, 0],
            ]);

            assert.strictEqual(solution, 4);
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
        it(`should return ???`, () => {
            const solution = part2Solver(example);

            assert.strictEqual(solution, "");
        });
    });
});
