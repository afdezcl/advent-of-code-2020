import fs from "fs";

const TREE = '#';

export class Day3 {

    static settingData(dataPath: string): string[][] {
        const numbers = fs.readFileSync(dataPath, "utf8");
        return numbers.toString().split(/\n/).map(i => i.split(''));
    }

    static calculateTrees(right: number, down: number, serializedData: string[][]): number {
        let trees = 0;
        for (let line = 0; line < serializedData.length; line += down) {
            const y = line / down;
            if (serializedData[line][(y * right) % serializedData[0].length] === TREE) {
                trees++;
            }
        }
        return trees;
    }

    static problemOne(dataPath: string): number {
        const serializedData = this.settingData(dataPath);
        return this.calculateTrees(3, 1, serializedData);
    }

    static problemTwo(dataPath: string): number {
        const serializedData = this.settingData(dataPath);
        return this.calculateTrees(1, 1, serializedData) *
            this.calculateTrees(3, 1, serializedData) *
            this.calculateTrees(5, 1, serializedData) *
            this.calculateTrees(7, 1, serializedData) *
            this.calculateTrees(1, 2, serializedData);
    }
}
