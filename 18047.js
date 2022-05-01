import {getArrayWithKits } from './tube-types.js'
import {getRunID} from './e2e_functions.js'
import {createCollectEventNew} from "./collectionEvents.js";
import {createKitReceivingRun, startKitReceivingRun, scanShipmentKitReceivingRun1, scanKitKitReceivingRun1} from "./index.js";
import {createAnyRunNew} from "./functions.js";

const today = new Date();
// const collectionDate = today.toUTCString();
// console.log(collectionDate);
const collectionDate = 'Tue, 29 Mar 2022 10:58:37 GMT';
const collectionDate2 = 'Tue, 27 Mar 2022 14:58:377 GMT';
// ue, 15 Jun 2021 14:58:37 GMT

let arrKits = [];
// item, shipment, location, date

const main18047 = async () => {
    // // Kits <k1>, <k2>, <k3>, <k4>, <k5>,<k6> <k7>,<k8>
    // arrKits = await getArrayWithKits('ALLIED_LBGARD_KIT_V1', 'BALTIMORE_AVAILABLE_CONTAINERS', 'LBGARD_TUBE', 1, 8);
    //
    // // Add 2 kits <k1>, <k2 >to the shipment <BALT>
    // await createCollectEventNew(arrKits[0], `BALT`, '', 'BALTIMORE', collectionDate);
    // await createCollectEventNew(arrKits[1], `BALT`, '', 'BALTIMORE', collectionDate);
    //
    // // without any shipment) to <k5>, <k8>.
    // await createCollectEventNew(arrKits[4], ``, '', 'BALTIMORE', collectionDate);
    // await createCollectEventNew(arrKits[7], ``, '', 'BALTIMORE', collectionDate);
    //
    // const runName = await getRunID('KIT_RECEIVING');
    // // // const runName = 'KIT_RECEIVING_18NOV21_5';
    //
    // // Scan <BALT>, then <k1>, <k2> into it.
    // await createAnyRunNew('ACCESSIONING', 'KIT_RECEIVING', runName);
    // await startKitReceivingRun(runName);
    // await scanShipmentKitReceivingRun1(`BALT`, runName);
    // await scanKitKitReceivingRun1(runName,`BALT`, arrKits[0]);
    // await scanKitKitReceivingRun1(runName,`BALT`, arrKits[1]);
    //
    const runName = 'KIT_RECEIVING_30MAR22_44';

    arrKits= ['PP70H9A','S104KPU','1K6UP7X','UN3F6U7','5CP55SX','K09S6XK','FPHN218','72U7CKP'];
    // Scan <k3>, <k4>, <k5> into <BALT>, then <k6>, <k7>, <k8> into <765432test>
    await scanKitKitReceivingRun1(runName,`BALT`, arrKits[2]);
    await scanKitKitReceivingRun1(runName,`BALT`, arrKits[3]);
    await scanKitKitReceivingRun1(runName,`BALT`, arrKits[4]);

    await scanKitKitReceivingRun1(runName,`765432TEST`, arrKits[5]);
    await scanKitKitReceivingRun1(runName,`765432TEST`, arrKits[6]);
    await scanKitKitReceivingRun1(runName,`765432TEST`, arrKits[7]);
    // const a = document.querySelectorAll('div#main.Toastify div.Toastify__toast-body');
    // const b = Array.from(a);;
    console.log(b);
    // Toastify__toast Toastify__toast--warning
    // var btns = document.querySelectorAll('.Toastify__toast-body');

// Convert buttons NodeList to an array
//     var btnsArr = Array.from(btns);
    // for (item in btnsArr) {
    //     return item.innerText;
    // }
    // var btnsArr2 = btnsArr.map(item => item.innerText);
    //
    // console.log(btnsArr2);
    // await scanKitKitReceivingRun1(runName,`BALT`, arrKits[0]);
    // await scanKitKitReceivingRun1(runName,`BALT`, arrKits[1]);


    // await scanShipmentKitReceivingRun1(`NEWSHIPMENT`, runName);

    // await scanShipmentKitReceivingRun1(`ship2`, runName);
    // await scanKitKitReceivingRun1(runName,`ship2`, '4K1NAS0');

    // await scanShipmentKitReceivingRun1(`NEWSHIPMENT`, runName);
    // await scanKitKitReceivingRun1(runName,`ship2`, 'X63ASU9');

    // await scanKitKitReceivingRun1(runName,`NEWSHIPMENT`, 'X63ASU9');
    // await finishKitKitReceivingRun(runName);


    //
    // await createCollectEvent(arrKits[4], 'BALTlate', 'BALTIMORE', collectionDate2);
    // await createCollectEvent(arrKits[7], 'BALTlate2', 'BALTIMORE', collectionDate2);
    // // await createKitReceivingRun();
    // // await startKitReceivingRun();
    // await createCollectEventNew(arrKits[0], 'BALT', ``, 'BALTIMORE', collectionDate);
    // await createCollectEventNew(arrKits[0], 'BALT', ``, 'BALTIMORE', collectionDate);
    // await createCollectEventNew(arrKits[0], 'BALT', ``, 'BALTIMORE', collectionDate);
    // await createCollectEventNew(arrKits[0], 'BALT', ``, 'BALTIMORE', collectionDate);
    // await createCollectEventNew(arrKits[0], 'BALT', ``, 'BALTIMORE', collectionDate);
    //
    // await scanShipmentKitReceivingRun1('BALT');
    // await scanKitKitReceivingRun1('BALT', arrKits[0]);
    // await scanKitKitReceivingRun1('BALT', arrKits[2]);
    // await scanKitKitReceivingRun1('BALT', arrKits[3]);
    // await scanKitKitReceivingRun1('BALT', arrKits[4]);
    // console.log(`arrKits: ${arrKits}`);
    // const resp = await getStorage('5X6CHK9');
    // resp();
    // console.log(resp.data.parent);
}

main18047();
// 18047.js
// arrKits: 5X6CHK9,1XKC13F,KHN9U05,P3XS0P0(4),N0N29FF(5),    SNA457N,X2N5AF1(7),H97FC7N(8)
