import { getDocks, getHaulingShips } from "./database.js"

export const DockList = () => {
    const docks = getDocks()
    const haulers = getHaulingShips()

    let docksHTML = "<ul><h2>Docks</h2>"

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li data-id="${dock.id}" data-type="dock">${dock.location}</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        const docks = getDocks()
        const haulers = getHaulingShips()

        // Was a dock list item clicked?
        if (itemClicked.dataset.type === "dock") {
            const findHaulers = (dock, haulers) => {
                let dockHaulers = [];

            for (const hauler of haulers) {
                if (hauler.majorDockId === dock.id) {
                    dockHaulers.push(hauler)
                }
            }

            return dockHaulers

            }
            
            const dock = docks.find(dock => dock.id === parseInt(itemClicked.dataset.id))
            const haulersAtDock = findHaulers(dock, haulers)

            let haulerNames = haulersAtDock.map(hauler => hauler.name).join(', ');
            if (haulerNames === '') {
                haulerNames = "nothing";
            }
            
            window.alert(`This ${dock.location} dock is currently unloading ${haulerNames}`)
        }
    }
)