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
    putAnySpecimenInTubeWithMassMolarConcentration,
    creatMaterialLotWithTube,
    changeMatLotStatus,
    putTubeIntoMatLot,
    creatMaterialLot, getSpecimenStates, getQueueFromStorage
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


import {date, monthInNumber} from "./index.js";
import {createOneTube} from "./functions.js";

const dates = `2021-${monthInNumber}-${date}`;
const main = async () => {
// const epp = 'U1H93UX';
//     23232
//     const plate = await getArrayWithTubes('PLATE_384', 'BALTIMORE_AVAILABLE_CONTAINERS', 2);
    [ '6U9C9NS', '6SH3PA3' ]

    //     23103
//     await createSpecimen('CF_DNA', 'PAT1');
    //
    // await createSpecimen('CF_DNA_WBC', 'cfdna_wbc_test');
    // await createSpecimen('ANU_LIB_POOL', 'ANU_LIB_POOL_test');
    // await createSpecimen('BLOOD', 'BLOOD_test');
    // await createSpecimen('PLASMA', 'PLASMA_test');
    // const tube = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);


    // await createSpecimen('CF_DNA', 'CF_DNA_test');
    const lotNumberWithKit = "R-0001010";
const lotNumber = "R-0001091";
// const reagentType = "MAT000033";
    const reagentType = "MAT000210";
    // const reagentTypeWithKit = "MAT000200";
    const typeName = "WBC-FR8-C";
// const tube = '53AS2CU';
    // 23109
    // const plate = await getArrayWithTubes('PLATE_384', 'BALTIMORE_AVAILABLE_CONTAINERS', 2);
    // await creatMaterialLotWithTube(dates, lotNumber, reagentType, `${plate[0]}_A.1`);

    // 22929
    // const plate = await getArrayWithTubes('PLATE_96', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const plate2 = await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const plate = await getArrayWithTubes('PLATE_96', 'BALTIMORE_PROCESSING_LABORATORY', 1);
    // const plate2 = await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_PROCESSING_LABORATORY', 1);
    // await putContainerInAnyQueue(plate[0], 'CFDNA_ANU_PICOGREEN_QUEUE');
    // await putContainerInAnyQueue(plate2[0], 'CFDNA_ANU_PICOGREEN_QUEUE');


    // const plate = await getArrayWithTubes('PLATE_96', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const plate2 = await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const plate = await getArrayWithTubes('PLATE_96', 'BALTIMORE_PROCESSING_LABORATORY', 1);
    // const plate2 = await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_PROCESSING_LABORATORY', 1);
    // await putContainerInAnyQueue(plate[0], 'CFDNA_ANU_SEQUENCING_LIBRARY_POOLING_QUEUE');
    // await putContainerInAnyQueue(plate2[0], 'CFDNA_ANU_SEQUENCING_LIBRARY_POOLING_QUEUE');


    // 23186
    // const plate = await getArrayWithTubes('PLATE_384', 'BALTIMORE_AVAILABLE_CONTAINERS', 2);
   //  const tube = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
   //  await creatMaterialLotWithTube(dates, "R-0001015", "MAT000210", `${tube[0]}`);
   //  await putTubeIntoMatLot(dates, tube[0], 50, 'R-0001015', "MAT000210");
   // await changeMatLotStatus('R-0001015', 1, 'MAT000210');
   // //  // //
   //  await creatMaterialLotWithTube(dates, "R-0001016", "MAT000411", tube[1]);
   //  await putTubeIntoMatLot(dates, tube[0], 50, 'R-0001016', "MAT000411");
   //  await changeMatLotStatus('R-0001016', 1, 'MAT000411');
   //  // //
   //  // await creatMaterialLotWithTube(dates, "R-0001019", "MAT000415", tube[1]);
   //  const genMat = await createOneTube('GENERAL_MATERIAL_CONTAINER', 'BALTIMORE_AVAILABLE_CONTAINERS');
   //  // await creatMaterialLotWithTube(dates, "R-0001019", "MAT000415", genMat);
   //  await putTubeIntoMatLot(dates, genMat, 50, 'R-0001019', "MAT000415");
   //  // await changeMatLotStatus('R-0001019', 1, 'MAT000415');

    // 23231
    // const plate = await getArrayWithTubes('PLATE_384', 'BALTIMORE_AVAILABLE_CONTAINERS', 4);
    [ '129USPH', 'XAU087P', 'UC40CA2', 'KA767KU' ]

// await getQueueFromStorage('3HH1U6S');
//     await getSpecimenFromStorage('3HH1U6S_A.1');

    // создать мат лоты для anu picogreen
    // const tube = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    //  await creatMaterialLotWithTube(dates, "R-0001015", "MAT000210", `${tube[0]}`);
    // await putTubeIntoMatLot(dates, tube[0], 50, 'R-0001015', "MAT000210");
    // // await changeMatLotStatus('R-0001015', 1, 'MAT000210');
    //  //

    // await creatMaterialLotWithTube(dates, "R-0001019", "MAT000415", tube[1]);
    // const genMat = await createOneTube('GENERAL_MATERIAL_CONTAINER', 'BALTIMORE_AVAILABLE_CONTAINERS');
    // await creatMaterialLotWithTube(dates, "R-0001019", "MAT000415", genMat);
    // await putTubeIntoMatLot(dates, genMat, 50, 'R-0001019', "MAT000415");
    // await changeMatLotStatus('R-0001019', 1, 'MAT000415');

    // положить тубы в  мат лоты для anu picogreen

    // const tube = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // await putTubeIntoMatLot(dates, tube[0], 50, 'R-0001015', "MAT000210");
    // const genMat = await createOneTube('GENERAL_MATERIAL_CONTAINER', 'BALTIMORE_AVAILABLE_CONTAINERS');
    // await putTubeIntoMatLot(dates, genMat, 50, 'R-0001019', "MAT000415");
    //
    //
    // console.log(tube, genMat);
//     console.log(genMat);

// const plate = await getArrayWithTubes('PLATE_384', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
};
main();


// anuPicogreen.js