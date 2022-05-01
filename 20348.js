import {getArrayWithTubes, queueUpload} from "./tube-types.js";
import {addExistingContainer, updateLocationWithPosition, updateLocation} from "./functions.js";

const main20348 = async () => {
    // Create "MINUS20_FREEZER" as <freezer> choose "Default Location" -CAMBRIDGE_AVAILABLE_CONTAINERS;
    // Create "Shelf rack 4x5" as <shelf_rack> choose "Default Location" - <freezer>;
    // Create "1ml Matrix Rack" as <rack1>  choose "Default Location" - <shelf_rack_A.1>
    // Create "1 mL Thermo 2D Matrix" as <tube1> choose "Default Location" - <rack_A.1>

    const freezer = await getArrayWithTubes('MINUS20_FREEZER', 'CAMBRIDGE_AVAILABLE_CONTAINERS', 1);
    const shelf_rack = await getArrayWithTubes('SHELF_RACK4x5',freezer[0], 1);
    const rack1 = await getArrayWithTubes('1_ML_MATRIX_RACK',`${shelf_rack[0]}_A.1`, 1);
    const tube1 = await getArrayWithTubes('1ML_THERMO_MATRIX_2D',`${rack1[0]}_A.1`, 1);


    const tube2 = await getArrayWithTubes('1ML_THERMO_MATRIX_2D','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    const tube3 = await getArrayWithTubes('1ML_THERMO_MATRIX_2D','ORPHANS', 1);

    await queueUpload(tube1[0], 'CONTAINERS_TO_STORE_QUEUE');
    await queueUpload(tube2[0], 'CONTAINERS_TO_STORE_QUEUE');
    await queueUpload(tube3[0], 'CONTAINERS_TO_STORE_QUEUE');


    console.log(tube1[0], tube2[0], tube3[0], freezer[0], shelf_rack[0],rack1[0]);

};
// main20348();

// // 20348.js

