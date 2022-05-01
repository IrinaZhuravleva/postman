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
import {getStorage, getStorageSpecimenVolume} from "./storage.js";
import axios from "axios";



const main24661 = async () => {

    // const rack = await createOneTubeNew('0.5_ML_FLUIDX_RACK', 'BALTIMORE_AVAILABLE_CONTAINERS');
    //
    // await createSpecimen("PLASMA", "plasma1");
    // await createSpecimen("SERUM", "serum1");
    //
    // const arr = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_ACCESSIONING_LABORATORY', 4);
    const arrDestination = await getArrayWithTubes('COBAS_SAMPLE_CUP', 'BALTIMORE_AVAILABLE_CONTAINERS', 4);

    // await putAnySpecimenInTube(arr[0], 110, "plasma1");
    // await putAnySpecimenInTube(arr[1], 260, "serum1");
    // await putAnySpecimenInTube(arr[2], 150, "serum1");
    // await putAnySpecimenInTube(arr[3], 261, "plasma1");


    // // await arr.forEach(function (item, index) {
    //   //     updateLocationWithPosition(arr[index],  '6UUK29P', `A.${index}`);
    //  // });

    // await updateLocationWithPosition(arr[0],  rack, "A.1");
    // await updateLocationWithPosition(arr[1],  rack, "A.2");
    // await updateLocationWithPosition(arr[2],  rack, "A.3");
    // await updateLocationWithPosition(arr[3],  rack, "A.4");
    //
    // await queueUpload(rack, 'COBAS_SAMPLE_SETUP_QUEUE');

    // // В самом конце, после загрузки csv
    // const spec = await getStorageSpecimenVolume(arrDestination[1]);

   // console.log(rack,arr);

};
main24661();


