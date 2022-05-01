import {
    createOneTube, createOneTubeNew,
    creatMaterialLot
} from "./functions.js";
import {getArrayWithTubes, queueUpload } from "./tube-types.js";
import {
    createSpecimen,
    putAnySpecimenInTube,
    putContainerInAnyQueue,
    updateLocationWithPosition
} from "./functions.js";



const main20410 = async () => {

    // const rack = await createOneTubeNew('0.5_ML_FLUIDX_RACK', 'BALTIMORE_AVAILABLE_CONTAINERS');
    // console.log(rack);
    // const rack2 = await createOneTubeNew('0.5_ML_FLUIDX_RACK', 'BALTIMORE_AVAILABLE_CONTAINERS');
    // const rack3 = await createOneTubeNew('0.5_ML_FLUIDX_RACK', 'BALTIMORE_AVAILABLE_CONTAINERS');


    // const tube5 = await createOneTubeNew('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS');
    // const arr = await getArrayWithTubes('0.5_ML_FLUIDX', 'FH35H2A_A.2', 4);
    // const tube1 = await createOneTubeNew('0.5_ML_FLUIDX', '20N8AFU_A.2');
    // const tube2 = await createOneTubeNew('0.5_ML_FLUIDX', '20N8AFU_A.3');
    // const tube3 = await createOneTubeNew('0.5_ML_FLUIDX', '20N8AFU_A.4');
    // const tube4 = await createOneTubeNew('0.5_ML_FLUIDX', '20N8AFU_A.5');
//     const tube5 = await createOneTubeNew('0.5_ML_FLUIDX', '20N8AFU_A.5');


    // await createSpecimen("PLASMA", "plasma1");
    // await createSpecimen("SERUM", "serum1");
    await createSpecimen("BLOOD", "blood1");
    // const arr = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_ACCESSIONING_LABORATORY', 5);

    // COBAS_SAMPLE_CUP
    const arr = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 4);
    // await putAnySpecimenInTube(tube1, 109, "plasma1");
    // await putAnySpecimenInTube(tube2, 109, "serum1");
    // await putAnySpecimenInTube(tube3, 109, "serum1");
    // await putAnySpecimenInTube(tube4, 109, "serum1");
    // [ 'U021USS', 'XH04NN7', '6HS17SX', '6KP82SK' ]



    await putAnySpecimenInTube(arr[0], 109, "plasma1");
    await putAnySpecimenInTube(arr[1], 109, "plasma1");
    await putAnySpecimenInTube(arr[2], 109, "plasma1");
    // await putAnySpecimenInTube(arr[3], 109, "serum1");
    // await putAnySpecimenInTube('NUX8F31', 200, "blood1");

    // const arr = ['X5F01PC', 'U0XHP91', '64CH4SN', 'S7KS9F9', '4UPXK90'];
    await arr.forEach(function (item, index) {
        updateLocationWithPosition(arr[index],  rack, `A.${index + 1}`);

    });

    // await updateLocationWithPosition(arr[0],  '6UUK29P', "A.1");
    // await updateLocationWithPosition(arr[1],  '6UUK29P', "A.2");
    // await updateLocationWithPosition(arr[2],  '6UUK29P', "A.3");
    // await updateLocationWithPosition(arr[3],  '6UUK29P', "A.4");
    //


    await queueUpload(rack, 'COBAS_SAMPLE_SETUP_QUEUE');
    // await queueUpload(rack2, 'COBAS_SAMPLE_SETUP_QUEUE');
    // await queueUpload(rack3, 'COBAS_SAMPLE_SETUP_QUEUE');
    // ['S1PCU62', 'N3A17PA', '1KA0NN8', '7N3KHU9']; //что
    // [ 'UF094SP', 'N00SX5K', '6A4NN9N', '34HSXA3' ] //куда

    // console.log(rack,rack2,rack3);

};
main20410();

// 94A7CAS 9KX9KK7 CA650XU
// 304KUAS rack4
// HX13KK7 rack5

// 'U26XNK5', 'NU2HC55', '5PSCS05', 'N3C41XU', '28XKSF8' tubes

// 20410.js
// BALTIMORE_PROCESSING_LABORATORY
// CAMBRIDGE_AVAILABLE_CONTAINERS
// BALTIMORE_AVAILABLE_CONTAINERS
// CAMBRIDGE_PROCESSING_LABORATORY
//BALTIMORE
// CAMBRIDGE
// DISPOSAL
//ORPHANS
