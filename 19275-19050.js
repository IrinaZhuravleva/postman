import {createKitWithTubes, createOneTube, getArrayWithTubes} from './tube-types.js'
import {
    createSpecimen,
    creatMaterialLot, creatMaterialLotWithTube, getSpecimenFromStorage, putAnySpecimenInTube
} from "./functions.js";
import {getStorage, getStoragePrintParent} from "./storage.js";
import axios from "axios";
import {addExistingContainer, updateLocationWithPosition, updateLocation} from "./functions.js";

const dates = "2021-08-12";
const lotNumber = "R-0000037";
const reagentType = "MAT000033";
const typeName = "WBC-FR8-C";

const main19275 = async () => {
    // const source1 = await createOneTube('1ML_THERMO_MATRIX_2D', 'BALTIMORE_AVAILABLE_CONTAINERS');
    //
    //
    // await creatMaterialLot(dates, lotNumber, reagentType);
    // console.log(source1);

    // await createSpecimen("PLASMA", "plasma1");
    // await putAnySpecimenInTube('NF7F5K1', 100, "plasma1");
    // await putAnySpecimenInTube('CPSC399', 100, "plasma1");
    // await getSpecimenFromStorage("NF7F5K1");
    // await getSpecimenFromStorage("CPSC399");

    // // Step 15
    // const rack1 = await createOneTube('0.5_ML_FLUIDX_RACK', 'BALTIMORE_AVAILABLE_CONTAINERS');
    // const rack2 = await createOneTube('0.5_ML_FLUIDX_RACK', 'BALTIMORE_AVAILABLE_CONTAINERS');
    // await updateLocationWithPosition("NF7F5K1", rack1, "A.1");
    // await updateLocationWithPosition("CPSC399", rack2, "A.1");
    // creatMaterialLotWithTube();

    await getStoragePrintParent("NF7F5K1");
    await getStoragePrintParent("CPSC399");
};

// main19275();

// 19275-19050.js