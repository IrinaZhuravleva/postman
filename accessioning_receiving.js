import {
    createSpecimenPlasma,
    queueEllaResultUpload,
    createSpecimen,
    putAnySpecimenInTube,
    putContainerInAnyQueue,
    addExistingContainerWithInitialBarcode,
    createAnyRunNew,
    getGeneralInfoFromStorage,
    updateLocation
} from "./functions.js";
import {getArrayWithTubes, getArrayWithTubesInKit, queueUpload, createKitWithTubes, createKitWithTubesReturnKit} from "./tube-types.js";
import {createCollectEventNew, collectionDate} from "./collectionEvents.js";
import {
    createKitReceivingRun,
    scanKitKitReceivingRun1,
    scanShipmentKitReceivingRun,
    scanShipmentKitReceivingRun1,
    startKitReceivingRun,
    finishKitKitReceivingRun,
    createKitContentsAccessioningRun,
    startKitContentsAccessioningRun,
    skanKitKitContentsAccessioningRun
} from "./index.js";
import {getRunID} from './e2e_functions.js'
import {createShipment} from "./createShipments.js";

// createOneTube('1ML_THERMO_MATRIX_2D','BALTIMORE_AVAILABLE_CONTAINERS');


const main18592 = async () => {


    // let kit2 = await createKitWithTubesReturnKit('ALLIED_LBGARD_KIT_V1', 'BALTIMORE_AVAILABLE_CONTAINERS', 'LBGARD_TUBE', 1);
    // let kit3 = await createKitWithTubesReturnKit('ALLIED_LBGARD_KIT_V1', 'BALTIMORE_AVAILABLE_CONTAINERS', 'LBGARD_TUBE', 1);
    // let kit4 = await createKitWithTubesReturnKit('ALLIED_LBGARD_KIT_V1', 'BALTIMORE_AVAILABLE_CONTAINERS', 'LBGARD_TUBE', 1);
    // let kit1 = await createKitWithTubesReturnKit('ALLIED_LBGARD_KIT_V1', 'BALTIMORE_AVAILABLE_CONTAINERS', 'LBGARD_TUBE', 1);
    // // await arr.forEach(function (item, index) {
    //

    // await createCollectEventNew(kit1, `ship2`, '', 'BALTIMORE', collectionDate);
    // await createCollectEventNew(kit2, `ship2`, '', 'BALTIMORE', collectionDate);
    // await createCollectEventNew(kit3, `ship2`, '', 'BALTIMORE', collectionDate);
    // await createCollectEventNew(kit4, `ship2`, '', 'BALTIMORE', collectionDate);
    // const runName = await getRunID('KIT_RECEIVING');
    // // const runName = 'KIT_RECEIVING_18NOV21_5';

    // await startKitReceivingRun(runName);
    // await scanShipmentKitReceivingRun1(`ship2`, runName);
    // await scanShipmentKitReceivingRun1(`NEWSHIPMENT`, runName);

    // await scanShipmentKitReceivingRun1(`ship2`, runName);
    // await scanKitKitReceivingRun1(runName,`ship2`, '4K1NAS0');

    // await scanShipmentKitReceivingRun1(`NEWSHIPMENT`, runName);
    // await scanKitKitReceivingRun1(runName,`ship2`, 'X63ASU9');

    // await scanKitKitReceivingRun1(runName,`NEWSHIPMENT`, 'X63ASU9');
    // await finishKitKitReceivingRun(runName);
    //

    // 20064
    // const kit = await getArrayWithTubes('ALLIED_KIT', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const kit = 'C4A0N5U';
    // const arrKits = await getArrayWithTubesInKit('STRECK_CELL_FREE_DNA_BCT', kit[0], 4);
    // await createCollectEventNew(kit, `19999999999999`, '', 'BALTIMORE', collectionDate);

    // const arrKits = [ 'C6SHK83', 'U97KS7S', 'PA9K59N', 'C21SX8F', 'C9X08UN', 'XUF5N62' ]

    // await createShipment('29999999999999', 'BALTIMORE_AVAILABLE_CONTAINERS');
    // await createShipment('39999999999999', 'BALTIMORE_AVAILABLE_CONTAINERS');
    // await putContainerInAnyQueue('29999999999999', 'INBOUND_THRIVE_QUEUE');
    // await putContainerInAnyQueue('39999999999999', 'INBOUND_THRIVE_QUEUE');

    // const runName = await getRunID('KIT_RECEIVING');
    // // const runName = 'KIT_RECEIVING_18NOV21_8';
    // await createKitReceivingRun(runName);
    // await startKitReceivingRun(runName);

    // 20177
    // await putContainerInAnyQueue('WW8888888888888888888888888888888888', 'INBOUND_THRIVE_QUEUE');
    // await putContainerInAnyQueue('WWW8888888888888888888888888888888888', 'INBOUND_THRIVE_QUEUE');
   //  const runName = await getRunID('KIT_RECEIVING');
   //  await createKitReceivingRun(runName);
   //  await startKitReceivingRun(runName);
   //  await scanShipmentKitReceivingRun1(`WW8888888888888888888888888888888888`, runName);
   //  await scanShipmentKitReceivingRun1(`WWW8888888888888888888888888888888888`, runName);

    // 20321
    // const kit = await getArrayWithTubes('ALLIED_KIT', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // // const kit = 'C4A0N5U';
    // // const runName = 'KIT_RECEIVING_18NOV21_5';
    // const arrKits = await getArrayWithTubesInKit('STRECK_CELL_FREE_DNA_BCT', kit[0], 1);
    // await createCollectEventNew(kit, `SH_${kit[0]}`, '', 'BALTIMORE', collectionDate);
    // const runName = await getRunID('KIT_RECEIVING');
    // await createKitReceivingRun(runName);
    // await startKitReceivingRun(runName);
    // await scanShipmentKitReceivingRun1(`SH_${kit[0]}`, runName);
    // await scanKitKitReceivingRun1(runName,`SH_${kit[0]}`, kit[0]);

    // 20593
    // const kit = await getArrayWithTubes('ALLIED_KIT', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // // const kit = 'P03CS1A';
    // // const runName = 'KIT_RECEIVING_18NOV21_11';
    // const arrKits = await getArrayWithTubesInKit('STRECK_CELL_FREE_DNA_BCT', kit[0], 3);
    // await createCollectEventNew(kit, `SH_${kit[0]}`, '', 'BALTIMORE', collectionDate);
    // const runName = await getRunID('KIT_RECEIVING');
    // await createKitReceivingRun(runName);
    // await startKitReceivingRun(runName);
    // await createCollectEventNew(kit, `ship222`, '', 'BALTIMORE', collectionDate);

    // 22462
    // const kit = await getArrayWithTubes('ALLIED_KIT', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // // const kit = 'P03CS1A';
    // // const runName = 'KIT_RECEIVING_18NOV21_11';
    // const arrKits = await getArrayWithTubesInKit('SST_TUBE', kit[0], 3);
    // await createCollectEventNew(kit, `SHipment_011`, '', 'Cambridge', collectionDate);
    // await createCollectEventNew(kit, `SH_${kit[0]}`, '', 'BALTIMORE', collectionDate);
    // const runName = await getRunID('KIT_RECEIVING');
    // await createKitReceivingRun(runName);
    // await startKitReceivingRun(runName);
    // await scanShipmentKitReceivingRun1(`SHipment_011`, runName);
    // const resp = await getGeneralInfoFromStorage('SHipment_011');
    // console.log(resp.json.destinationSite);


    // 26480
    // const kit = await getArrayWithTubes('ALLIED_KIT', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const arrKits = await getArrayWithTubesInKit('STRECK_CELL_FREE_DNA_BCT', kit[0], 6);
    //
    // const kit2 = await getArrayWithTubes('ALLIED_KIT', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const arrKits2 = await getArrayWithTubesInKit('SST_TUBE', kit2[0], 6);
    // const kit3 = await getArrayWithTubes('ALLIED_KIT', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const arrKits3 = await getArrayWithTubesInKit('SST_TUBE', kit3[0], 6);
    //
    // await createCollectEventNew(kit[0], `ship2_${kit[0]}`, '', 'BALTIMORE', collectionDate);
    // await createCollectEventNew(kit2[0], `ship2_${kit2[0]}`, '', 'BALTIMORE', collectionDate);
    // await createCollectEventNew(kit3[0], `ship2_${kit3[0]}`, '', 'BALTIMORE', collectionDate);
    //
    // console.log(`ship2_${kit[0]}`, `ship2_${kit2[0]}`, `ship2_${kit3[0]}`)
    // //ship2_P6PF9X9 ship2_79N0PCH ship2_8AA26CX
    // const runName = await getRunID('KIT_RECEIVING');
    // await createKitReceivingRun(runName);
    // await startKitReceivingRun(runName);
    // await scanShipmentKitReceivingRun1(``ship2_${kit[0]}`, runName);

    // 26484
    // await addExistingContainerWithInitialBarcode('0111111111111', 'BALTIMORE_AVAILABLE_CONTAINERS','SHIPMENT');
    // const runName = await getRunID('KIT_RECEIVING');
    // await createKitReceivingRun(runName);
    // await startKitReceivingRun(runName);
    // await addExistingContainerWithInitialBarcode('2111111111111', 'BALTIMORE_AVAILABLE_CONTAINERS','SHIPMENT');
    // SH_454D01
    //
    // 29531
    // await addExistingContainerWithInitialBarcode('0111111111111', 'BALTIMORE_AVAILABLE_CONTAINERS','SHIPMENT');
    // const runName = await getRunID('KIT_RECEIVING');
    // await createKitReceivingRun(runName);
    // await startKitReceivingRun(runName);
    // const shipment = '';
    // await updateLocation(shipment, 'DISPOSAL');
    // const resp = await getGeneralInfoFromStorage(shipment);
    // console.log(resp.parent);


};
main18592();


// accessioning_receiving.js