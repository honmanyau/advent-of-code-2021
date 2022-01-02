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

    describe(`for the input [ "111", "111", "111" ]`, () => {
        it(`should return 0`, () => {
            const solution = part1Solver(["111", "111", "111"]);

            assert.strictEqual(solution, 0);
        });
    });

    describe(`for the input [ "111", "101", "111" ]`, () => {
        it(`should return 1`, () => {
            const solution = part1Solver(["111", "101", "111"]);

            assert.strictEqual(solution, 1);
        });
    });

    describe(`for the input [ "345", "909", "543" ]`, () => {
        it(`should return 1`, () => {
            const solution = part1Solver(["345", "909", "543"]);

            assert.strictEqual(solution, 1);
        });
    });

    describe(`for the input [ "888", "424", "888" ]`, () => {
        it(`should return 3`, () => {
            const solution = part1Solver(["888", "424", "888"]);

            assert.strictEqual(solution, 3);
        });
    });

    describe(`for the input [ "011", "111", "111" ]`, () => {
        it(`should return 1`, () => {
            const solution = part1Solver(["011", "111", "111"]);

            assert.strictEqual(solution, 1);
        });
    });

    describe(`for the input [ "011", "101", "111" ]`, () => {
        it(`should return 2`, () => {
            const solution = part1Solver(["011", "101", "111"]);

            assert.strictEqual(solution, 2);
        });
    });

    describe(`for the input [ "011", "101", "101" ]`, () => {
        it(`should return 1`, () => {
            const solution = part1Solver(["011", "101", "101"]);

            assert.strictEqual(solution, 1);
        });
    });

    describe(`for the input [ "010", "111", "010" ]`, () => {
        it(`should return 4`, () => {
            const solution = part1Solver(["010", "111", "010"]);

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
