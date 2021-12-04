import * as fs from "fs";

export const readInputs = (path: string):  string[] => {
    let data = fs.readFileSync(path, "utf8").split("\n")

    return data
}

export const readInputsAsInt = (path: string):  number[] => {
    let data: number[] = fs.readFileSync(path, "utf8").split("\n").map((n: string) => parseInt(n))

    return data
}

export const readInputsOn = (path: string, splitOn: string): string[] => {
    let data = fs.readFileSync(path, "utf8").split(splitOn)

    return data
}