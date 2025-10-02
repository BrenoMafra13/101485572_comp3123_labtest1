// Student name: Breno Lopes Mafra
// Student ID: 101485572

function resolvedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ firstPromisse: "resolved promise after 500ms" })
        }, 500)
    })
}

function rejectedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ secondPromisse: "rejected promise after 500ms" })
        }, 500)
    })
}

resolvedPromise()
.then(result => console.log(result))
.catch(error => console.log(error))

rejectedPromise()
.then(result => console.log(result))
.catch(error => console.log(error))
