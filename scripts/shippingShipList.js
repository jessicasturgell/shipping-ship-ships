import { getShippingShips, getHaulingShips } from "./database.js"


export const shippingShipList = () => {
    const ships = getShippingShips()

    let shipsHTML = "<ul><h2>Shipping Ships</h2>"

    for (const ship of ships) {
        // Convert each dock object to an <li> and append to the docksHTML string
        shipsHTML += `<li data-id="${ship.id}" data-name="${ship.name}" data-hauler="${ship.shipHaulerId}" data-type="ship">${ship.name}</li>`
    }

    shipsHTML += "</ul>"

    return shipsHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "ship") {

        
            // Get the haulerId value of the shipping ship clicked
            const haulerId = itemClicked.dataset.hauler

            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }

            // Iterate the array of hauler objects
            const haulers = getHaulingShips()

            for (const hauler of haulers) {

                // Does the haulerId foreign key match the id of the current hauler?
                if (parseInt(haulerId) === hauler.id) {
                    // Reassign the value of `haulingShip` to the current hauler
                    haulingShip = hauler
                }

            }   
            
            // Show an alert to the user with this format...
                window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip.name}`)
        }
    }
)