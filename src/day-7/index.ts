import * as fs from "fs";
import * as path from "path";

import { green } from "../utilities";

// ============
// == Config ==
// ============
export const DAY_NUM = 7;
export const CHALLENGE_TITLE = 'The Treachery of Whales';

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
    return file.trim().split(',').map(Number);
}

/**
 * The solver function for part 1 of of the challenge.
 * @param {number[]} input An array that represents the puzzle's input.
 * @returns {number} The solution to Part 1 of the puzzle!
 */
export function part1Solver(input: number[]): number {
    const positions = [ ...input ].sort((a, b) => a - b);
    const finalPositionIndex = Math.floor((input.length - 1) / 2);
    const finalPosition = positions[finalPositionIndex];

    let fuelRequired = 0;

    for (const position of positions) {
        fuelRequired += Math.abs(finalPosition - position)
    }

    return fuelRequired;
}

/**
 * The solver function for prt 2 of of the challenge.
 * @param {number[]} input An array that represents the puzzle's input.
 * @returns {number} The solution to Part 2 of the puzzle!
 */
export function part2Solver(input: number[]): number {
    const positions = [ ...input ].sort((a, b) => a - b);
    const sumOfPositions = positions.reduce((acc, v) => acc + v, 0);
    const finalPositionFloor = Math.floor(sumOfPositions / positions.length);
    const finalPositionCeil = Math.ceil(sumOfPositions / positions.length);

    let fuelRequiredFloor = 0;
    let fuelRequiredCeil = 0
    
    for (const position of positions) {
        const distanceFromFloor = Math.abs(finalPositionFloor - position);
        const distanceFromCeil = Math.abs(finalPositionCeil - position);

        fuelRequiredFloor += (1 + distanceFromFloor) * distanceFromFloor / 2;
        fuelRequiredCeil += (1 + distanceFromCeil) * distanceFromCeil / 2;
    }

    return Math.min(fuelRequiredFloor, fuelRequiredCeil);
}