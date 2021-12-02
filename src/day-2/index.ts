import * as fs from "fs";
import * as path from "path";

import { green } from "../utilities";

// ============
// == Config ==
// ============
export const DAY_NUM = 2;
export const CHALLENGE_TITLE = "Dive!";

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
export type Direction = "down" | "forward" | "up";
export type InputLine = [Direction, number];
export type InputFile = InputLine[];

// ===============
// == Functions ==
// ===============
/**
 * This function processes an example or input file into an input of a suitable
 * format for the solver functions.
 * @param {string} file A challenge file read in as a string.
 * @returns {number[]} An array where each line is an entry of the challenge.
 */
export function processFile(file: string): InputLine[] {
    const processLine = (line: string): InputLine => {
        const entries = line.split(" ");

        return [entries[0] as Direction, Number(entries[1])];
    };

    return file.trim().split("\n").map(processLine);
}

/**
 * The solver function for Part 1 of of the challenge.
 * @param {number[]} input An array that represents the puzzle's input.
 * @returns {number} The solution to Part 1 of the puzzle!
 */
export function part1Solver(input: InputFile): number {
    let x = 0;
    let y = 0;

    const moves = {
        forward: (d: number) => {
            x += d;
        },
        up: (d: number) => {
            y -= d;
        },
        down: (d: number) => {
            y += d;
        },
    };

    for (const line of input) {
        const [direction, distance] = line;
        const move = moves[direction as Direction];

        move(distance);
    }

    return x * y;
}

/**
 * The solver function for Part 2 of of the challenge.
 * @param {number[]} input An array that represents the puzzle's input.
 * @returns {number} The solution to Part 2 of the puzzle!
 */
export function part2Solver(input: InputFile): number {
    return null;
}
