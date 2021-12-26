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
        it(`should return 5 after 1 day`, () => {
            const solution = part1Solver(example, 1);

            assert.strictEqual(solution, 5);
        });
    });

    describe(`for the exmaple input`, () => {
        it(`should return 6 after 2 days`, () => {
            const solution = part1Solver(example, 2);

            assert.strictEqual(solution, 6);
        });
    });

    describe(`for the exmaple input`, () => {
        it(`should return 7 after 3 days`, () => {
            const solution = part1Solver(example, 3);

            assert.strictEqual(solution, 7);
        });
    });

    describe(`for the exmaple input`, () => {
        it(`should return 10 after 5 days`, () => {
            const solution = part1Solver(example, 5);

            assert.strictEqual(solution, 10);
        });
    });

    describe(`for the exmaple input`, () => {
        it(`should return 12 after 10 days`, () => {
            const solution = part1Solver(example, 10);

            assert.strictEqual(solution, 12);
        });
    });

    describe(`for the exmaple input`, () => {
        it(`should return 20 after 15 days`, () => {
            const solution = part1Solver(example, 15);

            assert.strictEqual(solution, 20);
        });
    });

    describe(`for the exmaple input`, () => {
        it(`should return 26 after 18 days`, () => {
            const solution = part1Solver(example, 18);

            assert.strictEqual(solution, 26);
        });
    });

    describe(`for the exmaple input`, () => {
        it(`should return 5934 after 80 days`, () => {
            const solution = part1Solver(example);

            assert.strictEqual(solution, 5934);
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
        it(`should return 26984457539`, () => {
            const solution = part2Solver(example);

            assert.strictEqual(solution, 26984457539);
        });
    });
});
