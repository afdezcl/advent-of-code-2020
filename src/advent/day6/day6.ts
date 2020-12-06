import fs from "fs";

export class Day6 {

    static settingData(callback: (l: string) => void, dataPath: string): void {
        const lines = fs.readFileSync(dataPath, "utf8");
        lines.toString().split(/\n/).join().split(',,').forEach(line => {
            callback(line);
        });
    }

    static problemOne(dataPath: string): number {
        let sum = 0;
        let differentCharacters: string;
        this.settingData((line: string) => {
            let group = line.replace(/,/g, '');        ;
            sum += group.replace(/(.)(?=.*\1)/g, "").length;            
        }, dataPath);
        return sum;
    }

    static problemTwo(dataPath: string) {
        
    }
}
