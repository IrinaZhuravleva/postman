import {createKitWithTubes, createOneTube, getArrayWithTubes, queueUpload} from './tube-types.js'
import {createCollectEventNew, collectionDate} from './collectionEvents.js'
import {
    createSpecimen,
    creatFormulatedMaterialLot,
    creatMaterialLot,
    getParentFromStorage,
    getQueueFromStorage,
    getSpecimenFromStorage,
    putAnySpecimenInTube,
    putContainerInAnyQueue
} from "./functions.js";
import {getStorage} from "./storage.js";
import axios from "axios";
import {addExistingContainer, updateLocationWithPosition, updateLocation} from "./functions.js";

const dates = "2021-10-21";
const lotNumber = "R-0000078";
const reagentType = "MAT000033";
const typeName = "WBC-FR8-C";

const main18816 = async () => {
    // const source1 = await createOneTube('1ML_THERMO_MATRIX_2D', 'BALTIMORE_AVAILABLE_CONTAINERS');
    //
    //
    // await creatMaterialLot(dates, lotNumber, reagentType);
    // console.log(source1);
    // console.log(desttube1, desttube2);
    // await getSpecimenFromStorage("75P4PCS");


};

main18816();

// 18816.js