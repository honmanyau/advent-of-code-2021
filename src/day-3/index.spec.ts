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
        it(`should return return 198`, () => {
            const solution = part1Solver(example);

            assert.strictEqual(solution, 198);
        });
    });

    describe(`for the exmaple input if the first line is "10100"`, () => {
        it(`should still return return 198`, () => {
            example[0] = "10100";

            const solution = part1Solver(example);

            assert.strictEqual(solution, 198);
        });
    });

    describe(
        [
            `for the exmaple input if the first line is "00101"`,
            `and the second line is "11111"`,
        ].join(""),
        () => {
            it(`should still return return 184`, () => {
                example[0] = "00101";
                example[1] = "11111";

                const solution = part1Solver(example);

                assert.strictEqual(solution, 184);
            });
        }
    );

    describe(
        [
            `for the exmaple input if the second line is "01110"`,
            `and the third line is "00110"`,
        ].join(""),
        () => {
            it(`should still return return 150`, () => {
                example[1] = "01110";
                example[2] = "00110";

                const solution = part1Solver(example);

                assert.strictEqual(solution, 150);
            });
        }
    );
});

// ============
// == Part 2 ==
// ============
describe(`The solver for Day ${DAY_NUM}: ${CHALLENGE_TITLE}, Part 2`, () => {
    let example: Input;

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
