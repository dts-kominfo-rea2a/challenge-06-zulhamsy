// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = function (callback) {
  const result = [];
  // File 1
  fs.readFile(file1, (err, data) => {
    const dataObj = JSON.parse(data);
    const text = dataObj.message.split(" ");
    if (err) {
      return callback(err, null);
    }
    result.push(text[1]);
  });
  // File 2
  fs.readFile(file2, (err, data) => {
    const dataObj = JSON.parse(data);
    const text = dataObj[0].message.split(" ");
    if (err) {
      return callback(err, null);
    }
    result.push(text[1]);
  });
  // File 3
  fs.readFile(file3, (err, data) => {
    const dataObj = JSON.parse(data);
    const text = dataObj[0].data.message.split(" ");
    if (err) {
      return callback(err, null);
    }
    result.push(text[1]);
  });
  return callback(null, result);
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
