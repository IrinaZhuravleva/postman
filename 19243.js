import {createKitWithTubes, createOneTube, getArrayWithTubes} from './tube-types.js'
import {
    createSpecimen,
    creatMaterialLot, creatMaterialLotWithTube, getSpecimenFromStorage, putAnySpecimenInTube, creatFormulatedMaterialLot
} from "./functions.js";
import {getStorage, getStoragePrintParent} from "./storage.js";
import axios from "axios";
import {addExistingContainer, updateLocationWithPosition, updateLocation} from "./functions.js";

const dates = "2021-08-13";

const formulatedLotNumber = "F-0000022";
const formulatedReagentType = "MAT000419";
// const reagentType = "MAT000069";
// const reagentType = "MAT000300";

const lotNumber = "R-0000050";
const reagentType = "MAT000033";
const typeName = "WBC-FR8-C";
// const typeName = "WBC-DUAL9-K";

// K70KU5F K70KU5F

const main19243 = async () => {
    // const tube = await createOneTube('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS');

    // const source1 = await createOneTube('PLATE_96', 'BALTIMORE_AVAILABLE_CONTAINERS');//
    //
    // RGT-19A-0531
    // await creatMaterialLot(dates, lotNumber, reagentType, typeName);
    //
    // await creatMaterialLotWithTube(dates, lotNumber, reagentType, typeName, tube);
    // await creatFormulatedMaterialLot(dates,"K70KU5F");
    // HKX45C9
        // const arr = await getArrayWithTubes('1ML_THERMO_MATRIX_2D','BALTIMORE_AVAILABLE_CONTAINERS', 8)
    // await createSpecimen("PLASMA", "plasma1");
    // await putAnySpecimenInTube('NF7F5K1', 100, "plasma1");
    // await putAnySpecimenInTube('CPSC399', 100, "plasma1");
    // await getSpecimenFromStorage("NF7F5K1");
    // await getSpecimenFromStorage("CPSC399");
    // console.log(source1);
    // // Step 15
    // const rack1 = await createOneTube('0.5_ML_FLUIDX_RACK', 'BALTIMORE_AVAILABLE_CONTAINERS');
    // const rack2 = await createOneTube('0.5_ML_FLUIDX_RACK', 'BALTIMORE_AVAILABLE_CONTAINERS');
    // await updateLocationWithPosition("NF7F5K1", rack1, "A.1");
    // await updateLocationWithPosition("CPSC399", rack2, "A.1");
    // creatMaterialLotWithTube();

    // await getStoragePrintParent("NF7F5K1");
    // await getStoragePrintParent("CPSC399");
};


main19243();

// 19243.js