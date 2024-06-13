/********************************************************************************
*  WEB322 – Assignment 03
********************************************************************************/

const setData = require("../data/setData");
const themeData = require("../data/themeData");

let sets = [];

// Fills set array with objects from setData, while also adding a theme property
function initialize() {
    return new Promise((resolve, reject) => {
        setData.forEach(setElement => {
            // Creates new variable, adds all the data of an object from setData
            // Then creates "theme" property and looks through themeData by matching id to add correct theme
            let setWithTheme = {...setElement, theme: themeData.find(themeElement => themeElement.id == setElement.theme_id).name };
            sets.push(setWithTheme);
            resolve();
        });
    });
}

function getAllSets() {
    return new Promise((resolve, reject) => {
        // Just displays all sets in the set array
        resolve(sets);
    });
}

function getSetByNum(setNum) {
    return new Promise((resolve, reject) => {
        // Use find() to match setNum to set_num property and returns that set if found
        let foundSet = sets.find(s => s.set_num == setNum);

        if (foundSet) {
            resolve(foundSet)
        }
        else {
            reject("Unable to find requested set");
        }
    });
}

function getSetsByTheme(theme) {
    return new Promise((resolve, reject) => {
        // Shows all the sets that match the given theme, regardless of case
        let foundSets = sets.filter(s => s.theme.toUpperCase().includes(theme.toUpperCase()));

        if (foundSets) {
            resolve(foundSets)
        }
        else {
            reject("Unable to find requested sets")
        }
    });
}

function getSetsByNumOfParts(num) {
    return new Promise((resolve, reject) => {
        let numParts = setData.filter(e => (e.num_parts === num));

        if (numParts) {
            resolve(numParts)
        }
        else {
            reject("No set has that amount of parts")
        }
    })
}

// Make exportable to access in other files
module.exports = {initialize, getAllSets, getSetByNum, getSetsByTheme, getSetsByNumOfParts};