function negsPerRow(arr: number[][], rowIdx: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (arr.length > rowIdx) {
            arr[rowIdx].filter((e) => {
                return e < 0;
            }).length > 0 ? resolve(`Found Evidence : ${arr[rowIdx]}`) : resolve(`No Evidence Found`);
        } else {
            reject(`Row Index ${rowIdx} must be within 0 and ${arr.length}`);
        }
    });
}

const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

const rowNegPromises: Promise<string>[] = [];

for (let x = 0; x < array2D_3.length; x++) {
    rowNegPromises.push(negsPerRow(array2D_3, x));
}

Promise.all(rowNegPromises)
    .then((rowNegs) => {
        let negs = '';
        console.log('Computing negs of all rows ... ');
        rowNegs.forEach(rowNegs => {
            negs += "\n" + rowNegs;
        });
        console.log(`Negs = ${negs}`);
    })
    .catch((error) => console.log(`Error Msg: ${error}`));

console.log(`Computing sum of 2D array ... `);