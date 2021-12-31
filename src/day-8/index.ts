import * as fs from "fs";
import * as path from "path";

import { green } from "../utilities";

// ============
// == Config ==
// ============
export const DAY_NUM = 8;
export const CHALLENGE_TITLE = "Seven Segment Search";

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
// == Interface ==
// ===============
type SignalPatterns = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
];
type OutputValue = [string, string, string, string];
type InputEntry = [SignalPatterns, OutputValue];
export type Input = InputEntry[];

// ===============
// == Functions ==
// ===============
/**
 * This function processes an example or input file into an input of a suitable
 * format for the solver functions.
 * @param {string} file A challenge file read in as a string.
 * @returns {number[]} An array where each line is an entry of the challenge.
 */
export function processFile(file: string): Input {
    const lines = file.trim().split("\n");
    const input: Input = [];

    for (const line of lines) {
        const entry = line
            .trim()
            .split("|")
            .map((s) => s.trim().split(" ")) as InputEntry;

        input.push(entry);
    }

    return input;
}

/**
 * The solver function for part 1 of of the challenge.
 * @param {number[]} input An array that represents the puzzle's input.
 * @returns {number} The solution to Part 1 of the puzzle!
 */
export function part1Solver(input: Input): number {
    const uniqueSegments: { [key: number]: true } = {
        2: true,
        3: true,
        4: true,
        7: true,
    };

    let uniqueSegmentsCount = 0;

    for (const [_signalPatterns, digits] of input) {
        for (const digit of digits) {
            if (uniqueSegments[digit.length]) {
                uniqueSegmentsCount += 1;
            }
        }
    }

    return uniqueSegmentsCount;
}

/**
 * The solver function for prt 2 of of the challenge.
 * @param {number[]} input An array that represents the puzzle's input.
 * @returns {number} The solution to Part 2 of the puzzle!
 */
export function part2Solver(input: Input): number {
    return -1;
}
