import { readInputs } from "../utils"
import { getNumberFromString } from "./ugly"

export const dayeightfirst = (): number => {
    const input: string[][] = readInputs("day8/input.txt").map((x) => x.split(" | ")[1].split(" "))

    return input
        .map(x => x.filter(x => x.length !== 5 && x.length !== 6))
        .map(x => x.length)
        .reduce((a, b) => a + b, 0)
}

export const dayeightsecond = (): number => {
    const input: string[][][] = readInputs("day8/input.txt").map(x => x.split(' | ').map(x => x.split(' ')));

    return input.reduce((prev, line) => getNumberFromString(line) + prev, 0)

}