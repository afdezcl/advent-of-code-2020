import fs from "fs";

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
        let columnID = 0;
        let rowID = 0;
        let highestID = 0;

        this.settingData((line) => {                    
            rowID = this.calculateRow(line.slice(0,7));
            columnID = this.calculateColumn(line.slice(7, 10));
            if((rowID * 8) + columnID > highestID) {
                highestID = (rowID * 8) + columnID;
            }        
        }, dataPath);
        return highestID;
    }

    static problemTwo(dataPath: string): number {
        let columnID = 0;
        let rowID = 0;        
        const seats: number[] = [];
        let mySeat = 0;

        this.settingData((line) => {                    
            rowID = this.calculateRow(line.slice(0,7));
            columnID = this.calculateColumn(line.slice(7, 10));            
            seats.push((rowID * 8) + columnID);                 
        }, dataPath);
        
        seats.sort((a, b) => a - b);

        for(let i = 0; i < seats.length-1; i++) {
            if(seats[i] + 1 != seats[i+1]) {
                mySeat = seats[i] + 1;
            }
        }
        return mySeat;
    }
}