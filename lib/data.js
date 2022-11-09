/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
// dependencies
const fs = require('fs');
const path = require('path');

// module scaffolding
const lib = {};
// base directory of data folder
lib.basedir = path.join(__dirname, '/../.data/'); 

// write data to file
lib.create = (dir, file, data, callback) => {
    // open file for writing
    fs.open(`${lib.basedir + dir}/${file}.json`, 'wx', (err, fileDescription) => {
        if (!err && fileDescription) {
            // convert string to data
            const stringData = JSON.stringify(data);
            // write data to file and than close it
            fs.writeFile(fileDescription, stringData, (err2) => {
                if (!err2) {
                    fs.close(fileDescription, (err3) => {
                        if (!err3) {
                            callback(false);
                        } else {
                            callback('Error closing the new file ');
                        }
                    });
                } else {
                    callback('Error writing to new file!');
                }
            });
        } else {
            callback('There was an error , file may already exit !');
        }
    });
};

// data read
lib.read = (dir, file, callback) => {
    fs.readFile(`${lib.basedir + dir}/${file}.json`, 'utf8', (err, data) => {
        callback(err, data);
    });
};

// updating exacting file
lib.update = (dir, file, data, callback) => {
    fs.open(`${lib.basedir + dir}/${file}.json`, 'r+', (err, fileDescription) => {
        if (!err && fileDescription) {
            // convert the data to string 
            const stringData = JSON.stringify(data);
            // truncate the file 
            fs.ftruncate(fileDescription, (err1) => {
                if (!err1) {
                    // write to file and close it
                    fs.writeFile(fileDescription, stringData, (err2) => {
                        if (!err2) {
                            // close to the file 
                            fs.close(fileDescription, (err3) => {
                                if (!err3) {
                                    callback(false);
                                } else {
                                    callback('Error closing file');
                                }
                            });
                        } else {
                            callback('Error writing to file ');
                        }
                    });
                } else {
                    callback('Error truncating file ');
                }
            });
        } else {
            console.log('Error updating File may not exit !');
        }
    });
};

// file delete
lib.delete = (dir, file, callback) => {
    fs.unlink(`${lib.basedir + dir}/${file}.json`, (err) => {
        if (!err) {
            callback(false);
        } else {
            callback('Error deleting file !');
        }
    });
};

// module export 
module.exports = lib;
