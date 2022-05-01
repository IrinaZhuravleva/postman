import {
    createSpecimenPlasma,
    createSpecimen,
    putAnySpecimenInTube,
    putContainerInAnyQueue,
    addExistingContainerWithInitialBarcode,
    createAnyRunNew,
    getGeneralInfoFromStorage,
    updateLocation,
    cryopakCheck,
    putContainerInContainersToStoreQueue,
    startAnyRunTypeStartID,
    getQueueFromStorage,
    getSpecimenFromStorage, getSpecimenMolarMassFromStorage
} from "./functions.js";
import {getArrayWithTubes, getArrayWithTubesInKit, queueUpload, createKitWithTubes, createKitWithTubesReturnKit} from "./tube-types.js";
import {createCollectEventNew, collectionDate} from "./collectionEvents.js";

import {getRunID, startRunID} from './e2e_functions.js'


// createOneTube('1ML_THERMO_MATRIX_2D','BALTIMORE_AVAILABLE_CONTAINERS');


const main = async () => {
    const epp = await getArrayWithTubes('PLATE_384', 'BALTIMORE_AVAILABLE_CONTAINERS', 4);
    // const epp = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const epp = 'U1H93UX';
    // // await createSpecimen('CF_DNA', 'cfdna_test');
    // // await putAnySpecimenInTube(epp[0], 10000, 'cfdna_test');
    // await createSpecimen('CF_DNA_WBC', 'cfdna_wbc_test');
    // await putAnySpecimenInTube(epp, 100, 'cfdna_wbc_test');
    // await putContainerInContainersToStoreQueue(epp);

    // const runName = await getRunID('CONTAINERS_TO_STORE');
    // await createAnyRunNew('Inventory', 'CONTAINERS_TO_STORE', runName, 'BALTIMORE');
    // // await startAnyRunTypeStartID('CONTAINERS_TO_STORE', runName);
    // await getGeneralInfoFromStorage(epp);
    // await getQueueFromStorage(epp);
    // await getSpecimenFromStorage(epp);
    // export const  = async (item) => {

    // const runName = 'CRYOPAK_FILE_UPLOAD_19NOV21_3';
    // await createAnyRunNew('ACCESSIONING', 'CRYOPAK_FILE_UPLOAD', runName);
    // await startRunID(runName);
    // await getGeneralInfoFromStorage(kit);
    // const resp = await getGeneralInfoFromStorage('xx-Z.cvv-678-tNx');
    // console.log(resp.parent);

    // [ 'CP7H4U3', 'UX74S7S', '6A9KNX5', '1F1SX8F' ]

    // 19192
    await getSpecimenMolarMassFromStorage('A37C7HC_A.1');
    // /specimen_processes/states with the body:     ["<Input_96_PCR_Plate_Barcode_A.1>"]




    // console.log(kit);






    // 24311
    // const kit = await getArrayWithTubes('ALLIED_LBGARD_KIT_V1', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // // const kit = 'X5C1N7P';
    // const kit2 = kit[0];
    // const arrKits = await getArrayWithTubesInKit('LBGARD_TUBE', kit[0], 1);


    // await putContainerInAnyQueue('CRYOCAPS123', 'CRYOPAK_ACCESSIONING_QUEUE');

    // const runName = await getRunID('CRYOPAK_FILE_UPLOAD');
    // // const runName = 'CRYOPAK_FILE_UPLOAD_19NOV21_3';
    // await createAnyRunNew('ACCESSIONING', 'CRYOPAK_FILE_UPLOAD', runName, 'BALTIMORE');
    // await startRunID(runName);


};
main();


// cryopak.js