import { readInputsOn } from "../utils"

export const daysixfirst = (days: number = 80): number => {
    let fishInitialInfo: number[] = readInputsOn("day6/input.txt", ",").map(x => +x)
    let fishInfo: any = {};

    const setup = () => {
        for(let i = 0; i < fishInitialInfo.length; i++) {
            fishInfo[fishInitialInfo[i]] = (fishInfo[fishInitialInfo[i]] || 0) + 1
        }
    }

    const calculateLanternFishInWater = (): void => {
        for(let i = 0; i < days; i++) {
            let newFish: any = {}
            for(let key in fishInfo) {
                if(key === "0") {
                    newFish[6] = (newFish[6] || 0) + fishInfo[0]
                    newFish[8] = fishInfo[0]
                } else {
                    newFish[+key - 1] = (newFish[+key - 1] || 0) + fishInfo[key]
                }
            }
            fishInfo = newFish
        }
    }

    setup()
    calculateLanternFishInWater()

    return Object.values(fishInfo).reduce((accumulator: number, fishAmount: any) => accumulator + fishAmount ,0)
}

export const daysixsecond = (): number => {
    return daysixfirst(256)
}
