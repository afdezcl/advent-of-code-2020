import fs from "fs";

//const rows = Array.from(Array(128).keys());
const colums = Array.from(Array(8).keys());


export class Day5 {

    static settingData(callback: (l: string) => void, dataPath: string): void {
        const lines = fs.readFileSync(dataPath, "utf8");
        lines.toString().split(/\n/).forEach(line => {
            callback(line);
        });
    }

    static calculateRow(codedRow: string): number{
        let itemsRow = Array.from(Array(128).keys());
        codedRow.split('').map(word => {
            if(word === 'F') {
                itemsRow = itemsRow.slice(0, itemsRow.length / 2);                
            } else if(word === 'B') {
                itemsRow = itemsRow.slice(itemsRow.length / 2, itemsRow.length);
            }            
        });

        return itemsRow[0];
    }

    static calculateColumn(codedColum: string): number{
        let itemsColumn = Array.from(Array(8).keys());
        codedColum.split('').map(word => {
            if(word === 'L') {
                itemsColumn = itemsColumn.slice(0, itemsColumn.length / 2);                
            } else if(word === 'R') {
                itemsColumn = itemsColumn.slice(itemsColumn.length / 2, itemsColumn.length);
            }            
        });

        return itemsColumn[0];
    }

    static problemOne(dataPath: string): number {        
        let codedRow: string;
        let codedColumn: string;
        let columnID = 0;
        let rowID = 0;
        let highestID = 0;

        this.settingData((line) => {            
            codedRow = line.slice(0,7);
            codedColumn = line.slice(7, 10);            
            rowID = this.calculateRow(codedRow);
            columnID = this.calculateColumn(codedColumn);
            if((rowID * 8) + columnID > highestID) {
                highestID = (rowID * 8) + columnID;
            }        
        }, dataPath);
        return highestID ;
    }

    static problemTwo(dataPath: string) {

    }
}