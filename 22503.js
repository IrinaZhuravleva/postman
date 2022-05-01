import {
    createSpecimen,
    putAnySpecimenInTube
} from "./functions.js";
import {createOneTube, getArrayWithTubes, queueUpload } from "./tube-types.js";

const main22503 = async () => {
    // await createSpecimen('CF_DNA', 'CF_test')
    // const arr = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_PROCESSING_LABORATORY', 3);
    // const rack = await getArrayWithTubes('0.5_ML_FLUIDX_RACK','BALTIMORE_PROCESSING_LABORATORY', 2);
    // const rack_05 = rack[0];
    // const rack_05_location = rack[1];
    // const matrix_rack_location = await createOneTube('1_ML_MATRIX_RACK','BALTIMORE_PROCESSING_LABORATORY');
    // const rack_location_09 = await createOneTube('0.9_ML_FLUIDX_RACK','BALTIMORE_PROCESSING_LABORATORY');
    // await arr.forEach(function(item, index) {
    //    putAnySpecimenInTube(item, 500, 'CF_test');
    // });
    const arr = [ 'AU74PS3', 'UU6F30K', '7H26AFK' ];
    await arr.forEach(function(item, index) {
        queueUpload(item, 'GENERIC_CFDNA_RACK_UPDATE_QUEUE');
    });

    // console.log(arr, rack, rack_location_09, matrix_rack_location);
    // [ 'AU74PS3', 'UU6F30K', '7H26AFK' ] [ '16UK7PC', 'F6N3S5U' ] C393KKU 23FF1KS
    // F6N3S5U_A.1
};
main22503();



// 22503.js


