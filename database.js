
const loadDatabase = function (HomeInventoryDatabase) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(HomeInventoryDatabase)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

let run = loadDatabase("HomeInventoryDatabase");



let makeData = (dataSet) => {
    const fragment = document.createDocumentFragment();
    const mkPara = () => {
        return document.createElement('p');
    }
    const mkSec = () => {
        return document.createElement("section")
    }

    if (dataSet === "crafts") {
        let array = run.crafts;

        array.forEach(element => {
            let para1 = mkPara();
            let para2 = mkPara();
            let para3 = mkPara();
            let sec = mkSec();

            para1.textContent = `Name: ${element.name}`
            para2.textContent = `Location ${element.location}`;
            para3.textContent = `Description: ${element.description}`;
            sec.appendChild(para1);
            sec.appendChild(para2);
            sec.appendChild(para3);
            fragment.appendChild(sec)
        }
        );
    }
    else if (dataSet === "furniture") {
        let array = run.furniture;
        
        array.forEach(element => {
            let sec = mkSec();
            let para1 = mkPara();
            let para2 = mkPara();
            let para3 = mkPara();
            para1.textContent = `Name: ${element.name}`
            para2.textContent = `Location ${element.location}`;
            para3.textContent = `Description: ${element.description}`;
            sec.appendChild(para1);
            sec.appendChild(para2);
            sec.appendChild(para3);
            fragment.appendChild(sec)
        }
        );
    }
    else if (dataSet === "electronics") {
        let array = run.electronics;
        
        array.forEach(element => {
            let sec = mkSec();
            let para1 = mkPara();
            let para2 = mkPara();
            let para3 = mkPara();
            para1.textContent = `Name: ${element.name}`
            para2.textContent = `Location ${element.location}`;
            para3.textContent = `Description: ${element.description}`;
            sec.appendChild(para1);
            sec.appendChild(para2);
            sec.appendChild(para3);
            fragment.appendChild(sec)
        }
        );
    } else {
        for (let obj in run) {
            let array = run[obj];
            
            for (i = 0; i < array.length; i++) {
                let sec = mkSec();
                let para1 = mkPara();
                let para2 = mkPara();
                let para3 = mkPara();

                para1.textContent = `Name: ${array[i].name}`
                para2.textContent = `Location ${array[i].location}`;
                para3.textContent = `Description: ${array[i].description}`;

                sec.appendChild(para1);
                sec.appendChild(para2);
                sec.appendChild(para3);

                fragment.appendChild(sec)
            }

        }
    } document.querySelector('#myStuff').appendChild(fragment)
}



makeData();

