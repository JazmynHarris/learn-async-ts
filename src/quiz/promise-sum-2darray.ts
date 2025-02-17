function sumOfARow(arr: number[][], rowIDx: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (arr.length > rowIDx) {
                let sum = 0;
                for (let i = 0; i < arr[rowIDx].length; i++) {
                    sum += arr[rowIDx][i];
                }
                console.log(`resolving sum ... ${rowIDx}`);
                resolve(sum);
            }
            else {
                reject(`Row Index ${rowIDx} must be within 0 and ${arr.length}`);
            }
        })
    })
}

const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const rowSumPromises: Promise<number>[] = [];

for (let x = 0; x < array2D_1.length; x++) {
    rowSumPromises.push(sumOfARow(array2D_1, x));
}

Promise.all(rowSumPromises)
    .then((rowSums) => {
        let sum = 0;
        console.log('Computing sum of all rows ... ');
        rowSums.forEach(rowSum => {
            sum += rowSum;
        });
        console.log(`Sum = ${sum}`);
    })
    .catch((error) => console.log(`Error Msg: ${error}`));

console.log(`Computing sum of 2D array ... `);