import { readInputsOn } from "../utils"

interface BingoTile {
    marked: boolean,
    number: number,
}

export const dayfourfirst = (win: boolean = true): number => {
    let [numbers, ...boards]: any[] = readInputsOn("day4/input.txt", '\n\n')
    let bingoCalculation = 0

    const setup = (): void => {
        numbers = numbers.split(',').map((n: string) => +n)
        boards = boards.map((board: string) =>          
            board.split('\n').map((row: string) =>            
                row
                    .trim()
                    .split(/\s+/)
                    .map((n:string): BingoTile => ({ marked: false, number: +n }))
            )
        )
    }

    const markTileInBoard = (board: BingoTile[][], number: number): void => {
        board.forEach(row => 
            row.forEach((tile: BingoTile) => tile.number === number && (tile.marked = true)),
        );
    }

    const isBingo = (board: BingoTile[][]): boolean => {
        const bingoOnRow = board.some((row) => row.every((tile) => tile.marked))
        const bingoOnColumn = board[0].some((s, i) => board.every(row => row[i].marked))
        return bingoOnRow || bingoOnColumn
    }

    const calculateWinningBoard = (board: BingoTile[][]): number => {
        let sum = 0
        board.forEach(row =>  
            row.forEach(tile => !tile.marked && (sum += tile.number))    
        )
        return sum
    }

    const playBingo = (): void => {
        for (const number of numbers) {
            for (const board of boards) {
                markTileInBoard(board, number)
                if(isBingo(board)) {
                    if(win || boards.length === 1) {
                        bingoCalculation = number * calculateWinningBoard(board)
                        return
                    } else {
                        boards = boards.filter(b => b !== board);
                    }
                }
            }
        }
    }

    setup()
    playBingo()
    
    return bingoCalculation
}

export const dayfoursecond = ():number => {
    return dayfourfirst(false)
}