
const loadDatabase = function (HomeInventoryDatabase) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(HomeInventoryDatabase)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

let run = loadDatabase("HomeInventoryDatabase");



let makeData = (dataSet) => {


    if (dataSet === "crafts") {
        let array = run.crafts;
        let sec = document.createElement("section");
        console.log(array)
        array.forEach(element => {
            console.log(element)
            let para1 = document.createElement('p');
            let para2 = document.createElement('p');
            let para3 = document.createElement('p');
            para1.textContent = `Name: ${element.name}`
            para2.textContent = `Location ${element.location}`;
            para3.textContent = `Description: ${element.description}`;
            sec.appendChild(para1);
            sec.appendChild(para2);
            sec.appendChild(para3);
            document.querySelector("#myStuff").appendChild(sec)
        }
        );
    }
    else if (dataSet === "furniture") {
        let array = run.furniture;
        let sec = document.createElement("section");
        console.log(array)
        array.forEach(element => {
            console.log(element)
            let para1 = document.createElement('p');
            let para2 = document.createElement('p');
            let para3 = document.createElement('p');
            para1.textContent = `Name: ${element.name}`
            para2.textContent = `Location ${element.location}`;
            para3.textContent = `Description: ${element.description}`;
            sec.appendChild(para1);
            sec.appendChild(para2);
            sec.appendChild(para3);
            document.querySelector("#myStuff").appendChild(sec)
        }
        );
    }
    else if (dataSet === "electronics") {
        let array = run.electronics;
        let sec = document.createElement("section");
        console.log(array)
        array.forEach(element => {
            console.log(element)
            let para1 = document.createElement('p');
            let para2 = document.createElement('p');
            let para3 = document.createElement('p');
            para1.textContent = `Name: ${element.name}`
            para2.textContent = `Location ${element.location}`;
            para3.textContent = `Description: ${element.description}`;
            sec.appendChild(para1);
            sec.appendChild(para2);
            sec.appendChild(para3);
            document.querySelector("#myStuff").appendChild(sec)
        }
        );
    } else {
        for (let obj in run) {
        let array = run[obj];
        let sec = document.createElement("section");
        for (i = 0; i < array.length; i++) {
            
            let para1 = document.createElement('p');
            let para2 = document.createElement('p');
            let para3 = document.createElement('p');

            para1.textContent = `Name: ${array[i].name}`
            para2.textContent = `Location ${array[i].location}`;
            para3.textContent = `Description: ${array[i].description}`;

            sec.appendChild(para1);
            sec.appendChild(para2);
            sec.appendChild(para3);

            document.querySelector("#myStuff").appendChild(sec)
            }

    }
}
}



makeData();

