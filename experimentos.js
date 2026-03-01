/*function cleanData(datum){
    const cleanedData = datum.trim().toLowerCase();
    return cleanedData
}

function filterData(data, dataType, datum){
    const copyOfData = [];
    const normalizedDatum = datum.toLowerCase();
    for(const dev of data){
        if(dev[dataType] && Array.isArray(dev[dataType] )){
            const normalizedData = dev[dataType].map(value => value.toLowerCase());
            if (normalizedData.includes(normalizedDatum)){
                copyOfData.push(dev);
            }
        } else if (dev[dataType] && typeof dev[dataType] === "string") {
            const normalizedValue = dev[dataType].toLowerCase();
            if(normalizedValue.includes(normalizedDatum)){
                copyOfData.push(dev);
            };
        }
        
    }
    return copyOfData;
}

const javascriptDevelopers = filterData(data, "habilidades", "javascript");
console.log("JavaScript Developers:", javascriptDevelopers);

const Developer = filterData(data, "nombre", "Maria");
console.log("Javascript Developer:", Developer)
*/
/*
const filterData = (data, datatype, datum) =>
    
    data.filter((dev) =>{

    if(dev[datatype] && Array.isArray(dev[datatype])){
        return dev[datatype].map(value => value.toLowerCase()).includes(datum.toLowerCase());

    } else if(dev[datatype] && typeof dev[datatype] === 'string'){
        return dev[datatype].toLocaleLowerCase().includes(datum.toLowerCase());

    } else if (dev[datatype] && typeof dev[datatype] === 'number'){
        return dev[datatype] === Number(datum)
    }
});
*/


const filterData = (data, datatype, datum) =>
    
    data.filter((dev) =>{

    if( Array.isArray(dev[datatype])){
        return dev[datatype].map(value => value.toLowerCase()).includes(datum.toLowerCase());

    } else if(typeof dev[datatype] === 'string'){
        return dev[datatype].toLocaleLowerCase().includes(datum.toLowerCase());

    } else if (typeof dev[datatype] === 'number'){
        return dev[datatype] === Number(datum)
    }
});
const javascriptDevelopers = filterData(data, "habilidades", "javascript");
console.log("Javascript Developers", javascriptDevelopers);

/*const filterBySkills2 = (data, field, datum) => data.filter(dev => Array.isArray(dev[field]) && dev[field].some(skill => skill.toLowerCase() === datum.toLowerCase()));
console.log("JavaScript Developers 3:", filterBySkills2(data, "habilidades", "javascript"))*/