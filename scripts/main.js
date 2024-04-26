import { haulingShipList } from "./haulerList.js"
import { DockList } from "./dockList.js"
import { shippingShipList } from "./shippingShipList.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `${haulingShipList()}
                         ${DockList()}
                         ${shippingShipList()}`

mainContainer.innerHTML = applicationHTML

