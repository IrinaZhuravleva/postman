import {createAndReturnKitWithTubes, createKitWithTubes, createOneTube} from './tube-types.js'
import {createCollectEventBalt, createCollectEventArrayCamb, createCollectEventNew, collectionDate} from "./collectionEvents.js";
import {getStorage } from './storage.js'

const main23686 = async () => {
    // const kit = await createAndReturnKitWithTubes('ALLIED_LBGARD_KIT_V1', 'BALTIMORE_AVAILABLE_CONTAINERS', 'LBGARD_TUBE', 1); //LB1 2 U448FAH
    // await createCollectEventNew(kit, `sh_${kit}`, `log_${kit}`, 'BALTIMORE', collectionDate);
    // await createKitReceivingRun();
    // await startKitReceivingRun();
    // await scanShipmentKitReceivingRun(`sh_${kit}`, )
    // const resp = await getStorage(kit);
    // const storage = resp.data;
    // console.log(storage);

    const resp = await getStorage(kit);
    const storage = resp.data;
    console.log(storage);
}
// main23686();

// 23686.js

