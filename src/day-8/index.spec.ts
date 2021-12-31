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
    let example: any; // Refer to Day-2's solution for a typed example.

    beforeEach(() => {
        example = JSON.parse(stringifiedExample);
    });

    describe(`for the exmaple input`, () => {
        it(`should return 26`, () => {
            const solution = part1Solver(example);

            assert.strictEqual(solution, 26);
        });
    });

    describe(`for the first entry of the exmaple input`, () => {
        it(`should return 2`, () => {
            const solution = part1Solver(example.slice(0, 1));

            assert.strictEqual(solution, 2);
        });
    });

    describe(`for the first 2 entries of the exmaple input`, () => {
        it(`should return 5`, () => {
            const solution = part1Solver(example.slice(0, 2));

            assert.strictEqual(solution, 5);
        });
    });

    describe(`for the first 3 entries of the exmaple input`, () => {
        it(`should return 8`, () => {
            const solution = part1Solver(example.slice(0, 3));

            assert.strictEqual(solution, 8);
        });
    });

    describe(`for the first 4 entries of the exmaple input`, () => {
        it(`should return 9`, () => {
            const solution = part1Solver(example.slice(0, 4));

            assert.strictEqual(solution, 9);
        });
    });

    describe(
        [
            `for the input be "cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb`,
            ` fabcd edb | cefdb cefdb cefbgd cefbgd"`,
        ].join(""),
        () => {
            it(`should return 0`, () => {
                const solution = part1Solver([
                    [
                        [
                            "be",
                            "cfbegad",
                            "cbdgef",
                            "fgaecd",
                            "cgeb",
                            "fdcge",
                            "agebfd",
                            "fecdb",
                            "fabcd",
                            "edb",
                        ],
                        ["cefdb", "cefdb", "cefbgd", "cefbgd"],
                    ],
                ]);

                assert.strictEqual(solution, 0);
            });
        }
    );
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
