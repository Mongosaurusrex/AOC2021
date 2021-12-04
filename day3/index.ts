import { readInputs } from "../utils"

interface Rates {
    gamma: number,
    epsilon: number,
}

interface EcoRates {
    oxygen: number,
    co2: number,
}

export const daythreefirst = (): number => {
    let input: string[] = readInputs("day3/input.txt")
    let ratesForSubmarine: Rates = {
        gamma: 0,
        epsilon: 0,
    }
    const determineOccurenceResult = (): void => {
        let meanArray: number[] = Array(12).fill(0)
        const binaryArray: number[] = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048].reverse()


        input.forEach((element: string) => {
            for (var i = 0; i < element.length; i++) {
                meanArray[i] += parseInt(element[i], 10)
            }
        });

        meanArray.forEach((value: number, index: number) => {
            if (value > 500) {
                ratesForSubmarine.gamma += binaryArray[index]
            } else {
                ratesForSubmarine.epsilon += binaryArray[index]
            }
        })
    }

    determineOccurenceResult()
    return ratesForSubmarine.epsilon * ratesForSubmarine.gamma
}

export const daythreesecond = (): number => {
    let input: string[] = readInputs("day3/test.txt")
    let ratesForSubmarine: EcoRates = {
        oxygen: 0,
        co2: 0,
    }

    const calculateRowValueOnIndex = (list: any[], index: number): number => {
        let total: number = 0
        list.forEach((element: string) => {
            total += parseInt(element[index], 10)
        });

        return total
    }

    const convertBinaryToBase10 = (binaryString: string): number => {
        const binaryArray: number[] = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048].reverse()
        return binaryString.split("").reduce((accumulator, value, index) => {
            if (value !== "0") {
                accumulator += binaryArray[index]
            }
            return accumulator
        }, 0)
    }

    const determineEcoRates = (): void => {
        let o2List = input
        let co2List = input
        for(let i = 0; i < input[0].length; i++) {
            if(o2List.length !== 1) {
                const currentAmount: number = calculateRowValueOnIndex(o2List, i)
                const other = o2List.length - currentAmount
                if (currentAmount >= other) {
                    o2List = o2List.filter((value: string) => value[i] === "1")
                } else {
                    o2List = o2List.filter((value: string) => value[i] === "0")
                }
            }
        }

        for(let i = 0; i < input[0].length; i++) {
            if(co2List.length !== 1) {
                const currentAmount: number = calculateRowValueOnIndex(co2List, i)
                const other = co2List.length - currentAmount
                if (currentAmount >= other) {
                    co2List = co2List.filter((value: string) => value[i] === "0")
                } else {
                    co2List = co2List.filter((value: string) => value[i] === "1")
                }
            }
        }

        ratesForSubmarine.oxygen = convertBinaryToBase10(o2List[0])
        ratesForSubmarine.co2 = convertBinaryToBase10(co2List[0])

    }

    determineEcoRates()

    return ratesForSubmarine.oxygen * ratesForSubmarine.co2
}