import { readInputsOn } from "../utils"

interface PipeCoordinates {
    from: number[],
    to: number[],
}

export const dayfivefirst = (diagonal: boolean = false): number => {
    let input: PipeCoordinates[] = []
    const pipeMap: any = {}

    const setup = (): void => {
        input = readInputsOn("day5/input.txt", "\n").map((line: string) => {
            const [from, to] = line.split(" -> ").map((x: string) => x.split(",").map(x => +x))
            return {from, to}
        })
    }

    const direction = (n1: number, n2: number): number => n1 === n2 ? 0 : n1 < n2 ? 1 : -1

    const markCoordinate = (x: number, y: number): void => {
        pipeMap[`${x},${y}`] = (pipeMap[`${x},${y}`] || 0) + 1
    }

    const drawPipeMap = (): void => {
        input.forEach((coordinate) => {
            let [x1, y1] = coordinate.from
            let [x2, y2] = coordinate.to
            const xDirection = direction(x1, x2)
            const yDirection = direction(y1, y2)
            
            if (diagonal || xDirection === 0 || yDirection === 0) {
                while(x1 !== x2 || y1 !== y2) {
                    markCoordinate(x1, y1)
                    x1 += xDirection
                    y1 += yDirection
                }
                markCoordinate(x2, y2)
            }
        })
    }

    setup()
    drawPipeMap()

    return Object.values(pipeMap).filter((x: any) => x > 1).length
}

export const dayfivesecond = () => {
    return dayfivefirst(true)
}