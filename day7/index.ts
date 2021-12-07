import { readInputsOn } from "../utils"

type CostCalculation= (a: number, b: number) => number

export const daysevenfirst = (costCalculation: CostCalculation = (a: number, b: number) => Math.abs(a - b)): number => {
    const input: number[] = readInputsOn("day7/input.txt", ",").map(x => +x)
    const min = Math.min(...input);
    const max = Math.max(...input);

    const distances = []
    for (let i = min; i <= max; i++) {
        distances.push(input.reduce((prev, x) => prev + costCalculation(x, i), 0))
    }

    return Math.min(...distances)
}

export const daysevensecond = (): number => {
    return daysevenfirst(
        (a = 0, b = 0) => Math.abs(a - b) * (Math.abs(a - b) + 1) / 2
    )
}