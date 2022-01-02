import "mocha";
import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import {
    Input,
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
    let example: Input;

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
            example.push([
                [0, 0],
                [0, 3],
                [0, 1],
            ]);

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
            it(`should return 9`, () => {
                example.push([
                    [0, 0],
                    [0, 3],
                    [0, 1],
                ]);
                example.push([
                    [0, 0],
                    [0, 4],
                    [0, 1],
                ]);

                const solution = part1Solver(example);

                assert.strictEqual(solution, 9);
            });
        }
    );

    describe(`for the exmaple input with an extra line '1,3 -> 1,5'`, () => {
        it(`should return 6`, () => {
            example.push([
                [1, 3],
                [1, 5],
                [0, 1],
            ]);

            const solution = part1Solver(example);

            assert.strictEqual(solution, 6);
        });
    });

    describe(`for the exmaple input with an extra line '0,4 -> 2,4'`, () => {
        it(`should return 7`, () => {
            example.push([
                [0, 4],
                [2, 4],
                [1, 0],
            ]);

            const solution = part1Solver(example);

            assert.strictEqual(solution, 7);
        });
    });

    describe(`for the exmaple input with an extra line '0,4 -> 3,4'`, () => {
        it(`should return 7`, () => {
            example.push([
                [0, 4],
                [3, 4],
                [1, 0],
            ]);

            const solution = part1Solver(example);

            assert.strictEqual(solution, 7);
        });
    });
});

// ============
// == Part 2 ==
// ============
describe(`The solver for Day ${DAY_NUM}: ${CHALLENGE_TITLE}, Part 2`, () => {
    let example: any;

    beforeEach(() => {
        example = JSON.parse(stringifiedExample);
    });

    describe(`for the exmaple input`, () => {
        it(`should return 12`, () => {
            const solution = part2Solver(example);

            assert.strictEqual(solution, 12);
        });
    });

    describe(`for the exmaple input with an extra line '0,1 -> 1,2'`, () => {
        it(`should return 12`, () => {
            example.push([
                [0, 1],
                [1, 2],
                [1, 1],
            ]);

            const solution = part2Solver(example);

            assert.strictEqual(solution, 12);
        });
    });

    describe(`for the exmaple input with an extra line '0,0 -> 1,1'`, () => {
        it(`should return 14`, () => {
            example.push([
                [0, 0],
                [1, 1],
                [1, 1],
            ]);

            const solution = part2Solver(example);

            assert.strictEqual(solution, 14);
        });
    });

    describe(`for the exmaple input with an extra line '9,4 -> 6,7'`, () => {
        it(`should return 13`, () => {
            example.push([
                [9, 4],
                [6, 7],
                [-1, 1],
            ]);

            const solution = part2Solver(example);

            assert.strictEqual(solution, 13);
        });
    });

    describe(`for the exmaple input with an extra line '8,4 -> 5,7'`, () => {
        it(`should return 14`, () => {
            example.push([
                [8, 4],
                [5, 7],
                [-1, 1],
            ]);

            const solution = part2Solver(example);

            assert.strictEqual(solution, 14);
        });
    });
});
