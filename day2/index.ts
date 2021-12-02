import { readInputs } from "../utils"

interface SubmarinePosition {
    depth: number,
    horizontal: number,
}
interface SubmarinePositionV2 extends SubmarinePosition {
    aim: number,
}
interface SubmarineCommand {
    command: string,
    value: number,
}

export const daytwofirst = (): number => {
    let inputs: any = readInputs("day2/input.txt")
    let ourPosition: SubmarinePosition = {
        depth: 0,
        horizontal: 0,
    }

    const setup = (): void => {
        inputs = inputs.map((entry: string) => {
            const splitString = entry.split(' ')
            return {
                command: splitString[0],
                value: parseInt(splitString[1], 10)
            }
        })
    }

    const parseSubmarinePosition = (): void => {
        ourPosition = inputs.reduce((accumulator: SubmarinePosition, currentCommand: SubmarineCommand) => {
            if (currentCommand.command === "down") {
                accumulator.depth += currentCommand.value
            }
            if (currentCommand.command === "up") {
                accumulator.depth -= currentCommand.value
            }
            if (currentCommand.command === "forward") {
                accumulator.horizontal += currentCommand.value
            }

            return accumulator
        }, ourPosition)
    }

    setup()
    parseSubmarinePosition()

    return ourPosition.depth * ourPosition.horizontal
}

export const daytwosecond = (): number => {
    let inputs: any = readInputs("day2/input.txt")
    let ourPosition: SubmarinePositionV2 = {
        depth: 0,
        horizontal: 0,
        aim: 0,
    }

    const setup = (): void => {
        inputs = inputs.map((entry: string) => {
            const splitString = entry.split(' ')
            return {
                command: splitString[0],
                value: parseInt(splitString[1], 10)
            }
        })
    }

    const parseSubmarinePosition = (): void => {
        ourPosition = inputs.reduce((accumulator: SubmarinePositionV2, currentCommand: SubmarineCommand) => {
            if (currentCommand.command === "down") {
                accumulator.aim += currentCommand.value
            }
            if (currentCommand.command === "up") {
                accumulator.aim -= currentCommand.value
            }
            if (currentCommand.command === "forward") {
                accumulator.horizontal += currentCommand.value
                accumulator.depth += (accumulator.aim * currentCommand.value)
            }

            return accumulator
        }, ourPosition)
    }

    setup()
    parseSubmarinePosition()

    return ourPosition.depth * ourPosition.horizontal
}
