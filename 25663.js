import {getArrayWithTubes, queueUpload} from "./tube-types.js";
import {
    addExistingContainer,
    updateLocationWithPosition,
    updateLocation,
    creatMaterialLot,
    creatMaterialLotWithTube, changeMatLotStatus, createAnyRunNew, scanIntoBulkMatLot, newLocationValueBulkUpdate
} from "./functions.js";
import {date, monthInNumber} from "./index.js";
import {createOneTube} from "./functions.js";
import {getRunID, startMatBulkUpdateRunID, startRunID} from "./e2e_functions.js";
const dates = `2021-${monthInNumber}-${date}`;
// const lotNumberWithKit = "R-0001031";
const lotNumber = "R-0001011";
const reagentType = "MAT000200";
const main25663 = async () => {


    // const tube_sp = await createOneTube('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS'); //7HFPA24
    // await creatMaterialLotWithTube(dates, lotNumber, reagentType, tube_sp);
    //
    // // await creatMaterialLotWithTube(dates, lotNumber, reagentType, 'XS26N2S');
    // await changeMatLotStatus(lotNumber, 3, reagentType);


    // const runName = await getRunID('MATERIAL_CONTAINERS_BULK_UPDATE');
    // const runName = 'MATERIAL_CONTAINERS_BULK_UPDATE_22NOV21_5';
    // await createAnyRunNew('MATERIALS', 'MATERIAL_CONTAINERS_BULK_UPDATE', runName);
    // await startRunID(runName);
    // //  // const tube_sp = '2U45AXN';
    // await scanIntoBulkMatLot(tube_sp, runName);



    // await getGeneralInfoFromStorage('33U7SUP');

    // const shelf = await getArrayWithTubes('SHELF','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const refrig = await getArrayWithTubes('REFRIGERATOR','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const rack = await getArrayWithTubes('0.5_ML_FLUIDX_RACK', shelf, 1);
    // const freezer1 = await getArrayWithTubes('MINUS20_FREEZER', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const freezer2 = await getArrayWithTubes('MINUS80_FREEZER', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const freezer3 = await getArrayWithTubes('PLUS4_FREEZER', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    //
    // const tube = await getArrayWithTubes('1ML_THERMO_MATRIX_2D','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const tube1 = await getArrayWithTubes('1ML_THERMO_MATRIX_2D','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const rack1 = await getArrayWithTubes('1_ML_MATRIX_RACK','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const rack2 = await getArrayWithTubes('1_ML_MATRIX_RACK','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const rack3 = await getArrayWithTubes('1_ML_MATRIX_RACK','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const rack4 = await getArrayWithTubes('1_ML_MATRIX_RACK','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const box = await getArrayWithTubes('BOX','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const shelf_rack = await getArrayWithTubes('SHELF_RACK4x5',freezer[0], 1);
    //
    // await queueUpload(tube[0], 'CONTAINERS_TO_STORE_QUEUE');
    // await queueUpload(tube1[0], 'CONTAINERS_TO_STORE_QUEUE');
    // await queueUpload(box[0], 'CONTAINERS_TO_STORE_QUEUE');
    // await queueUpload(rack1[0], 'CONTAINERS_TO_STORE_QUEUE');
    // await queueUpload(rack2[0], 'CONTAINERS_TO_STORE_QUEUE');
    // await queueUpload(rack4[0], 'CONTAINERS_TO_STORE_QUEUE');
    //
    // console.log(shelf_rack[0], shelf[0], tube[0], tube1[0], rack1[0], rack2[0], rack3[0],rack4[0],box[0]);
    //
    //
    // console.log(freezer[0], shelf_rack[0], shelf[0], tube[0], tube1[0], rack1[0], rack2[0], rack3[0],rack4[0],box[0]);
    // await addExistingContainer('ship11', 'BALTIMORE_AVAILABLE_CONTAINERS', 'SHIPMENT');
    // await newLocationValueBulkUpdate(runName, 'BALTIMORE');
//     stepo 18
// await newLocationValueBulkUpdate(runName, 'BALTIMORE');

    // 25714
    // Put the <tube> into <rack1>_A.1
    // Put the <tube1> into <rack3>_A.1
    // Put <rack1> into <shelf_rack>_A.1
    // Put <rack2> into <ship>
    // Put <box> into <shelf>

    ////ПРОВЕРИТЬ ФУНКЦИЮ updateLocationWithPosition!!!!!!!!!
    // await updateLocationWithPosition(tube[0], rack1[0], 'A.1');
    // await updateLocationWithPosition(tube1[0], rack3[0], 'A.1');
    // await updateLocationWithPosition(rack1[0], shelf_rack[0], 'A.1');

    // await updateLocation(rack2[0], 'ship11');
    // await updateLocation(box[0], shelf[0]);

    // console.log(shelf_rack[0], shelf[0], tube[0], tube1[0], rack1[0], rack2[0], rack3[0],rack4[0],box[0]);


    // // console.log(freezer[0], shelf_rack[0], shelf[0], tube[0], tube1[0], rack1[0], rack2[0], rack3[0],rack4[0],box[0]);

    // console.log(shelf_rack[0], rack3[0],rack4[0]); //проапдейтить файл csv
    // console.log(tube[0], tube1[0], rack1[0], rack2[0], rack4[0], box[0]); //нет в очереди container_to_store
// 25714

};
main25663();

// 25663.js

