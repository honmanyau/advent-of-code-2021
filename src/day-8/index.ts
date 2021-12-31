import * as fs from "fs";
import * as path from "path";
import { join } from "path/posix";

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

    for (const [_signalPatterns, digitPatterns] of input) {
        for (const digitPattern of digitPatterns) {
            if (uniqueSegments[digitPattern.length]) {
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
    let sum = 0;

    for (const [signalPatterns, digitPatterns] of input) {
        const patternToDigit: { [key: string]: number } = {};
        const memo: { [key: number]: number } = {};

        // Sort patterns because they are not necessarily in the correct order
        // between signal patterns and digit patterns.
        signalPatterns.forEach((pattern, i) => {
            signalPatterns[i] = sortAlphabetically(pattern);
        });

        digitPatterns.forEach((pattern, i) => {
            digitPatterns[i] = sortAlphabetically(pattern);
        });

        // Find unique segments first.
        for (const signalPattern of signalPatterns) {
            if (signalPattern.length === 2) {
                patternToDigit[signalPattern] = 1;
                memo[1] = parseInt(convertToBinaryString(signalPattern), 2);
            } else if (signalPattern.length === 3) {
                patternToDigit[signalPattern] = 7;
                memo[7] = parseInt(convertToBinaryString(signalPattern), 2);
            } else if (signalPattern.length === 4) {
                patternToDigit[signalPattern] = 4;
                memo[4] = parseInt(convertToBinaryString(signalPattern), 2);
            } else if (signalPattern.length === 7) {
                patternToDigit[signalPattern] = 8;
                memo[8] = parseInt(convertToBinaryString(signalPattern), 2);
            }
        }

        // Evaluate all other cases
        for (const signalPattern of signalPatterns) {
            const num = parseInt(convertToBinaryString(signalPattern), 2);

            if (signalPattern.length === 6) {
                if ((num | memo[4]) === num) {
                    patternToDigit[signalPattern] = 9;
                    memo[9] = num;
                } else if ((num | memo[1]) === num) {
                    patternToDigit[signalPattern] = 0;
                    memo[0] = num;
                } else {
                    patternToDigit[signalPattern] = 6;
                    memo[6] = num;
                }
            } else if (signalPattern.length == 5) {
                if ((num | memo[1]) == num) {
                    patternToDigit[signalPattern] = 3;
                    memo[3] = num;
                } else if ((num | (memo[4] ^ memo[1])) == num) {
                    patternToDigit[signalPattern] = 5;
                    memo[5] = num;
                } else {
                    patternToDigit[signalPattern] = 2;
                    memo[2] = num;
                }
            }
        }

        // Concatentate patterns to digits
        let result = "";

        for (const digitPattern of digitPatterns) {
            result += String(patternToDigit[digitPattern]);
        }

        sum += Number(result);
    }

    return sum;
}

/**
 * This functions sorts a string alphabetically.
 * @param {string} unsorted A (potentially) unsorted string.
 * @returns {string} A string sorted alphabetically.
 */
function sortAlphabetically(unsorted: string): string {
    return unsorted.split("").sort().join("");
}

/**
 * This function converts a pattern into the corresponding binary
 * representation as a string.
 * @param {string} pattern A signal pattern.
 * @returns {string} A binary representation of the given string.
 */
function convertToBinaryString(pattern: string): string {
    return [
        Number(pattern.includes("a")),
        Number(pattern.includes("b")),
        Number(pattern.includes("c")),
        Number(pattern.includes("d")),
        Number(pattern.includes("e")),
        Number(pattern.includes("f")),
        Number(pattern.includes("g")),
    ].join("");
}
