import {
    createSpecimenPlasma,
    createSpecimen,
    putAnySpecimenInTube,
    putContainerInAnyQueue,
    addExistingContainerWithInitialBarcode,
    createAnyRunNew,
    getGeneralInfoFromStorage,
    updateLocation, cryopakCheck
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
import {getRunID, startRunID} from './e2e_functions.js'
import {createShipment} from "./createShipments.js";

// createOneTube('1ML_THERMO_MATRIX_2D','BALTIMORE_AVAILABLE_CONTAINERS');


const main = async () => {

    // 28380

    // const kit = await getArrayWithTubes('ALLIED_LBGARD_KIT_V1', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const arrKits = await getArrayWithTubesInKit('LBGARD_TUBE', kit[0], 5);
    //
    // await createCollectEventNew(kit[0], 'shipment2', ``, 'BALTIMORE', collectionDate);
    // await addExistingContainerWithInitialBarcode('TNX-xx-Z.cvv-678-tNx', kit[0],'CRYOPAK');
    // await addExistingContainerWithInitialBarcode('TNX-yy-Z.cvv-679-tNx', kit[0],'CRYOPAK');
    // await putContainerInAnyQueue('TNX-xx-Z.cvv-678-tNx', 'CRYOPAK_ACCESSIONING_QUEUE');
    // await putContainerInAnyQueue('TNX-yy-Z.cvv-679-tNx', 'CRYOPAK_ACCESSIONING_QUEUE');

//     https://qa.lims.thrivedetect.com/core-services/container/api/v1/queues/CRYOPAK_ACCESSIONING_QUEUE/containers?withLocations=true

    // const runName = await getRunID('CRYOPAK_FILE_UPLOAD');
    // // const runName = 'CRYOPAK_FILE_UPLOAD_19NOV21_1';
    // await createAnyRunNew('ACCESSIONING', 'CRYOPAK_FILE_UPLOAD', runName);
    // await startRunID(runName);


    // 19148
    // const kit = await getArrayWithTubes('ALLIED_LBGARD_KIT_V1', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // // const kit = 'X5C1N7P';
    // const arrKits = await getArrayWithTubesInKit('LBGARD_TUBE', kit[0], 5);
    // await createCollectEventNew(kit[0], 'shipment_cryo', ``, 'BALTIMORE', collectionDate);
    // await addExistingContainerWithInitialBarcode('xx-Z.cvv-678-tNx', kit[0],'CRYOPAK');
    // await addExistingContainerWithInitialBarcode('yy-Z.cvv-679-tNx', kit[0],'CRYOPAK');
    // await putContainerInAnyQueue('xx-Z.cvv-678-tNx', 'CRYOPAK_ACCESSIONING_QUEUE');
    // await putContainerInAnyQueue('yy-Z.cvv-679-tNx', 'CRYOPAK_ACCESSIONING_QUEUE');
    // cvv-678-tNx
    // const runName = await getRunID('CRYOPAK_FILE_UPLOAD');
    // const runName = 'CRYOPAK_FILE_UPLOAD_19NOV21_3';
    // await createAnyRunNew('ACCESSIONING', 'CRYOPAK_FILE_UPLOAD', runName);
    // await startRunID(runName);
    // await getGeneralInfoFromStorage(kit);
    // const resp = await getGeneralInfoFromStorage('xx-Z.cvv-678-tNx');
    // console.log(resp.parent);


    // 19192
    // const kit = await getArrayWithTubes('ALLIED_LBGARD_KIT_V1', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // // const kit = 'X5C1N7P';
    // const arrKits = await getArrayWithTubesInKit('LBGARD_TUBE', kit[0], 1);
    // await createCollectEventNew(kit[0], 'shipment_cryo', ``, 'BALTIMORE', collectionDate);
    // await addExistingContainerWithInitialBarcode('CRYO1', kit[0],'CRYOPAK');
    // const runName = await getRunID('CRYOPAK_FILE_UPLOAD');
    // // const runName = 'CRYOPAK_FILE_UPLOAD_19NOV21_3';
    // await createAnyRunNew('ACCESSIONING', 'CRYOPAK_FILE_UPLOAD', runName, 'BALTIMORE');
    // await startRunID(runName);
    // console.log(kit);

    // // const runName = await getRunID('CRYOPAK_FILE_UPLOAD');
    // const runName = 'CRYOPAK_FILE_UPLOAD_19NOV21_5';
    // не работает с Кембридж
    // await createAnyRunNew('ACCESSIONING', 'CRYOPAK_FILE_UPLOAD', runName, 'CAMBRIDGE');
    // // await startRunID(runName);

    // 20351
    // await putContainerInAnyQueue('1U5K1UC', 'CRYOPAK_ACCESSIONING_QUEUE');
    // const runName = await getRunID('CRYOPAK_FILE_UPLOAD');
    // // const runName = 'CRYOPAK_FILE_UPLOAD_19NOV21_3';
    // await createAnyRunNew('ACCESSIONING', 'CRYOPAK_FILE_UPLOAD', runName, 'BALTIMORE');
    // await startRunID(runName);
    // const resp = await cryopakCheck(kit0);
    // // console.log(resp);
    // console.log(resp[0].link.json);
    // console.log(resp[0].errorCode.json);
    // console.log(resp[0].errorCode.code);
    // console.log(resp[0].errorCode.tags);


    // 24311
    // const kit = await getArrayWithTubes('ALLIED_LBGARD_KIT_V1', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // // const kit = 'X5C1N7P';
    // const kit2 = kit[0];
    // const arrKits = await getArrayWithTubesInKit('LBGARD_TUBE', kit[0], 1);



    // await addExistingContainerWithInitialBarcode('CRYOCAPS123', kit2,'CRYOPAK');
    // await addExistingContainerWithInitialBarcode('CRY123', kit2,'CRYOPAK');
    // await addExistingContainerWithInitialBarcode('cryolower123', kit2,'CRYOPAK');
    // await addExistingContainerWithInitialBarcode('cryolower12345', kit2,'CRYOPAK');

    // await putContainerInAnyQueue('CRYOCAPS123', 'CRYOPAK_ACCESSIONING_QUEUE');
    // await putContainerInAnyQueue('CRY123', 'CRYOPAK_ACCESSIONING_QUEUE');
    // await putContainerInAnyQueue('cryolower123', 'CRYOPAK_ACCESSIONING_QUEUE');
    // await putContainerInAnyQueue('cryolower12345', 'CRYOPAK_ACCESSIONING_QUEUE');
    // const runName = await getRunID('CRYOPAK_FILE_UPLOAD');
    // // const runName = 'CRYOPAK_FILE_UPLOAD_19NOV21_3';
    // await createAnyRunNew('ACCESSIONING', 'CRYOPAK_FILE_UPLOAD', runName, 'BALTIMORE');
    // await startRunID(runName);


};
main();


// cryopak.js