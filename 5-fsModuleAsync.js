/////------------10-05-2025-----------//////////
////----------Saturday-----------------/////////
//jo appde utf-8 na provide kari ae to buffer appe

const { error } = require('console');
const { readFile, writeFile, read } = require('fs');
readFile('./content/first.txt', 'utf-8', (error, result) => {
    if (error) {
        console.log(error);
        return;
    }
    const firstFileData = result;
    readFile('./content/second.txt', 'utf-8', (error, result) => {
        if (error) {
            console.log(error);
            return;
        }
        const secondFileData = result;
        writeFile('./content/resulted.txt',` The resulted data is ${firstFileData},${secondFileData}`, (error, result) => {
            if (error) {
                console.log(error);
                return;
            }
            const writedResult = result;
        })
    })
})
