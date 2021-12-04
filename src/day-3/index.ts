import * as fs from "fs";
import * as path from "path";

import { green } from "../utilities";

// ============
// == Config ==
// ============
export const DAY_NUM = 3;
export const CHALLENGE_TITLE = "Binary Diagnostic";

// ==========
// == Main ==
// ==========
if (process.env.SOLVE && process.env.SOLVE.toLowerCase() === "true") {
    const challengePathname = path.resolve(__dirname, "./input.txt");
    const challengeFile = fs.readFileSync(challengePathname, "utf-8");
    const input = processFile(challengeFile);

    const solutionPart1 = part1Solver(input);
    const solutionPart2 = part2Solver(input);

    console.log(
        [
            `The solutions for Day ${DAY_NUM}: ${CHALLENGE_TITLE} are:`,
            `  * Part 1: ${green(solutionPart1)}`,
            `  * Part 2: ${green(solutionPart2)}`,
        ].join("\n")
    );
}

// ===========
// == Types ==
// ===========
export type Input = string[];
export type Partitioned = {
    more: Input;
    fewer: Input;
};

// ===============
// == Functions ==
// ===============
/**
 * This function processes an example or input file into an input of a suitable
 * format for the solver functions.
 * @param {string} file A challenge file read in as a string.
 * @returns {number[]} An array where each line is an entry of the challenge.
 */
export function processFile(file: string): string[] {
    return file.trim().split("\n");
}

/**
 * The solver function for Part 1 of of the challenge.
 * @param {number[]} input An array that represents the puzzle's input.
 * @returns {number} The solution to Part 1 of the puzzle!
 */
export function part1Solver(input: Input): number {
    const countsOneBit: number[] = input[0].split("").map(() => 0);

    for (const line of input) {
        for (let i = 0; i < line.length; i++) {
            countsOneBit[i] += Number(line[i]);
        }
    }

    const gammaRateBinary = countsOneBit
        .map((v) => (v > input.length / 2 ? 1 : 0))
        .join("");
    const epsilonRateBinary = countsOneBit
        .map((v) => (v > input.length / 2 ? 0 : 1))
        .join("");
    const gammaRate = Number("0b" + gammaRateBinary);
    const epsilonRate = Number("0b" + epsilonRateBinary);

    return gammaRate * epsilonRate;
}

/**
 * The solver function for Part 2 of of the challenge.
 * @param {number[]} input An array that represents the puzzle's input.
 * @returns {number} The solution to Part 2 of the puzzle!
 */
export function part2Solver(input: Input): number {
    return -1;
}

/**
 * For a given bit position `bitPos`, splits the input into two array `more` and
 * `fewer`; where the array `more` contains numbers whose bit is the more
 * frequent bit at that position, and `fewer` contains the rest of the numbers.
 */
export function partition(input: Input, bitPos: number): Partitioned {
    return {
        more: [],
        fewer: [],
    };
}
