import {getArrayWithTubes} from "./tube-types.js";
    import {
    checkContainerInRunPooling,
    createAnyRun,
    createSpecimen,
    putAnySpecimenInTube,
        putContainerInContainersToStoreQueue
    } from "./functions.js";
    import {date, upperCaseMonth} from "./index.js";
    const contentPoolingTransferRun = `CONTAINER_CONTENT_POOLING_TRANSFER_${date}${upperCaseMonth}21_190`;
    import axios from "axios";
    import {config} from "./creationContainers.js";
    // const run = 'CONTAINER_CONTENT_POOLING_TRANSFER_19JUL21_7';

// Go to Create Containers
// Create "50 ml 4x4 Box" - <box>
//     Create "50 mL Eppendorf Conical" - <tube1>
//     Create "1ml Matrix Rack" - <rack>
//     Create "SHELF_RACK3x7" - <shelf>


createAnyRun
const main13043 = async () => {
    // await createSpecimen("BLOOD", "BLOOD1");
    // const run = await createAnyRun(contentPoolingTransferRun);
    // //

    // const box = await getArrayWithTubes('50_ML_4X4_BOX','BALTIMORE_AVAILABLE_CONTAINERS', 1); '2F9CC8C', '1U28FSN'
    // const tube1 = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE','BALTIMORE_AVAILABLE_CONTAINERS', 1); 'AKX5H21', '3PAN2A1'
    // const rack = await getArrayWithTubes('1ML_THERMO_MATRIX_2D','BALTIMORE_AVAILABLE_CONTAINERS', 1);'N8F3C7X', '59K7SXF'
    // const shelf = await getArrayWithTubes('SHELF_RACK3x7','BALTIMORE_AVAILABLE_CONTAINERS', 1);'3UF2N7X', 'U86CNA4'
    await putContainerInContainersToStoreQueue('3PAN2A1');
    // const box12 = await getArrayWithTubes('50_ML_4X4_BOX','CAMBRIDGE_AVAILABLE_CONTAINERS', 1);
    // const tube112 = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE','CAMBRIDGE_AVAILABLE_CONTAINERS', 1);A10P2UX
    // const rack12 = await getArrayWithTubes('1ML_THERMO_MATRIX_2D','CAMBRIDGE_AVAILABLE_CONTAINERS', 1);USS6F14
    // const shelf12 = await getArrayWithTubes('SHELF_RACK3x7','CAMBRIDGE_AVAILABLE_CONTAINERS', 1);

    // const box13 = await getArrayWithTubes('50_ML_4X4_BOX','THRIVE', 1);
    // const tube113 = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE','THRIVE', 2);
    // const rack13 = await getArrayWithTubes('1ML_THERMO_MATRIX_2D','THRIVE', 1);
    // const shelf13 = await getArrayWithTubes('SHELF_RACK3x7','THRIVE', 1);
    //
    // const box14 = await getArrayWithTubes('50_ML_4X4_BOX','UNDEFINED', 1);
    // const tube114 = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE','UNDEFINED', 1);
    // const rack14 = await getArrayWithTubes('1ML_THERMO_MATRIX_2D','UNDEFINED', 1);
    // const shelf14 = await getArrayWithTubes('SHELF_RACK3x7','UNDEFINED', 1);

    // await putContainerInContainersToStoreQueue(box12[0]);
    // await putContainerInContainersToStoreQueue(tube112[0]);
    // await putContainerInContainersToStoreQueue(rack12[0]);
    // await putContainerInContainersToStoreQueue(shelf12[0]);

    // await putContainerInContainersToStoreQueue('');
    // await putContainerInContainersToStoreQueue('');
    // await putContainerInContainersToStoreQueue('');
    // await putContainerInContainersToStoreQueue('');


    // // // BALTIMORE
    // const arr = await getArrayWithTubes('0.5_ML_FLUIDX','BALTIMORE_AVAILABLE_CONTAINERS', 2);
    // const balt_source_1 = arr[0];
    // const balt_destiny_1 = arr[1];
    //
    // const arrRack = await getArrayWithTubes('0.5_ML_FLUIDX_RACK','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const balt_rack_1 = arrRack[0];
    //
    // const tubeBalt1 = await getArrayWithTubes('0.5_ML_FLUIDX',`${balt_rack_1}_A.1`, 1);
    // const balt_rack_tube_source_A1 = tubeBalt1[0];
    //
    // const tubeBalt2 = await getArrayWithTubes('0.5_ML_FLUIDX',`${balt_rack_1}_A.2`, 1);
    // const balt_rack_tube_destiny_A2 = tubeBalt2[0];
    //
    // await putAnySpecimenInTube(balt_source_1, 100, "BLOOD1");
    // await putAnySpecimenInTube(balt_rack_tube_source_A1, 100, "BLOOD1");
    //
    //
    // // CAMBRIDGE
    // const arr2 = await getArrayWithTubes('0.5_ML_FLUIDX','CAMBRIDGE_AVAILABLE_CONTAINERS', 2);
    // const camb_source_1 = arr2[0];
    // const camb_destiny_1 = arr2[1];
    //
    // const arrRackCam = await getArrayWithTubes('0.5_ML_FLUIDX_RACK','CAMBRIDGE_AVAILABLE_CONTAINERS', 1);
    // const camb_rack_1 = arrRackCam[0];
    //
    // const tubeCam1 = await getArrayWithTubes('0.5_ML_FLUIDX',`${camb_rack_1}_A.1`, 1);
    // const camb_rack_tube_source_A1 = tubeCam1[0];
    //
    // const tubeCam2 = await getArrayWithTubes('0.5_ML_FLUIDX',`${camb_rack_1}_A.2`, 1);
    // const camb_rack_tube_destiny_A2 = tubeCam2[0];
    //
    // await putAnySpecimenInTube(camb_source_1, 100, "BLOOD1");
    // await putAnySpecimenInTube(camb_rack_tube_source_A1, 100, "BLOOD1");
    //
    //
    // // // /  / ORPHANS/THR
    // const arrOrph = await getArrayWithTubes('0.5_ML_FLUIDX','ORPHANS', 2);
    // const orph_source_1 = arrOrph[0];
    // const orph_destiny_1 = arrOrph[1];
    // await putAnySpecimenInTube(orph_source_1, 100, "BLOOD1");
    //
    // const arrThr = await getArrayWithTubes('0.5_ML_FLUIDX','THRIVE', 2);
    // const THR_source_1 = arrThr[0];
    // const THR_destiny_1 = arrThr[1];
    // await putAnySpecimenInTube(THR_source_1, 100, "BLOOD1");

    // console.log(camb_destiny_1, camb_rack_tube_destiny_A2, THR_destiny_1,balt_destiny_1, orph_destiny_1, balt_rack_tube_destiny_A2,camb_source_1,balt_destiny_1,camb_rack_tube_source_A1,orph_destiny_1,THR_source_1,balt_rack_tube_destiny_A2)


    // await checkContainerInRunPooling(camb_destiny_1, run);
    // await checkContainerInRunPooling(camb_rack_tube_destiny_A2, run);
    // await checkContainerInRunPooling(balt_destiny_1, run);
    // await checkContainerInRunPooling(balt_rack_tube_destiny_A2, run);
    // await checkContainerInRunPooling(THR_destiny_1, run);
    // await checkContainerInRunPooling(orph_destiny_1, run);



    // // FOR CAMBRIDGE SITE
    // //ВВЕСТИ В РАН - не войдут
    // console.log(`THR_destiny_1: ${THR_destiny_1}`);
    // console.log(`balt_destiny_1: ${balt_destiny_1}`);
    // console.log(`balt_rack_tube_destiny_A2: ${balt_rack_tube_destiny_A2}`);
    //
    // //ВВЕСТИ В РАН -войдут
    // console.log(`orph_destiny_1: ${orph_destiny_1}`);
    // console.log(`camb_destiny_1: ${camb_destiny_1}`);
    // console.log(`camb_rack_tube_destiny_A2: ${camb_rack_tube_destiny_A2}`);
    //
    // // // Scan <balt_rack_tube_source_A1> as "Source Container" for <orph_destiny_1>
    // console.log(`balt_rack_tube_source_A1: ${balt_rack_tube_source_A1}`); //не подойдет
    // console.log(`orph_destiny_1: ${orph_destiny_1}`);
    // // balt_rack_tube_source_A1: C60KS2H
    // // orph_destiny_1: CA7U2C0

    // //  // Scan <camb_rack_tube_source_A1> as "Source Container" for <orph_destiny_1>
    // console.log(`camb_rack_tube_source_A1: ${camb_rack_tube_source_A1}`); //подойдет
    // console.log(`orph_destiny_1: ${orph_destiny_1}`);
    // // camb_rack_tube_source_A1: 3A2S7NH
    // // orph_destiny_1: CA7U2C0
    //
    // // // Scan <THR_source_1> as "Source Container" for <camb_rack_tube_destiny_A2>
    // console.log(`THR_source_1: ${THR_source_1}`);
    // console.log(`balt_rack_tube_destiny_A2: ${camb_rack_tube_destiny_A2}`);
    // // THR_source_1: 1XSH71P
    // // camb_rack_tube_destiny_A2: CKS32S1
    //
    // // // Scan <orph_source_1> as "Source Container" for <camb_rack_tube_destiny_A2>
    // console.log(`orph_source_1: ${orph_source_1}`);
    // console.log(`camb_rack_tube_destiny_A2: ${camb_rack_tube_destiny_A2}`);
    // // orph_source_1: 7C2S6XP
    // // camb_rack_tube_destiny_A2: CKS32S1
    //
    // // Scan  <camb_source_1>  as "Source Container" for <camb_destiny_1>
    // // console.log(`camb_source_1: ${camb_source_1}`);
    // // console.log(`camb_destiny_1: ${camb_destiny_1}`);
    // //
    // // camb_source_1: NU0K5S3
    // // camb_destiny_1: P43XS5A

}

