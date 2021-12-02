import "mocha";
import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import {
    InputFile,
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
    let example: InputFile;

    beforeEach(() => {
        example = JSON.parse(stringifiedExample);
    });

    describe(`for the exmaple input`, () => {
        it(`should return 150`, () => {
            const solution = part1Solver(example);

            assert.strictEqual(solution, 150);
        });
    });

    describe(`for the exmaple input with the last entry, "forward 2", removed`, () => {
        it(`should return 130`, () => {
            example.pop();

            const solution = part1Solver(example);

            assert.strictEqual(solution, 130);
        });
    });

    describe(`for the exmaple input with the first entry, "forward 5", removed`, () => {
        it(`should return 100`, () => {
            example.shift();

            const solution = part1Solver(example);

            assert.strictEqual(solution, 100);
        });
    });

    describe(`for the exmaple input with the second entry changed to "down 0"`, () => {
        it(`should return 75`, () => {
            example[1][1] = 0;

            const solution = part1Solver(example);

            assert.strictEqual(solution, 75);
        });
    });

    describe(`for the exmaple input with the fourth changed to "up 5`, () => {
        it(`should return 120`, () => {
            example[3][1] = 5;

            const solution = part1Solver(example);

            assert.strictEqual(solution, 120);
        });
    });
});

// ============
// == Part 2 ==
// ============
describe(`The solver for Day ${DAY_NUM}: ${CHALLENGE_TITLE}, Part 2`, () => {
    let example: InputFile;

    beforeEach(() => {
        example = JSON.parse(stringifiedExample);
    });

    describe(``, () => {
        it(``, () => {
            assert.strictEqual(true, false);
        });
    });
});
