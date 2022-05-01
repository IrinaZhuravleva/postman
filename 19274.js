import {getArrayWithTubes, queueUpload} from "./tube-types.js";
import {addExistingContainer, updateLocationWithPosition, updateLocation} from "./functions.js";

const main19274 = async () => {
    // Create "MINUS20_FREEZER" as <freezer>;
    // Create "Shelf rack 4x5" as <shelf_rack> choose "Default Location" - <freezer>;
    // Create "Shelf" as <shelf>;
    // Create "1 mL Thermo 2D Matrix" as <tube>,<tube1>;
    // Create "1ml Matrix Rack" as <rack1>, <rack2>, <rack3>, <rack4>;
    // Create "10 x 10 box" as <box>;

    // const freezer = await getArrayWithTubes('MINUS20_FREEZER', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const shelf = await getArrayWithTubes('SHELF','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const tube = await getArrayWithTubes('1ML_THERMO_MATRIX_2D','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const tube1 = await getArrayWithTubes('1ML_THERMO_MATRIX_2D','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const rack1 = await getArrayWithTubes('1_ML_MATRIX_RACK','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const rack2 = await getArrayWithTubes('1_ML_MATRIX_RACK','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const rack3 = await getArrayWithTubes('1_ML_MATRIX_RACK','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const rack4 = await getArrayWithTubes('1_ML_MATRIX_RACK','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const box = await getArrayWithTubes('BOX','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const shelf_rack = await getArrayWithTubes('SHELF_RACK4x5',freezer[0], 1);

    // await updateLocation()
    await queueUpload(tube[0], 'CONTAINERS_TO_STORE_QUEUE');
    await queueUpload(tube1[0], 'CONTAINERS_TO_STORE_QUEUE');
    await queueUpload(box[0], 'CONTAINERS_TO_STORE_QUEUE');
    await queueUpload(rack1[0], 'CONTAINERS_TO_STORE_QUEUE');
    await queueUpload(rack2[0], 'CONTAINERS_TO_STORE_QUEUE');
    await queueUpload(rack4[0], 'CONTAINERS_TO_STORE_QUEUE');

    await addExistingContainer('ship11', 'BALTIMORE_AVAILABLE_CONTAINERS', 'SHIPMENT');

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

    console.log(shelf_rack[0], shelf[0], tube[0], tube1[0], rack1[0], rack2[0], rack3[0],rack4[0],box[0]);


    // // console.log(freezer[0], shelf_rack[0], shelf[0], tube[0], tube1[0], rack1[0], rack2[0], rack3[0],rack4[0],box[0]);

    // console.log(shelf_rack[0], rack3[0],rack4[0]); //проапдейтить файл csv
    // console.log(tube[0], tube1[0], rack1[0], rack2[0], rack4[0], box[0]); //нет в очереди container_to_store


};
// main19274();

// 19274.js

