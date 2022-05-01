import {
    putAnySpecimenInTube,
    createSpecimen,
    putContainerInAnyQueue,
    putContainerInContainersToStoreQueue,
    getParentFromStorage,
    createAnyRunNew,
    getSpecimenFromStorage,
    startAnyBloodProcessingRunNew,
    creatFormulatedMaterialLot,
    createMaterialLotWithKit,
    creatMaterialLotWithTube,
    getGeneralInfoFromStorage,
    getRunContext,
    getQueueFromStorage,
    checkRunContextGetServerStatus,
    checkRunContextGetIndexPlatemap
} from "./functions.js";
import {getArrayWithTubes, queueUpload} from "./tube-types.js";
import {date, monthInNumber, upperCaseMonth} from "./index.js";
import axios from "axios";
import {config} from "./creationContainers.js";
import fs from "fs"

const main = async() => {
    const runNumber = '2';
    // // 26520
    const lotNumber = "R-0001030";
    const lotNumber1 = "R-0001041";
    const lotNumber2 = "R-0001042";
    const lotNumber3 = "R-0001043";
    const lotNumber4 = "R-0001044";
    const reagentTypeGSPFormulated = "MAT000323";
    const reagentType1 = "MAT000321";
    const reagentType2 = "MAT000320";
    const reagentType3 = "MAT000322";
    const reagentType4 = "MAT000210";
    const typeName = "WBC-FR8-C";
    const dates = `2021-${monthInNumber}-${date}`;
    const well = await getArrayWithTubes('DEEP_WELL_BLOCK_96', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    const tubes = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 3);
    // await creatMaterialLotWithTube(dates, lotNumber1, reagentType1, '6HA3S6C');
    // '6HA3S6C','FH9C19F', 'HCNU328'

    await creatMaterialLotWithTube(dates, lotNumber1, reagentType1, tubes[0])
    await creatMaterialLotWithTube(dates, lotNumber2, reagentType2, tubes[1]);
    await creatMaterialLotWithTube(dates, lotNumber3, reagentType3, tubes[2]);
    // const pcr_last_destination = '7CC1K0F';
    // const pcr_first_input = '7CC1K0F';
    // await getSpecimenFromStorage(`${pcr_first_input}_A.1`);
    // await getSpecimenFromStorage(`${pcr_first_input}_A.7`);
    // await getParentFromStorage(pcr_first_input);

    // await getRunContext('CFDNA_SV_LIBRARY_CONSTRUCTION_01NOV21_9');
    // await getRunContext('CFDNA_SV_SPLIT_PHOS_AMP_CLEANUP_01NOV21_3');
    // await getRunContext('CFDNA_SV_LIBRARY_CLEANUP_01NOV21_3');
    // await getRunContext('CFDNA_SV_LAMBDA_EXO_GSP1_01NOV21_5');

    // 26521
    // const well = await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_PROCESSING_LABORATORY', 2);
    // await putContainerInAnyQueue(well[0],'CFDNA_SV_LAMBDA_EXO_GSP1_QUEUE');
    // await putContainerInAnyQueue(well[1],'CFDNA_SV_LAMBDA_EXO_GSP1_QUEUE');

    // await createSpecimen('CF_DNA_LC', 'CF_DNA_LC_gsp1');
    // await putAnySpecimenInTube('39NSP6K_A.1', 50, 'CF_DNA_LC_gsp1');

    // // 26628


    // const well = await getArrayWithTubes('DEEP_WELL_BLOCK_96', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const pcr = await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_PROCESSING_LABORATORY', 1);
    // await putContainerInAnyQueue(well[0],'CFDNA_SV_LAMBDA_EXO_GSP1_QUEUE');
    // await putContainerInAnyQueue(pcr[0],'CFDNA_SV_LAMBDA_EXO_GSP1_QUEUE');
    // await putContainerInAnyQueue('630HSUS','CFDNA_SV_LAMBDA_EXO_GSP1_QUEUE');

    // 26647

    // el plate 9C4AK2K

    // const plate = await getArrayWithTubes('PLATE_96', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const pcr = await getArrayWithTubes('PLATE_96_PCR', 'DISPOSAL', 1);
    // const pcr2 = await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const well = await getArrayWithTubes('DEEP_WELL_BLOCK_96', 'DISPOSAL', 1);
    // const well2 = await getArrayWithTubes('DEEP_WELL_BLOCK_96', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);

    // const pcr22 = await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // await creatMaterialLotWithTube(dates, lotNumber4, reagentType4, pcr22[0])

    // 27334
    // const pcr = await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_PROCESSING_LABORATORY', 2);
    // await putContainerInAnyQueue(pcr[0],'CFDNA_SV_GSP2_QUEUE');
    // await putContainerInAnyQueue(pcr[1],'CFDNA_SV_GSP2_QUEUE');

    // await createSpecimen('CF_DNA_SPLIT_LC_GSP2', 'CF_DNA_LC_gsp2');
    // await putAnySpecimenInTube('7C4UA1P_A.1', 100, 'CF_DNA_LC_gsp2');

    // 27365
    // 96 well plate in BALTIMORE_AVAILABLE_CONTAINERS
    // 96 well PCR plate in Disposal
    // 96 well PCR plate (two containers) in BALTIMORE_AVAILABLE_CONTAINERS
    // 96 Deep Well Block in Disposal
    // 96 Deep Well Block in BALTIMORE_AVAILABLE_CONTAINERS
    // Trough 96 in Disposal
    // Trough 96 in BALTIMORE_AVAILABLE_CONTAINERS

    // const plate = await getArrayWithTubes('PLATE_96', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const well = await getArrayWithTubes('DEEP_WELL_BLOCK_96', 'DISPOSAL', 1);
    // const well2 = await getArrayWithTubes('DEEP_WELL_BLOCK_96', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const pcr = await getArrayWithTubes('PLATE_96_PCR', 'DISPOSAL', 1);
    // const pcr2 = await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_AVAILABLE_CONTAINERS', 2);
    // const Trough = await getArrayWithTubes('TROUGH_96', 'DISPOSAL', 1);
    // const Trough2 = await getArrayWithTubes('TROUGH_96', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    //?? const lotNumber4 = "F-0001004";
    //?? const reagentTypeGSP2Formulated = "MAT000328";
    // const tubes = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 3);
    // await creatMaterialLotWithTube(dates, lotNumber1, reagentType1, '6HA3S6C');

    // const reagentType1 = "MAT000324";
    // const reagentType2 = "MAT000325";
    // const reagentType3 = "MAT000326";
    // await creatMaterialLotWithTube(dates, lotNumber1, reagentType1, tubes[0])
    // await creatMaterialLotWithTube(dates, lotNumber2, reagentType2, tubes[1]);
    // await creatMaterialLotWithTube(dates, lotNumber3, reagentType3, tubes[2]);
    // const pcr22 = await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // await creatMaterialLotWithTube(dates, lotNumber4, reagentType4, pcr22[0])

    // 27287

    // 2CN7FH6 mat lot

    // const well2 = await getArrayWithTubes('DEEP_WELL_BLOCK_96', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const pcr = await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const Trough2 = await getArrayWithTubes('TROUGH_96', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const pcr_first_input = '75AKNS5';
    // await getSpecimenFromStorage(`${pcr_first_input}_A.1`);
    // await getSpecimenFromStorage(`${pcr_first_input}_A.7`);
    // await getParentFromStorage(pcr_first_input);
    // await getQueueFromStorage(`${pcr_first_input}`);

    // const pcr_last_input = '2CN7FH6';
    // await getSpecimenFromStorage(`${pcr_last_input}_A.1`);
    // await getSpecimenFromStorage(`${pcr_last_input}_A.7`);
    // await getParentFromStorage(pcr_last_input);
    // await getQueueFromStorage(pcr_last_input);

    // await getParentFromStorage('X8UP11H'); //DISPOSAL
    // await getParentFromStorage('X8UP11H'); //DISPOSAL
    // await getParentFromStorage('X8UP11H'); //DISPOSAL

    // const context = await getRunContext('CFDNA_SV_GSP2_02NOV21_2');
    // 6225001d-74f9-43b5-aa8b-4155e4e4d8f8
    // await checkRunContextGetServerStatus(context);
    // await checkRunContextGetIndexPlatemap(context);
    // await getRunContext('CFDNA_SV_LIBRARY_CONSTRUCTION_02NOV21_3');
    // await getRunContext('CFDNA_SV_LIBRARY_CLEANUP_02NOV21_2');
    // await getRunContext('CFDNA_SV_SPLIT_PHOS_AMP_CLEANUP_02NOV21_2');
    // await getRunContext('CFDNA_SV_LAMBDA_EXO_GSP1_02NOV21_2');


    // 28176
    // const pcr2 = await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_PROCESSING_LABORATORY', 2);
    // await putContainerInAnyQueue(pcr2[0],'CFDNA_SV_GSP2_CLEANUP_QUEUE');
    // await putContainerInAnyQueue(pcr2[1],'CFDNA_SV_GSP2_CLEANUP_QUEUE');

    // await createSpecimen('CF_DNA_SPLIT_LC_GSP2', 'CF_DNA_LC_gsp2');
    // await putAnySpecimenInTube('ACU646U_A.1', 50, 'CF_DNA_LC_gsp2');

    // 28177
    //цель - создать 5 контейнеров и проверить на возможность их добавления в очередь CFDNA_SV_GSP2_CLEANUP_QUEUE (cfDNA SV GSP2 Cleanup Queue)
    // const fluidXRack = await getArrayWithTubes('0.5_ML_FLUIDX_RACK', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const pcr = await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const pcrCam = await getArrayWithTubes('PLATE_96_PCR', 'CAMBRIDGE_AVAILABLE_CONTAINERS', 1);
    // const pcrPro = await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_PROCESSING_LABORATORY', 1);
    // const pcrProCam = await getArrayWithTubes('PLATE_96_PCR', 'CAMBRIDGE_PROCESSING_LABORATORY', 1);

    // 28251
    // 96 well PCR plate in CAMBRIDGE_AVAILABLE_CONTAINERS
    // Trough 96 in ORPHAN
    // const pcr = await getArrayWithTubes('PLATE_96_PCR', 'CAMBRIDGE_AVAILABLE_CONTAINERS', 1);
    // const Trough2 = await getArrayWithTubes('TROUGH_96', 'ORPHANS', 1);

    // 28253
    // //Создать и проверить в основной вкладке рана
    // const plate = await getArrayWithTubes('PLATE_96', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const pcr = await getArrayWithTubes('PLATE_96_PCR', 'DISPOSAL', 1);
    // const pcr2 = await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_AVAILABLE_CONTAINERS', 2);
    // const Trough = await getArrayWithTubes('TROUGH_96', 'DISPOSAL', 1);
    // const Trough2 = await getArrayWithTubes('TROUGH_96', 'BALTIMORE_AVAILABLE_CONTAINERS', 3);

    // 28194
    // const pcr_first_input = 'A873PFU';
    // await getSpecimenFromStorage(`${pcr_first_input}_A.1`);
    // await getSpecimenFromStorage(`${pcr_first_input}_A.7`);

    // const pcr = await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_AVAILABLE_CONTAINERS', 2);
    // const Trough2 = await getArrayWithTubes('TROUGH_96', 'BALTIMORE_AVAILABLE_CONTAINERS', 3);

    // const well2 = await getArrayWithTubes('DEEP_WELL_BLOCK_96', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const pcr = await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const Trough2 = await getArrayWithTubes('TROUGH_96', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const pcr_first_input = '75AKNS5';
    // await getSpecimenFromStorage(`${pcr_first_input}_A.1`);
    // await getSpecimenFromStorage(`${pcr_first_input}_A.7`);
    // await getParentFromStorage(pcr_first_input);
    // await getQueueFromStorage(`${pcr_first_input}`);

    // const pcr_last_input = 'X7F6NF7_A.1';
    // await getSpecimenFromStorage(`${pcr_last_input}_A.1`);
    // await getSpecimenFromStorage(`${pcr_last_input}_A.7`);
    // await getParentFromStorage(pcr_last_input);
    // await getQueueFromStorage(pcr_last_input);

    // await getParentFromStorage('7HF60FK'); //DISPOSAL
    // await getParentFromStorage('PA346FX'); //DISPOSAL
    // await getParentFromStorage('SU48KK5'); //DISPOSAL
    // await getParentFromStorage('01HAAK9'); //DISPOSAL

    // const context = await getRunContext('CFDNA_SV_GSP2_CLEANUP_02NOV21_8');
    // await checkRunContextGetServerStatus(context);
    // await checkRunContextGetIndexPlatemap(context);

    // await getRunContext('CFDNA_SV_LIBRARY_CONSTRUCTION_02NOV21_113');

    // await getRunContext('CFDNA_SV_GSP2_02NOV21_107');
    // await getRunContext('CFDNA_SV_LAMBDA_EXO_GSP1_02NOV21_107');
    // await getRunContext('CFDNA_SV_SPLIT_PHOS_AMP_CLEANUP_02NOV21_108');
    // await getRunContext('CFDNA_SV_LIBRARY_CLEANUP_02NOV21_109');

};
main();
