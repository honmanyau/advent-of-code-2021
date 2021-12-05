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
        it(`should return 5`, () => {
            const solution = part1Solver(example);

            assert.strictEqual(solution, 5);
        });
    });

    describe(`for the exmaple input with an extra line '0,0 -> 0,3'`, () => {
        it(`should return 5`, () => {
            const solution = part1Solver(example);

            assert.strictEqual(solution, 5);
        });
    });

    describe(
        [
            `for the exmaple input with two extra line '0,0 -> 0,3'`,
            ` and '0,0 -> 0,4'`,
        ].join(""),
        () => {
            it(`should return 8`, () => {
                const solution = part1Solver(example);

                assert.strictEqual(solution, 8);
            });
        }
    );

    describe(`for the exmaple input with an extra line '1,3 -> 1,5'`, () => {
        it(`should return 6`, () => {
            const solution = part1Solver(example);

            assert.strictEqual(solution, 6);
        });
    });

    describe(`for the exmaple input with an extra line '0,4 -> 2,4'`, () => {
        it(`should return 7`, () => {
            const solution = part1Solver(example);

            assert.strictEqual(solution, 7);
        });
    });

    describe(`for the exmaple input with an extra line '0,4 -> 3,4'`, () => {
        it(`should return 7`, () => {
            const solution = part1Solver(example);

            assert.strictEqual(solution, 7);
        });
    });

    describe(`for the exmaple input with an extra line '1,3 -> 3,5'`, () => {
        it(`should return 6`, () => {
            const solution = part1Solver(example);

            assert.strictEqual(solution, 6);
        });
    });

    describe(`for the exmaple input with an extra line '2,3 -> 4,5'`, () => {
        it(`should return 5`, () => {
            const solution = part1Solver(example);

            assert.strictEqual(solution, 5);
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
