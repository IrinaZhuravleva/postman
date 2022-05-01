import {getArrayWithKits } from './tube-types.js'
import {findShipment, createShipment } from './createShipments.js'
import {createCollectEvent} from "./collectionEvents.js";
import {createKitReceivingRun, startKitReceivingRun, scanShipmentKitReceivingRun1} from "./index.js";

const today = new Date();
// const collectionDate = today.toUTCString();
const collectionDate = 'Tue, 15 Jun 2021 09:15:57 GMT';

let arrKits = [];
// item, shipment, location, date

const main17934 = async () => {
    // await findShipment('EXISTS3');
    // await createShipment('EXISTS3', 'BALTIMORE_AVAILABLE_CONTAINERS');
    // arrKits = await getArrayWithKits('ALLIED_LBGARD_KIT_V1', 'EXISTS3', 'LBGARD_TUBE', 1, 2);

    // //  НИЖЕ не РАБОТАЕТ
    // arrKits.forEach(createCollectEvent.bind(null, 'EXISTS3', 'BALTIMORE', collectionDate) );

    // //  НИЖЕ РАБОТАЕТ
    // arrKits.forEach(function (item, index) {
    //     createCollectEvent( item, 'EXISTS2', 'BALTIMORE', collectionDate);
    //
    // });
    // await createCollectEvent(arrKits[0], 'EXISTS1', 'BALTIMORE', collectionDate);
    // await createCollectEvent(arrKits[1], 'EXISTS1', 'BALTIMORE', collectionDate);
    // let arrayFreeKits = await getArrayWithKits('ALLIED_LBGARD_KIT_V1', 'BALTIMORE_AVAILABLE_CONTAINERS', 'LBGARD_TUBE', 1, 2);
    // await createKitReceivingRun();
    // await startKitReceivingRun();
    // console.log(`arrKits: ${arrKits}`);
    // console.log(`arrayFreeKits: ${arrayFreeKits}`);
    // await scanShipmentKitReceivingRun1('EXISTS1');
}

// main17934();


