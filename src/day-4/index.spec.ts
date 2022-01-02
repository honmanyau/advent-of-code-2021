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
        it(`should return 4512`, () => {
            const solution = part1Solver(example);

            assert.strictEqual(solution, 4512);
        });
    });

    describe(`for the exmaple input with 16 as the twelfth draw`, () => {
        it(`should return 2736`, () => {
            [example.draws[11], example.draws[13]] = [
                example.draws[13],
                example.draws[11],
            ];
            const solution = part1Solver(example);

            assert.strictEqual(solution, 2736);
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
        it(`should return 1924`, () => {
            const solution = part2Solver(example);

            assert.strictEqual(solution, 1924);
        });
    });
});