main13043();

// 13043_draft.js

    // FOR BALTIMORE SITE

    // //ВВЕСТИ В РАН - не войдут
    // console.log(`THR_destiny_1: ${THR_destiny_1}`);
    // console.log(`camb_destiny_1: ${camb_destiny_1}`);
    // console.log(`camb_rack_tube_destiny_A2: ${camb_rack_tube_destiny_A2}`);
    //
    // //ВВЕСТИ В РАН - войдут
    // console.log(`orph_destiny_1: ${orph_destiny_1}`);
    // console.log(`balt_destiny_1: ${balt_destiny_1}`);
    // console.log(`balt_rack_tube_destiny_A2: ${balt_rack_tube_destiny_A2}`);


    //  // Scan <camb_rack_tube_source_A1> as "Source Container" for <orph_destiny_1>
    // console.log(`camb_rack_tube_source_A1: ${camb_rack_tube_source_A1}`);
    //  console.log(`orph_destiny_1: ${orph_destiny_1}`);
    //  camb_rack_tube_source_A1: 3A2S7NH
    //  orph_destiny_1: CA7U2C0

    // // Scan <balt_rack_tube_source_A1> as "Source Container" for <orph_destiny_1>
    // console.log(`balt_rack_tube_source_A1: ${balt_rack_tube_source_A1}`);
    // console.log(`orph_destiny_1: ${orph_destiny_1}`);
    // balt_rack_tube_source_A1: C60KS2H
    // orph_destiny_1: CA7U2C0

    // // Scan <THR_source_1> as "Source Container" for <balt_rack_tube_destiny_A2>
    // console.log(`THR_source_1: ${THR_source_1}`);
    // console.log(`balt_rack_tube_destiny_A2: ${balt_rack_tube_destiny_A2}`);
    // THR_source_1: 1XSH71P
    // balt_rack_tube_destiny_A2: CKS32S1
    //
    // // Scan <orph_source_1> as "Source Container" for <balt_rack_tube_destiny_A2>
    // console.log(`orph_source_1: ${orph_source_1}`);
    // console.log(`balt_rack_tube_destiny_A2: ${balt_rack_tube_destiny_A2}`);

    // orph_source_1: 7C2S6XP
    // balt_rack_tube_destiny_A2: CKS32S1

    // Scan  <balt_source_1>  as "Source Container" for <balt_destiny_1>
    // console.log(`balt_source_1: ${balt_source_1}`);
    // console.log(`balt_destiny_1: ${balt_destiny_1}`);
    //
    // balt_source_1: NU0K5S3
    // balt_destiny_1: P43XS5A

