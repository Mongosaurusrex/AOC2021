import { readInputsAsInt } from "../utils"

export function dayonefirst(): number {
    const input: number[] = readInputsAsInt("day1/input.txt");
    const increases: number = input.reduce((acc, current, index) => {
        if (index !== input.length - 1 && current < input[index+1]) {
            acc++
        }
        return acc
    }, 0)
    return increases
}

export const dayonesecond = (): number => {
    const input: number[] = readInputsAsInt("day1/input.txt");
    let increases: number = 0
    for (let i = 1; i+2 < input.length; i++){
        const previous = input[i-1] + input[i] + input[i+1]
        const current = input[i] + input[i+1] + input[i+2]
        if(current > previous) {
            increases++
        }
    }
    return increases
}