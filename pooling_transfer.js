import {getArrayWithTubes} from "./tube-types.js";
import {createSpecimen, createSpecimenPlasma, putAnySpecimenInTube, updateLocationWithPosition} from "./functions.js";

const main = async() => {
    // 22989
    // // - 2 x 0.5_ML_FLUIDX in BALTIMORE_AVAILABLE_CONTAINERS as <balt_destiny_1> and <balt_source_1>
    // // - 2 x 0.5_ML_FLUIDX in ORPHANS as <orph_destiny_1> and <orph_source_1>
    // // - 0.5_ML_FLUIDX_RACK in BALTIMORE_AVAILABLE_CONTAINERS as <balt_rack_1>
    // // - 0.5_ML_FLUIDX in <balt_rack_1>_A.1 as <balt_rack_tube_source_A1>
    // //     - 0.5_ML_FLUIDX in <balt_rack_1>_A.2 as <balt_rack_tube_destiny_A2>
    //
    // await createSpecimen('BLOOD','333')
    //
    // const balt_source = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 2);
    // const orphans = await getArrayWithTubes('0.5_ML_FLUIDX', 'ORPHANS', 2);
    // const balt_rack = await getArrayWithTubes('0.5_ML_FLUIDX_RACK', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const tubes = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 2);
    // const balt_rack_tube_source_A1 = await updateLocationWithPosition(tubes[0], balt_rack[0], 'A.1');
    // const balt_rack_tube_destiny_A2 = await updateLocationWithPosition(tubes[1], balt_rack[0], 'A.2');
    //
    //
    // // <balt_source_1>, <orph_source_1>, <balt_rack_tube_source_A1>
    // // orphans
    // //
    // // await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // await putAnySpecimenInTube(balt_source[0], 100,'333', 'ul');
    // await putAnySpecimenInTube(orphans[0], 100,'333', 'ul');
    // await putAnySpecimenInTube(balt_rack_tube_source_A1, 100,'333', 'ul');
    //
    // console.log(balt_source, orphans, balt_rack, tubes);
    // [ 'KN89HN3', '20NU0FU' ] [ 'XSP957C', '77K5SCP' ] [ 'NAA1A89' ] [ 'P74C5UP', '4HK4PC1' ]
    // await putAnySpecimenInTube('6U9C9NS', 100,'333', 'ul');
}

main();

// pooling_transfer.js
//







// pooling_transfer.js