import * as fs from "fs";
import * as path from "path";

import { green } from "../utilities";

// ============
// == Config ==
// ============
export const DAY_NUM = 4;
export const CHALLENGE_TITLE = "Giant Squid";

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
export type Bingo = {
    [num: string]: { row: number; col: number };
};
export type Bingos = Bingo[];
export type Input = { draws: string[]; bingos: Bingos };

// ===============
// == Functions ==
// ===============
/**
 * This function processes an example or input file into an input of a suitable
 * format for the solver functions.
 * @param {string} file A challenge file read in as a string.
 * @returns {number[]} An array where each line is an entry of the challenge.
 */
export function processFile(file: string): { draws: string[]; bingos: Bingos } {
    const lines = file.trim().split("\n");
    const draws = lines.shift().split(",");
    const bingos: Bingos = [];

    // Remove empty line after draws.
    lines.shift();

    while (lines.length !== 0) {
        const bingo: Bingo = {};

        for (let row = 0; row < 5; row++) {
            const line = lines.shift().trim().split(/\s+/);

            for (let col = 0; col < 5; col++) {
                const num: string = line[col];

                bingo[num] = { row, col };
            }
        }

        bingos.push(bingo);
        lines.shift();
    }

    return { draws, bingos };
}

/**
 * The solver function for part 1 of of the challenge.
 * @param {number[]} input An array that represents the puzzle's input.
 * @returns {number} The solution to Part 1 of the puzzle!
 */
export function part1Solver(input: Input): number {
    return -1;
}

/**
 * The solver function for prt 2 of of the challenge.
 * @param {number[]} input An array that represents the puzzle's input.
 * @returns {number} The solution to Part 2 of the puzzle!
 */
export function part2Solver(input: Input): number {
    return -1;
}
