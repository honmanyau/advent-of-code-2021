import * as fs from "fs";
import * as path from "path";

import { green } from "../utilities";

// ============
// == Config ==
// ============
export const DAY_NUM = 9;
export const CHALLENGE_TITLE = "Smoke Basin";

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
export function processFile(file: string): number[][] {
    return file
        .trim()
        .split("\n")
        .map((line) => line.split("").map(Number));
}

/**
 * The solver function for part 1 of of the challenge.
 * @param {number[]} input An array that represents the puzzle's input.
 * @returns {number} The solution to Part 1 of the puzzle!
 */
export function part1Solver(input: number[][]): number {
    let riskLevel = 0;

    for (let y = 0; y < input.length; y++) {
        const row = input[y];

        for (let x = 0; x < row.length; x++) {
            const currentHeight = input[y][x];
            const neighbours = [
                [y, x - 1],
                [y, x + 1],
                [y - 1, x],
                [y + 1, x],
            ];
            let isLowPoint = true;

            for (const [adjacentY, adjacentX] of neighbours) {
                const adjacentHeight = input[adjacentY]
                    ? input[adjacentY][adjacentX]
                    : undefined;

                if (
                    adjacentHeight !== undefined &&
                    adjacentHeight <= currentHeight
                ) {
                    isLowPoint = false;

                    break;
                }
            }

            if (isLowPoint) {
                riskLevel += 1 + currentHeight;
            }
        }
    }

    return riskLevel;
}

/**
 * The solver function for prt 2 of of the challenge.
 * @param {number[]} input An array that represents the puzzle's input.
 * @returns {number} The solution to Part 2 of the puzzle!
 */
export function part2Solver(input: number[][]): number {
    return -1;
}
