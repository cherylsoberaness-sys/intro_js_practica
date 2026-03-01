Hotel = {
    name: "Hotel keepCoding",
    rooms: [],
    reservations: [],
    history: []
}

habitacion = {
    number: 101,
    type: "single",
    pricePerNight: 50,
    status: "available",
    features: ["wifi", "tv", "minibar"]

}

reserva = {
    id: "RES-001",
    roomNumber: 101,
    guest: {
        name: "Ana García",
        email: "ana@example.com",
        phone: "+34 612345678",
        dni: "12345678A"
    },
    checkIn: "2026-01-20",
    checkOut: "2026-01-25",
    nights: 5,
    totalPrice: 250,
    status: "confirmed",
    extras: [
        { "name": "Breakfast", "price": 10, "quantity": 5 },
        { "name": "Parking", "price": 15, "quantity": 5 }
    ]
}

const rooms = [
    {number: 101, type: "single", pricePerNight: 50, status: "occupied", features: ["wifi", "tv", "minibar"]},
    {number: 102, type: "double", pricePerNight: 50, status: "available", features: ["wifi", "tv", "minibar"]},
    {number: 103, type: "double", pricePerNight: 50, status: "occupied", features: ["wifi", "tv", "minibar"]},
    {number: 104, type: "single", pricePerNight: 50, status: "available", features: ["wifi", "tv", "minibar"]},
    {number: 105, type: "suite", pricePerNight: 50, status: "maintenance", features: ["wifi", "tv", "minibar"]},

]


function createHotel (name, rooms) {
    return {
        name: name,
        rooms: rooms,
        reservations: [{},{},{}],
        history: []
    }
}

const hotel1 = createHotel("Hotel KeepCoding", rooms);
console.log(hotel1);

/*
function searchAvailableRooms (hotel, checkIn, checkOut, roomType) {
    //funcion booleana indica si hay alguna habitacion disponible
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const availableRooms = []
    for(const field of hotel){
        if(field.reservations && field.rooms){
            for(const r of field.reservations){
                const date1 = r.checkIn
                const date2 = r.checkOut
                if(!checkInDate >= date1 && checkInDate <= date2){
                    for 
                }
            }
        }
    }


}*/