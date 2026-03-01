const carManagement = [
    {
        licensePlate: "1234-BTS",
        brand: "KIA",
        mileage: 3000,
        year: 2020,
        owner: {
            name: "Paloma Hernandez",
            phone: "+52 55 12 379 851"
        },
        safety: {
            hasV16Beacon: true,
            v16Approved: true,
            lastITV: "2026-02-20"
        },
        tires: {
            frontLeft: 2.2,
            frontRight: 1.7,
            rearLeft: 1.9,
            rearRight: 2.0
        },
        visits: [
            { date: "2024-06-20", service: "Cambio de aceite", cost: 80, description: "Aceite 5W30 + filtro" },
            { date: "2026-02-20", service: "ITV", cost: 45, description: "ITV pasada con éxito" }
    ]
    },
    {
        licensePlate: "3412-HVI",
        brand: "Ford",
        mileage: 100000,
        year: 2016,
        owner: {
            name: "Carlos Ramirez",
            phone: "+52 55 15 456 158"
        },
        safety: {
            hasV16Beacon: true,
            v16Approved: true,
            lastITV: "2025-10-20"
        },
        tires: {
            frontLeft: 2.0,
            frontRight: 2.3,
            rearLeft: 2.1,
            rearRight: 2.0
        },
        visits: [
            { date: "2025-10-20", service: "ITV", cost: 45, description: "ITV pasada con éxito" },
            { date: "2026-02-26", service: "Alineacion y Balanceo", cost: 50, description: "Balanceo + calibracion"}
        ]
    },
    {
        licensePlate: "7821-KLP",
        brand: "Toyota",
        mileage: 85600,
        year: 2022,
        owner:{
            name: "Maria Lopez",
            phone: "+52 55 82 334 901"
        },
        safety: {
            hasV16Beacon: false,
            v16Approved: false,
            lastITV: "2024-11-12"
        },
        tires: {
            frontLeft: 2.2,
            frontRight: 2.2,
            rearLeft: 1.8,
            rearRight: 2.1
        },
        visits: [
            { date: "2024-11-12", service: "ITV", cost: 45, description: "ITV pasada con éxito" },
            { date: "2025-06-03", service: "Cambio de Aceite", cost: 80, description: "Aceite 5W30 + filtro"}
        ]
    },
    {
        licensePlate: "5590-ZMX",
        brand: "Nissan",
        mileage: 120430,
        year: 2019,
        owner: {
            name: "Jorge Martínez",
            phone: "+52 55 73 998 220"
        },
        safety: {
            hasV16Beacon: true,
            v16Approved: true,
            lastITV: "2025-05-18"
        },
        tires: {
            frontLeft: 2.0,
            frontRight: 2.1,
            rearLeft: 2.0,
            rearRight: 2.0
        },
        visits: [
            { date: "2025-05-18", service: "ITV", cost: 45, description: "ITV pasada con observaciones leves" },
            { date: "2025-12-01", service: "Cambio de frenos", cost: 140, description: "Pastillas delanteras nuevas" }
        ]
    },
    {
        licensePlate: "1147-TRS",
        brand: "Chevrolet",
        mileage: 64210,
        year: 2023,
        owner: {
            name: "Ana Torres",
            phone: "+52 55 64 221 778"
        },
        safety: {
            hasV16Beacon: false,
            v16Approved: false,
            lastITV: "2025-08-09"
        },
        tires: {
            frontLeft: 2.3,
            frontRight: 2.3,
            rearLeft: 2.2,
            rearRight: 2.2
        },
        visits: [
            { date: "2025-08-09", service: "ITV", cost: 45, description: "ITV aprobada sin fallos" },
            { date: "2026-01-14", service: "Rotación de llantas", cost: 35, description: "Rotación cruzada" }
        ]
    },
    {
        licensePlate: "9033-BNV",
        brand: "Volkswagen",
        mileage: 97850,
        year: 2021,
        owner: {
            name: "Luis Herrera",
            phone: "+52 55 91 440 663"
        },
        safety: {
            hasV16Beacon: true,
            v16Approved: false,
            lastITV: "2024-12-22"
        },
        tires: {
            frontLeft: 2.1,
            frontRight: 2.2,
            rearLeft: 2.0,
            rearRight: 2.1
        },
        visits: [
            { date: "2024-12-22", service: "ITV", cost: 45, description: "ITV aprobada" },
            { date: "2025-07-30", service: "Cambio de batería", cost: 110, description: "Batería 12V 650CCA" }
        ]
    }
];

console.log("Gestion de taller:", carManagement);

function getCarsWithBeacon(cars){
    //retorna un array con los coches que tienen baliza V16
    return cars.filter((car) => car.safety.hasV16Beacon === true);    
}

console.log("Coches con baliza V16:", getCarsWithBeacon(carManagement));

function getCarsWithApprovedBeacon(cars){
    //Retorna array con coches que tienen baliza V16 Y está homologada, útil para saber 
    //qué coches cumplen la normativa.
    return cars.filter(car => car.safety.hasV16Beacon && car.safety.v16Approved);
}

console.log("Coches que cumplen la normativa de baliza V16 aprobada:", getCarsWithApprovedBeacon(carManagement));
console.clear();

function getCarsWithLowPressure(cars, minPressure){
    //validar si hay alguna rueda que esté por debajo del minimo
    // recorrer el array para ver dentro de cada carro y asi verificar si hay al 
    // menos una llanta por debajo del min. Despues devolvemos la informacion 
    // del carro y las lllantas que estan bajas.

    const lowTiresCars = cars.filter(car => Object.values(car.tires).some(pressure => pressure < minPressure)).map(car => ({
        ...car,
        lowtires: Object.entries(car.tires).filter(([tire, pressure]) => pressure < minPressure)  
    }));

    return lowTiresCars
}

let CarsWithLowPressure = getCarsWithLowPressure(carManagement, 2);
console.log(CarsWithLowPressure);

CarsWithLowPressure.forEach(car => {
        console.log("Carro:", car.licensePlate, "| Llantas debajo de la presion min:", car.lowtires);
});   


function getCarReport(cars, licensePlate){
    
    const car = cars.find(car => car.licensePlate === licensePlate)
    if(!car) {
        return "carro no encontrado"    
    }
    
    return` 
Matricula: ${car.licensePlate}
Marca: ${car.brand}
Kms: ${car.mileage}
Propietario: ${car.owner.name}
Estado de Seguridad: ${JSON.stringify(car.safety, null, 2)}
llantas: ${JSON.stringify(car.tires, null, 2)}
`            
}



console.log(getCarReport(carManagement, "1234-BTS"));










