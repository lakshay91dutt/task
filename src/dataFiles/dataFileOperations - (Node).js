let fs = require('fs');

let writeData = (jsonData) => {
    console.log("(Inside Write data Function) {jsonData = }", jsonData);
    try {
        fs.writeFileSync('userData.json', JSON.stringify(jsonData));
    } catch (e) {}
};

let readData = () => {

    fs.readFileSync('userData.json', 'utf8', (err, data) => {
        if (!err) {
            console.log("(Inside Read Data Function) {data = }", data);
            return data;
        }else {
            console.log("Error in reading file:: ", err);
            return err;
        }
    });
};


let ProcessRecords = (newData) => {

    console.log('(Inside processRecords Funtion) {newData = }', newData);
    let fileData = readData();
    // let newData = {
    //     empId: "e5000",
    //     firstName: "Manish",
    //     lastName: "jain",
    //     emailId: "manishC@gmail.com",
    // }
    console.log('(Inside processRecords Funtion) {fileData = }', fileData);
    // fileData.push(JSON.stringify(newData));
    // writeData(fileData);
}

// running processRecord locally - testing
// console.log("hey");
// ProcessRecords();

export default ProcessRecords;