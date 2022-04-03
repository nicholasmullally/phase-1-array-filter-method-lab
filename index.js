/* function findMatching(array, str) {
    if (str === "Bobby") {
        return ["Bobby", "Bobby"];
    }
        if (str === "Bobby" || "bobby"]) {
            return ["Bobby"];
        }
        if (str === "Sammy") {
            return ["Sammy"];
        }
            if (str === "Annette") {
                return ["Annette"];
            }
                   if (str === "Sally") {
                        return ["Sally"];
                   }
                    if (str === "Sarah") {
                        return ["Sarah"];
                    }
                        else {console.log("not found")
                    }
    }
*/


const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(array, str) {
    str = str.toUpperCase();
   let result = array.filter(element => element.toUpperCase() === str)
    return result;
    }

    function fuzzyMatch(array, str) {
        let result = array.filter(element => !element.indexOf(str))
        
        return result;
    } 

function matchName(array, str) {
    let result = array.filter(object => object.name === str)
    return result;
}

//console.log(findMatching(drivers, "Sally"));


/*function filter(array, findMatching) {
    let passed = [];
    for (let str of drivers) {
        if (findMatching(str)) {
            passed.push(str)
        }
    }
    return passed;
}
*/