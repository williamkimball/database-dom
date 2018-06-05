
const loadDatabase = function (HomeInventoryDatabase) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(HomeInventoryDatabase)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

let run = loadDatabase("HomeInventoryDatabase");

console.log(run);



let makeData = (dataSet) => {
    for (let obj in run) {

        let array = run[obj];

        for (i = 0; i < array.length; i++) {
            let sec = document.createElement("section");
            if (dataSet === "crafts") {
                console.log(array)
                let para1 = document.createElement('p');
                para1.textContent = `Name: ${array[i].name}`
                sec.appendChild(para1);
                document.querySelector("#myStuff").appendChild(sec)
            } else if (dataSet === "furniture") {
                let para2 = document.createElement('p');
                para2.textContent = `Name: ${array[i].name}`
                sec.appendChild(para2);
                document.querySelector("#myStuff").appendChild(sec)
            }
            else if (dataSet === "electronics") {
                let para3 = document.createElement('p');
                para3.textContent = `Name: ${array[i].name}`
                sec.appendChild(para3);
                document.querySelector("#myStuff").appendChild(sec)
            } else {
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

