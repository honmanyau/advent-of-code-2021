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
    checkForCorruption,
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
        it(`should return ???`, () => {
            const solution = part1Solver(example);

            assert.strictEqual(solution, "");
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
        it(`should return ???`, () => {
            const solution = part2Solver(example);

            assert.strictEqual(solution, "");
        });
    });
});

// ===============
// == Functions ==
// ===============
describe(`The function checkForCorruption()`, () => {
    const validLines = [
        "()",
        "[]",
        "{}",
        "<>",
        "([])",
        "{()()()}",
        "<([{}])>,",
        "[<>({}){}[([])<>]]",
        "(((((((((())))))))))",
    ];

    for (const line of validLines) {
        describe(`for the input "${line}"`, () => {
            it(`should not be considered corrupted or incomplete`, () => {
                const solution = checkForCorruption(line);

                assert.strictEqual(solution, null);
            });
        });
    }

    const corruptedLines = [
        ["(]", "]"],
        ["{()>", ">"],
        ["{()()()>", ">"],
        ["((((())))}", "}"],
        ["<([]){()}[{}])", ")"],
    ];

    for (const [line, firstIllegalChar] of corruptedLines) {
        describe(`for the input "${line}"`, () => {
            it(`should not be considered corrupted or incomplete`, () => {
                const solution = checkForCorruption(line);

                assert.strictEqual(solution, firstIllegalChar);
            });
        });
    }
});
