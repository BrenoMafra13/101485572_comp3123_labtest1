// Student name: Breno Lopes Mafra
// Student ID: 101485572

function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
        let newArr = [];

        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] === "string") {
                newArr.push(array[i].toLowerCase());
            }
        }

        if (newArr.length > 0) {
            resolve(newArr);
        } else {
            reject("Please enter array with a String");
        }
    });
}

lowerCaseWords(["PIZZA",10, true, 25, false, "Wings"])
.then(res => console.log(res))
.catch(err => console.log(err));
