import {
    createSpecimen,
    putAnySpecimenInTube
} from "./functions.js";
import {createOneTube, getArrayWithTubes, queueUpload } from "./tube-types.js";

const main22508 = async () => {


    const arr = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 3);
    await createSpecimen('PLASMA', 'pl_test')
    // const arr_dis = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'DISPOSAL', 1);
    // const arr_fl = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    console.log(arr);
    await putAnySpecimenInTube(arr[0], 500, 'pl_test');
    // await createSpecimen('CF_DNA', 'CF_test')
    // const rack = await getArrayWithTubes('0.5_ML_FLUIDX_RACK','BALTIMORE_PROCESSING_LABORATORY', 3);
    // const rack_05_1 = rack[0];
    // const rack_05_2 = rack[1];
    // const rack_05_child = rack[2];
    // const arr = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_PROCESSING_LABORATORY', 3);
    // const tube1_09 = await createOneTube('0.9_ML_FLUIDX','BALTIMORE_PROCESSING_LABORATORY');
    // const tube1_10 = await createOneTube('1ML_THERMO_MATRIX_2D','BALTIMORE_PROCESSING_LABORATORY');
    //
    // const tube_05_child = await createOneTube('0.5_ML_FLUIDX',`${rack_05_child}_A.1`);
    // const rack_09 = await createOneTube('0.9_ML_FLUIDX_RACK','BALTIMORE_PROCESSING_LABORATORY');
    // const rack_10 = await createOneTube('1_ML_MATRIX_RACK','BALTIMORE_PROCESSING_LABORATORY');
    // await arr.forEach(function(item, index) {
    //    putAnySpecimenInTube(item, 500, 'CF_test');
    // });
    //
    // await putAnySpecimenInTube(tube1_09, 500, 'CF_test');
    // await putAnySpecimenInTube(tube1_10, 500, 'CF_test');
    // await putAnySpecimenInTube(tube_05_child, 500, 'CF_test');
    // await arr.forEach(function(item, index) {
    //     queueUpload(item, 'GENERIC_CFDNA_RACK_UPDATE_QUEUE');
    // });
    // await queueUpload(tube1_09, 'GENERIC_CFDNA_RACK_UPDATE_QUEUE');
    // await queueUpload(tube1_10, 'GENERIC_CFDNA_RACK_UPDATE_QUEUE');
    // await queueUpload(tube_05_child, 'GENERIC_CFDNA_RACK_UPDATE_QUEUE');
    // console.log(arr, tube1_09, tube1_10, tube_05_child);
    // console.log(rack_05_1, rack_05_2, rack_05_child, rack_09, rack_10);


// // //Steps 34-41
//         // x3 0.5 FluidX tubes <tubeNotInQ>,<tubeInProgress>,<tubeOnHold>, <tubeQs>
//     const arr2 = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 4);
//         // console.log(tubeNotInQ, tubeInProgress, tubeOnHold, tubeQs);
//     await arr2.forEach(function(item, index) {
//        putAnySpecimenInTube(item, 500, 'CF_test');
//     });
//     // x2 0.5 FluidX Rack <rackInProgress>,<rackQs>
//     const racks = await getArrayWithTubes('0.5_ML_FLUIDX_RACK', 'BALTIMORE_AVAILABLE_CONTAINERS', 2);
//
//     await queueUpload(arr2[1], 'GENERIC_CFDNA_RACK_UPDATE_QUEUE');///??
//     await queueUpload(arr2[2], 'GENERIC_CFDNA_RACK_UPDATE_QUEUE');
//
//     // x1 0.5 FluidX Rack in CAMBRIDGE AVAILABLE CONTAINERS <rackCambridge>
//     const rackCambridge = await createOneTube('0.5_ML_FLUIDX_RACK','CAMBRIDGE_AVAILABLE_CONTAINERS');
//     console.log(arr2);
//     console.log(racks, rackCambridge);
//     // [ '77SFFS4', 'CUN622S', 'P22PP7H', '75HPFX4' ]
//     // tubeNotInQ, tubeInProgress, tubeOnHold, tubeQs
//     //
//     // racks, rackCambridge
//     // [ 'P6A4FP0', '910CPAA' ] A91XPK4
//     // <rackInProgress>,<rackQs>
};
main22508();



// 22508.js


