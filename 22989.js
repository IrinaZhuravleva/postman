import {getArrayWithTubes} from "./tube-types.js";
import {checkContainerInRunPooling, createAnyRun, createSpecimen, putAnySpecimenInTube} from "./functions.js";
import {date, upperCaseMonth} from "./index.js";
const contentPoolingTransferRun = `CONTAINER_CONTENT_POOLING_TRANSFER_${date}${upperCaseMonth}21_190`;
import axios from "axios";
import {config} from "./creationContainers.js";
// const run = 'CONTAINER_CONTENT_POOLING_TRANSFER_19JUL21_7';

const main22989 = async () => {
    await createSpecimen("BLOOD", "BLOOD1");
    const run = await createAnyRun(contentPoolingTransferRun);
    //
    // // BALTIMORE
    const arr = await getArrayWithTubes('0.5_ML_FLUIDX','BALTIMORE_AVAILABLE_CONTAINERS', 2);
    const balt_source_1 = arr[0];
    const balt_destiny_1 = arr[1];

    const arrRack = await getArrayWithTubes('0.5_ML_FLUIDX_RACK','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    const balt_rack_1 = arrRack[0];

    const tubeBalt1 = await getArrayWithTubes('0.5_ML_FLUIDX',`${balt_rack_1}_A.1`, 1);
    const balt_rack_tube_source_A1 = tubeBalt1[0];

    const tubeBalt2 = await getArrayWithTubes('0.5_ML_FLUIDX',`${balt_rack_1}_A.2`, 1);
    const balt_rack_tube_destiny_A2 = tubeBalt2[0];

    await putAnySpecimenInTube(balt_source_1, 100, "BLOOD1");
    await putAnySpecimenInTube(balt_rack_tube_source_A1, 100, "BLOOD1");


    // CAMBRIDGE
    const arr2 = await getArrayWithTubes('0.5_ML_FLUIDX','CAMBRIDGE_AVAILABLE_CONTAINERS', 2);
    const camb_source_1 = arr2[0];
    const camb_destiny_1 = arr2[1];

    const arrRackCam = await getArrayWithTubes('0.5_ML_FLUIDX_RACK','CAMBRIDGE_AVAILABLE_CONTAINERS', 1);
    const camb_rack_1 = arrRackCam[0];

    const tubeCam1 = await getArrayWithTubes('0.5_ML_FLUIDX',`${camb_rack_1}_A.1`, 1);
    const camb_rack_tube_source_A1 = tubeCam1[0];

    const tubeCam2 = await getArrayWithTubes('0.5_ML_FLUIDX',`${camb_rack_1}_A.2`, 1);
    const camb_rack_tube_destiny_A2 = tubeCam2[0];

    await putAnySpecimenInTube(camb_source_1, 100, "BLOOD1");
    await putAnySpecimenInTube(camb_rack_tube_source_A1, 100, "BLOOD1");


    // // /  / ORPHANS/THR
    const arrOrph = await getArrayWithTubes('0.5_ML_FLUIDX','ORPHANS', 2);
    const orph_source_1 = arrOrph[0];
    const orph_destiny_1 = arrOrph[1];
    await putAnySpecimenInTube(orph_source_1, 100, "BLOOD1");

    const arrThr = await getArrayWithTubes('0.5_ML_FLUIDX','THRIVE', 2);
    const THR_source_1 = arrThr[0];
    const THR_destiny_1 = arrThr[1];
    await putAnySpecimenInTube(THR_source_1, 100, "BLOOD1");

    // console.log(camb_destiny_1, camb_rack_tube_destiny_A2, THR_destiny_1,balt_destiny_1, orph_destiny_1, balt_rack_tube_destiny_A2,camb_source_1,balt_destiny_1,camb_rack_tube_source_A1,orph_destiny_1,THR_source_1,balt_rack_tube_destiny_A2)


    // await checkContainerInRunPooling(camb_destiny_1, run);
    // await checkContainerInRunPooling(camb_rack_tube_destiny_A2, run);
    // await checkContainerInRunPooling(balt_destiny_1, run);
    // await checkContainerInRunPooling(balt_rack_tube_destiny_A2, run);
    // await checkContainerInRunPooling(THR_destiny_1, run);
    // await checkContainerInRunPooling(orph_destiny_1, run);



    // FOR CAMBRIDGE SITE
    //ВВЕСТИ В РАН - не войдут
    console.log(`THR_destiny_1: ${THR_destiny_1}`);
    console.log(`balt_destiny_1: ${balt_destiny_1}`);
    console.log(`balt_rack_tube_destiny_A2: ${balt_rack_tube_destiny_A2}`);

    //ВВЕСТИ В РАН -войдут
    console.log(`orph_destiny_1: ${orph_destiny_1}`);
    console.log(`camb_destiny_1: ${camb_destiny_1}`);
    console.log(`camb_rack_tube_destiny_A2: ${camb_rack_tube_destiny_A2}`);

    // // Scan <balt_rack_tube_source_A1> as "Source Container" for <orph_destiny_1>
    console.log(`balt_rack_tube_source_A1: ${balt_rack_tube_source_A1}`); //не подойдет
    console.log(`orph_destiny_1: ${orph_destiny_1}`);
    // balt_rack_tube_source_A1: C60KS2H
    // orph_destiny_1: CA7U2C0

    //  // Scan <camb_rack_tube_source_A1> as "Source Container" for <orph_destiny_1>
    console.log(`camb_rack_tube_source_A1: ${camb_rack_tube_source_A1}`); //подойдет
    console.log(`orph_destiny_1: ${orph_destiny_1}`);
    // camb_rack_tube_source_A1: 3A2S7NH
    // orph_destiny_1: CA7U2C0

    // // Scan <THR_source_1> as "Source Container" for <camb_rack_tube_destiny_A2>
    console.log(`THR_source_1: ${THR_source_1}`);
    console.log(`balt_rack_tube_destiny_A2: ${camb_rack_tube_destiny_A2}`);
    // THR_source_1: 1XSH71P
    // camb_rack_tube_destiny_A2: CKS32S1

    // // Scan <orph_source_1> as "Source Container" for <camb_rack_tube_destiny_A2>
    console.log(`orph_source_1: ${orph_source_1}`);
    console.log(`camb_rack_tube_destiny_A2: ${camb_rack_tube_destiny_A2}`);
    // orph_source_1: 7C2S6XP
    // camb_rack_tube_destiny_A2: CKS32S1

    // Scan  <camb_source_1>  as "Source Container" for <camb_destiny_1>
    // console.log(`camb_source_1: ${camb_source_1}`);
    // console.log(`camb_destiny_1: ${camb_destiny_1}`);
    //
    // camb_source_1: NU0K5S3
    // camb_destiny_1: P43XS5A

}

// main22989();

// 22989.js

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

