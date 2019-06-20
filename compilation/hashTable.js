"use strict";
class HashTable {
    constructor(num) {
        this.table = new Array(num);
    }
    // 霍纳算法
    simpleHash(data) {
        const H = 31;
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += H * total + data.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0) {
            total = this.table.length - 1;
        }
        return total;
    }
    put(data) {
        const key = this.simpleHash(data);
        this.table[key] = data;
    }
    get(data) {
        const key = this.simpleHash(data);
        console.log(this.table[key]);
    }
    showDistro() {
        for (let i = 0; i < this.table.length; ++i) {
            if (this.table[i] != undefined) {
                console.log(i + ": " + this.table[i]);
            }
        }
    }
}
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new HashTable(137);
for (var i = 0; i < someNames.length; ++i) {
    hTable.put(someNames[i]);
}
hTable.showDistro();
hTable.get('David');
//# sourceMappingURL=hashTable.js.map