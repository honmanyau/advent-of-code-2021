import * as fs from "fs";
import * as path from "path";

import { green } from "../utilities";

// ============
// == Config ==
// ============
export const DAY_NUM = 5;
export const CHALLENGE_TITLE = "Hydrothermal Venture";

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
export type Input = [Point, Point, Point][];
export type Point = [number, number];
export type Map = { [coords: string]: number };

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
    const input: Input = lines.map((line) => {
        const [x1, y1, x2, y2] = line
            .replace(" -> ", ",")
            .split(",")
            .map((v) => Number(v));
        const diffX = x2 - x1;
        const diffY = y2 - y1;
        const dx = diffX === 0 ? 0 : diffX / Math.abs(diffX);
        const dy = diffY === 0 ? 0 : diffY / Math.abs(diffY);

        return [
            [x1, y1],
            [x2, y2],
            [dx, dy],
        ];
    });

    return input;
}

/**
 * The solver function for part 1 of of the challenge.
 * @param {number[]} input An array that represents the puzzle's input.
 * @returns {number} The solution to Part 1 of the puzzle!
 */
export function part1Solver(
    input: Input,
    options = { includeDiagonals: false }
): number {
    const map: Map = {};
    let numDangerousPoints = 0;

    for (const [[x1, y1], [x2, y2], [dx, dy]] of input) {
        const shouldProcess = options.includeDiagonals || dx === 0 || dy === 0;

        if (shouldProcess) {
            for (
                let x = x1, y = y1;
                !(x === x2 + dx && y === y2 + dy);
                x += dx, y += dy
            ) {
                const hash = `${x},${y}`;

                if (!map[hash]) {
                    map[hash] = 0;
                }

                map[hash] += 1;

                if (map[hash] === 2) {
                    numDangerousPoints += 1;
                }
            }
        }
    }

    return numDangerousPoints;
}

/**
 * The solver function for prt 2 of of the challenge.
 * @param {number[]} input An array that represents the puzzle's input.
 * @returns {number} The solution to Part 2 of the puzzle!
 */
export function part2Solver(input: Input): number {
    return part1Solver(input, { includeDiagonals: true });
}
