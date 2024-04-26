const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        {id: 1, name: "Pioneering Spirit", majorDockId: 1},
        {id: 2, name: "Boaty McBoatface", majorDockId: 2},
        {id: 3, name: "Seawise Giant", majorDockId: 3}
    ],
    shippingShips: [
        {id: 1, name: "Esso Atlantic", shipHaulerId: 1},
        {id: 2, name: "Prairial", shipHaulerId: 2},
        {id: 3, name: "Palais Royal", shipHaulerId: 3},
        {id: 4, name: "Rivoli", shipHaulerId: 1},
        {id: 5, name: "Champs Elysee", shipHaulerId: 2},
        {id: 6, name: "Ever Ace", shipHaulerId: 3},
        {id: 7, name: "Nissei Maru", shipHaulerId: 1},
        {id: 8, name: "MSC Gulsun", shipHaulerId: 2},
        {id: 9, name: "HMM Rotterdam", shipHaulerId: 3},
        {id: 10, name: "CMA CGM Tracadero", shipHaulerId: 1}
    ]
}

// export
export const getDocks = () => {

    // copies and returns array
    return database.docks.map (dock => ({...dock}))
}

export const getHaulingShips = () => {
    // You write the code for copying the array and returning it
    return database.haulers.map(hauler => ({ ...hauler }))
}

export const getShippingShips = () => {
    // You write the code for copying the array and returning it
    return database.shippingShips.map (ships => ({...ships}))
}