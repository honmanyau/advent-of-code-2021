import * as fs from "fs";
import * as path from "path";

import { green } from "../utilities";

// ============
// == Config ==
// ============
export const DAY_NUM = 10;
export const CHALLENGE_TITLE = "Syntax Scoring";
export const OPEN_COMPLEMENTS = {
    "(": ")",
    "[": "]",
    "{": "}",
    "<": ">",
};
export const CLOSE_COMPLEMENTS = {
    ")": "(",
    "]": "[",
    "}": "{",
    ">": "<",
};
export const SCORES = {
    ")": 3,
    "]": 57,
    "}": 1197,
    ">": 25137,
};

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
type OpenCharacter = "(" | "[" | "{" | "<";
type CloseCharacter = ")" | "]" | "}" | ">";

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
 * The solver function for part 1 of of the challenge.
 * @param {number[]} input An array that represents the puzzle's input.
 * @returns {number} The solution to Part 1 of the puzzle!
 */
export function part1Solver(input: string[]): number {
    let score = 0;

    for (const line of input) {
        const corruptionCheckResult = checkForCorruption(line);

        if (corruptionCheckResult !== null) {
            score += SCORES[corruptionCheckResult as CloseCharacter];
        }
    }

    return score;
}

/**
 * The solver function for prt 2 of of the challenge.
 * @param {number[]} input An array that represents the puzzle's input.
 * @returns {number} The solution to Part 2 of the puzzle!
 */
export function part2Solver(input: string[]): number {
    return -1;
}

/**
 * This function checks whether or not a line is corrupted.
 * @param {string} line The line to be checked.
 * @returns {string | null}  The first illegal character or otherwise null.
 */
export function checkForCorruption(line: string): string | null {
    const stack: OpenCharacter[] = [];

    for (const character of line) {
        const complement = OPEN_COMPLEMENTS[character as OpenCharacter];

        if (complement !== undefined) {
            stack.push(character as OpenCharacter);
        } else {
            const topOfStack = stack.pop();
            const expectedComplement = OPEN_COMPLEMENTS[topOfStack];

            if (character !== expectedComplement) {
                return character;
            }
        }
    }

    return null;
}

/**
 * This function checks whether or not a line is incomplete.
 * @param {string} line The line to be checked.
 * @returns {string | null}  The first illegal character or otherwise null.
 */
export function checkForIncompletion(line: string): string | null {
    return null;
}
