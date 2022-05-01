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
    getSpecimenFromStorage,
    changeMeasureValue,
    putAnySpecimenInTubeWithMassMolarConcentration
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
// const epp = 'U1H93UX';
    // await createSpecimen('CF_DNA', 'cfdna_test');
    //
    // await createSpecimen('CF_DNA_WBC', 'cfdna_wbc_test');
    // await createSpecimen('ANU_LIB_POOL', 'ANU_LIB_POOL_test');
    // await createSpecimen('BLOOD', 'BLOOD_test');
    // await createSpecimen('CF_DNA', 'CF_DNA_test');

// const tube = '53AS2CU';
    const tube = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // await putAnySpecimenInTube('53AS2CU', 500, 'cfdna_wbc_test');
    // await putAnySpecimenInTube(tube[0], 500,'BLOOD_test');
    // await putAnySpecimenInTube(tube[0], 500,'CF_DNA_test');
    // export const putAnySpecimenInTubeWithMassMolarConcentration = async (item, volume, specimenName, massConcentration, molarConcentration) => {
    await putAnySpecimenInTubeWithMassMolarConcentration(tube[0], 500, 'CF_DNA_test', 2.8, 2.8);
    // await putAnySpecimenInTube('FC24F6N', null,'BLOOD_test');

    // await putAnySpecimenInTube('711KKHX', null,'ANU_LIB_POOL_test');
    // await changeMeasureValue(tube[0], null, 'nmol_l');
    // await getSpecimenFromStorage(tube[0]);
    // await getGeneralInfoFromStorage(tube);
    // const arrKits = await getArrayWithTubesInKit('LBGARD_TUBE', kit[0], 5);
    //
    // await createCollectEventNew(kit[0], 'shipment2', ``, 'BALTIMORE', collectionDate);
    // await addExistingContainerWithInitialBarcode('TNX-xx-Z.cvv-678-tNx', kit[0],'CRYOPAK');
    // await addExistingContainerWithInitialBarcode('TNX-yy-Z.cvv-679-tNx', kit[0],'CRYOPAK');
    // await putContainerInAnyQueue('TNX-xx-Z.cvv-678-tNx', 'CRYOPAK_ACCESSIONING_QUEUE');
    // await putContainerInAnyQueue('TNX-yy-Z.cvv-679-tNx', 'CRYOPAK_ACCESSIONING_QUEUE');

//


};
main();


// cryopak.js