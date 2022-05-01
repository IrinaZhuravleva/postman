import {createKitWithTubes, createOneTube} from './tube-types.js'
import { createCollectEventNew, collectionDate} from "./collectionEvents.js";
// import {createKitReceivingRun, startKitReceivingRun} from './index.js'
import {createShipment} from "./createShipments.js";
import {getStorage} from "./storage.js";


// Go to Containers -> Create containers
// Create 50 mL Eppendorf Conical <tube1>.
// Switch to Admin\Kit Creation and create 1 custom kit <Allied>, and  2 kits LBgard: <LB1>, <LB2>,
// and 2 kits with mixed tubes: <Allied_mix> with 1 Streck and 1 SST_tube,
// and <LB_mix> with 1 LBgard and 1 SST_tube, create the Collection event (4-6 hours back from now)
// for them in Baltimore location, use shipment <sh_balt>(scan <Allied>, <LB1>, <Allied_mix>),
// create shipment <sh_camb> (scan <LB2>, <LB_mix>) into Cambridge location.

const main17739 = async () => {

    // const tube1 = await createOneTube('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS');//2F9CCU1
    // const allied = await createKitWithTubes('ALLIED_KIT', 'BALTIMORE_AVAILABLE_CONTAINERS', 'STRECK_CELL_FREE_DNA_BCT', 1); // Allied 1 H74UCK3
    // const LB1 = await createKitWithTubes('ALLIED_LBGARD_KIT_V1', 'BALTIMORE_AVAILABLE_CONTAINERS', 'LBGARD_TUBE', 1); //LB1 2 U448FAH
    // const LB2 = await createKitWithTubes('ALLIED_LBGARD_KIT_V1', 'BALTIMORE_AVAILABLE_CONTAINERS', 'LBGARD_TUBE', 1); //LB2 3 NCF355H
    // // await timeout(fn(), 100);
    // const resp = await getStorage(kit);
    // const storage = resp.data;
    // console.log(storage);

    // await createCollectEventNew(allied[0], `sh_balt`, `log_8K4U2AH`, 'BALTIMORE', collectionDate);
    // await createCollectEventNew(LB1[0], `sh_balt`, `log_FF964SN`, 'BALTIMORE', collectionDate);
    // await createCollectEventNew(LB2[0], `sh_camb`, `log_UN7AC40`, 'CAMBRIDGE', collectionDate);
    // export function sleep(ms: number, message = 'Waiting for'): Promise<void> {
    //     message = `${message} ${ms} ms`;
    //     helperLogger.info(message);
    //     return new Promise((resolve) => setTimeout(resolve, ms));
    // }

    // await createCollectEventNew('XHCP499', `sh_balt`, `log_8K4U2AH`, 'BALTIMORE', collectionDate);
    // await createCollectEventNew('85FAXC8', `sh_balt`, `log_FF964SN`, 'BALTIMORE', collectionDate);
    // await createCollectEventNew('P7CX5C1', `sh_camb`, `log_UN7AC40`, 'CAMBRIDGE', collectionDate);

    // setTimeout(function(){  console.log('storage'); }, 3000);
    // setTimeout(createCollectEventNew(allied[0], `sh_balt`, `log_8K4U2AH`, 'BALTIMORE', collectionDate);, 3000);

    // const resp = await getStorage(kit);
    // const storage = resp.data;
    // console.log(storage);

    // const resp = await getStorage(kit);
    // const storage = resp.data;
    // console.log(storage);

    // console.log(tube1);//2F9CCU1

}
main17739();

// 17739.js
// New kit: 8K4U2AH New tubes: CU2UF75
// FF964SN
// AKCX039
//     [ 'AKCX039' ]
// New kit: FF964SN New tubes: AKCX039
// UN7AC40
// HUF25S9
//     [ 'HUF25S9' ]
// New kit: UN7AC40 New tubes: HUF25S9
