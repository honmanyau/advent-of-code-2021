import * as fs from "fs";
import * as path from "path";
import { Input } from "../day-3";

import { green } from "../utilities";

// ============
// == Config ==
// ============
export const DAY_NUM = 6;
export const CHALLENGE_TITLE = "Lanternfish";

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

// ===============
// == Functions ==
// ===============
/**
 * This function processes an example or input file into an input of a suitable
 * format for the solver functions.
 * @param {string} file A challenge file read in as a string.
 * @returns {number[]} An array where each line is an entry of the challenge.
 */
export function processFile(file: string): number[] {
    const input = Array.from({ length: 9 }).map((_v) => 0);

    file.trim()
        .split(",")
        .forEach((v) => {
            const day = Number(v);

            input[day] += 1;
        });

    return input;
}

/**
 * The solver function for part 1 of of the challenge.
 * @param {number[]} input An array that represents the puzzle's input.
 * @returns {number} The solution to Part 1 of the puzzle!
 */
export function part1Solver(input: number[], iterations = 80): number {
    for (let i = 0; i < iterations; i++) {
        const nextNumZeroDayFish = input[0];

        for (let day = 0; day < 8; day++) {
            input[day] = input[day + 1];
        }

        input[6] += nextNumZeroDayFish;
        input[8] = nextNumZeroDayFish;
    }

    const numFish = input.reduce((accumulator, v) => accumulator + v, 0);

    return numFish;
}

/**
 * The solver function for prt 2 of of the challenge.
 * @param {number[]} input An array that represents the puzzle's input.
 * @returns {number} The solution to Part 2 of the puzzle!
 */
export function part2Solver(input: number[]): number {
    return -1;
}
