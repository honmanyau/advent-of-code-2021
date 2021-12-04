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
    partition,
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
        it(`should return 230`, () => {
            const solution = part2Solver(example);

            assert.strictEqual(solution, 230);
        });
    });

    describe(`for the input [ "1001", "0101" ]`, () => {
        it(`should return 45`, () => {
            const solution = part2Solver(["1001", "0101"]);

            assert.strictEqual(solution, 45);
        });
    });

    describe(`for the input [ "1001", "1101", "0101" ]`, () => {
        it(`should return 65`, () => {
            const solution = part2Solver(["1001", "1101", "0101"]);

            assert.strictEqual(solution, 65);
        });
    });

    describe(`for the input [ "1001", "1101", "0101", "0000" ]`, () => {
        it(`should return 0`, () => {
            const solution = part2Solver(["1001", "1101", "0101", "0000"]);

            assert.strictEqual(solution, 0);
        });
    });

    describe(`for the input [ "1001", "1101", "0101", "0011" ]`, () => {
        it(`should return 39`, () => {
            const solution = part2Solver(["1001", "1101", "0101", "0011"]);

            assert.strictEqual(solution, 39);
        });
    });

    describe(`for the input [ "1001", "1101", "0101", "0011", "1111" ]`, () => {
        it(`should return 45`, () => {
            const solution = part2Solver([
                "1001",
                "1101",
                "0101",
                "0011",
                "1111",
            ]);

            assert.strictEqual(solution, 45);
        });
    });
});

// ===============
// == Functions ==
// ===============
describe(`The function partition()`, () => {
    let example: Input;

    beforeEach(() => {
        example = JSON.parse(stringifiedExample);
    });

    describe(`for the input [ "1001", "0101" ] with bitPos = 0`, () => {
        it(`should partition the input correctly`, () => {
            const solution = partition(["1001", "0101"], 0);

            assert.strictEqual(solution.ones.length, 1);
            assert.strictEqual(solution.zeros.length, 1);

            assert.strictEqual(solution.ones[0], "1001");
            assert.strictEqual(solution.zeros[0], "0101");
        });
    });

    describe(`for the input [ "1001", "0101" ] with bitPos = 1`, () => {
        it(`should partition the input correctly`, () => {
            const solution = partition(["1001", "0101"], 1);

            assert.strictEqual(solution.ones.length, 1);
            assert.strictEqual(solution.zeros.length, 1);

            assert.strictEqual(solution.ones[0], "0101");
            assert.strictEqual(solution.zeros[0], "1001");
        });
    });

    describe(`for the input [ "1001", "0101" ] with bitPos = 2`, () => {
        it(`should partition the input correctly`, () => {
            const solution = partition(["1001", "0101"], 2);

            assert.strictEqual(solution.ones.length, 0);
            assert.strictEqual(solution.zeros.length, 2);

            assert.strictEqual(solution.zeros[0], "1001");
            assert.strictEqual(solution.zeros[1], "0101");
        });
    });

    describe(`for the input [ "1001", "0101" ] with bitPos = 3`, () => {
        it(`should partition the input correctly`, () => {
            const solution = partition(["1001", "0101"], 3);

            assert.strictEqual(solution.ones.length, 2);
            assert.strictEqual(solution.zeros.length, 0);

            assert.strictEqual(solution.ones[0], "1001");
            assert.strictEqual(solution.ones[1], "0101");
        });
    });

    describe(`for the input [ "1001", "1010", "0101" ] with bitPos = 0`, () => {
        it(`should partition the input correctly`, () => {
            const solution = partition(["1001", "1010", "0101"], 0);

            assert.strictEqual(solution.ones.length, 2);
            assert.strictEqual(solution.zeros.length, 1);

            assert.strictEqual(solution.ones[0], "1001");
            assert.strictEqual(solution.ones[1], "1010");
            assert.strictEqual(solution.zeros[0], "0101");
        });
    });

    describe(`for the input [ "1001", "1010", "0101" ] with bitPos = 1`, () => {
        it(`should partition the input correctly`, () => {
            const solution = partition(["1001", "1010", "0101"], 1);

            assert.strictEqual(solution.ones.length, 1);
            assert.strictEqual(solution.zeros.length, 2);

            assert.strictEqual(solution.ones[0], "0101");
            assert.strictEqual(solution.zeros[0], "1001");
            assert.strictEqual(solution.zeros[1], "1010");
        });
    });

    describe(`for the input [ "1001", "1010", "0101" ] with bitPos = 2`, () => {
        it(`should partition the input correctly`, () => {
            const solution = partition(["1001", "1010", "0101"], 2);

            assert.strictEqual(solution.ones.length, 1);
            assert.strictEqual(solution.zeros.length, 2);

            assert.strictEqual(solution.ones[0], "1010");
            assert.strictEqual(solution.zeros[0], "1001");
            assert.strictEqual(solution.zeros[1], "0101");
        });
    });

    describe(`for the input [ "1001", "1010", "0101" ] with bitPos = 3`, () => {
        it(`should partition the input correctly`, () => {
            const solution = partition(["1001", "1010", "0101"], 3);

            assert.strictEqual(solution.ones.length, 2);
            assert.strictEqual(solution.zeros.length, 1);

            assert.strictEqual(solution.ones[0], "1001");
            assert.strictEqual(solution.ones[1], "0101");
            assert.strictEqual(solution.zeros[0], "1010");
        });
    });

    describe(`for the example input with bitPos = 0`, () => {
        it(`should partition the input correctly`, () => {
            const solution = partition(example, 0);

            assert.strictEqual(solution.ones.length, 7);
            assert.strictEqual(solution.zeros.length, 5);

            assert.strictEqual(solution.ones[0], "11110");
            assert.strictEqual(solution.ones[1], "10110");
            assert.strictEqual(solution.ones[2], "10111");
            assert.strictEqual(solution.ones[3], "10101");
            assert.strictEqual(solution.ones[4], "11100");
            assert.strictEqual(solution.ones[5], "10000");
            assert.strictEqual(solution.ones[6], "11001");

            assert.strictEqual(solution.zeros[0], "00100");
            assert.strictEqual(solution.zeros[1], "01111");
            assert.strictEqual(solution.zeros[2], "00111");
            assert.strictEqual(solution.zeros[3], "00010");
            assert.strictEqual(solution.zeros[4], "01010");
        });
    });
});
