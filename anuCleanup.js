// import {
//     createSpecimenPlasma,
//     createSpecimen,
//     putAnySpecimenInTube,
//     putContainerInAnyQueue,
//     addExistingContainerWithInitialBarcode,
//     createAnyRunNew,
//     getGeneralInfoFromStorage,
//     updateLocation,
//     cryopakCheck,
//     getSpecimenFromStorage,
//     changeMeasureValue,
//     putAnySpecimenInTubeWithMassMolarConcentration,
//     creatMaterialLotWithTube,
//     changeMatLotStatus,
//     putTubeIntoMatLot,
//     creatMaterialLot, getSpecimenStates, getQueueFromStorage, creatMaterialLotWith2Tubes, updateLocationWithPosition
// } from "./functions.js";
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
// import {createOneTube} from "./functions.js";
import {putPlasmaInTube, createOneTube,createSpecimenPlasma} from "./functions-dev.js";

const dates = `2021-${monthInNumber}-${date}`;
const main = async () => {
    // const tube1 = await createOneTube('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_PROCESSING_LABORATORY');
    // await createSpecimenPlasma('test');
    await putPlasmaInTube('9K0SCA7', 13500, 'test');
    // 28516
    // const plate = await getArrayWithTubes('DEEP_WELL_BLOCK_96', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const pcr = await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_AVAILABLE_CONTAINERS', 2);

    // 21594
    // const DilutionPlate = await getArrayWithTubes('DEEP_WELL_BLOCK_96', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);


//     // создать мат лоты для anu
//     const tube = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 2);
//      // await creatMaterialLotWithTube(dates, "R-0001317", "MAT000317", `${tube[0]}`);
//     await putTubeIntoMatLot(dates, tube[0], 50, 'R-0001317', "MAT000317");
//     // await changeMatLotStatus('R-0001317', 1, 'MAT000317');
// console.log(tube);
    //  //
    // // создать мат лоты для anu
    // const plate = await getArrayWithTubes('DEEP_WELL_BLOCK_96', 'BALTIMORE_AVAILABLE_CONTAINERS', 2);
    // // await creatMaterialLotWithTube(dates, "R-0001317", "MAT000317", `${tube[0]}`);
    // await putTubeIntoMatLot(dates, plate[0], 50, 'R-0001317', "MAT000317");
    // // await changeMatLotStatus('R-0001317', 1, 'MAT000317');
    // console.log(plate);
    // const tube = [ 'X7A17PF', 'U6PC05C' ]

    // await creatMaterialLotWith2Tubes(dates, 'R-0001015',"MAT000300", tube[0],tube[1])
    // await changeMatLotStatus('R-0001015', 1, 'MAT000300');

    // await updateLocation('60SHHP5', 'CAMBRIDGE_AVAILABLE_CONTAINERS');
    //     <SPRIselect_ID> 0P1S8KK
    //     <Ethyl_ID> 1HSH4C5
    //     <DNase_ID> 0KU21CH
    //     <IDTE_ID> 12AP2UF

    // const Elution_Plate = await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_AVAILABLE_CONTAINERS',1);
    // const Elution_Plate = await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_AVAILABLE_CONTAINERS',1);



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
// //     32550
//     const rack = '91AFH2F';
//     const tube = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 5);
//     await updateLocationWithPosition(tube[0],rack, 'A.1');
//     await updateLocationWithPosition(tube[1],rack, 'A.2');
//     await updateLocationWithPosition(tube[2],rack, 'A.3');
//     await updateLocationWithPosition(tube[3],rack, 'A.4');
//     await updateLocationWithPosition(tube[4],rack, 'A.5');
};
main();


// anuPicogreen.js