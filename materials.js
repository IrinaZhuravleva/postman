import {createKitWithTubes, createOneTube, getArrayWithTubes, queueUpload} from './tube-types.js'
import {createCollectEventNew, collectionDate} from './collectionEvents.js'
import {
    createSpecimen,
    creatFormulatedMaterialLot,
    creatMaterialLot,
    getParentFromStorage,
    getQueueFromStorage,
    getSpecimenFromStorage,
    putAnySpecimenInTube,
    putContainerInAnyQueue,
    creatMaterialLotWithTube,
    createMaterialLotWithKit,
    scanIntoBulkMatLot,
    getGeneralInfoFromStorage,
    creatMaterialLotWith2Tubes,
    createAnyRunNew,
    putLotIntoMatQCTesting,
    changeMatLotStatus,
    putTubeIntoMaterialLot, newLocationValueBulkUpdate, searchForMaterialTypeInfo, getInfoAboutMatLot
} from "./functions.js";
import {getStorage} from "./storage.js";
import axios from "axios";
import {addExistingContainer, updateLocationWithPosition, updateLocation} from "./functions.js";
import {date, monthInNumber} from "./index.js";
import {expect} from "chai";

const dates = `2021-${monthInNumber}-${date}`;
const lotNumberWithKit = "R-0001051";
// const lotNumber = "R-0001090";
// const reagentType = "MAT000033";
const parentReagentType = "MAT000210";
const reagentTypeWithKit = "MAT000200";
const typeName = "WBC-FR8-C";

const formulatedLotNumber = "F-0001042";
const formulatedReagentType = "MAT000414";
const mainMaterials = async () => {

    // 16868
    // const arr = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 2);
    // await creatMaterialLotWith2Tubes(dates, lotNumber, reagentType, arr[0], arr[1]);
    // await changeMatLotStatus(lotNumber, 3, reagentType);
    // const runName = await getRunID('RAW_MATERIALS_QC_TESTING');
    // const runName = 'MATERIALS_QC_TESTING_19NOV21_2';
    // await createAnyRunNew('MATERIALS', 'RAW_MATERIALS_QC_TESTING', runName);
    // await startRunID(runName);
    // await getGeneralInfoFromStorage('33U7SUP');


    // 16982
    // const arr = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 2);
    // await creatMaterialLotWith2Tubes(dates, lotNumber, reagentType, arr[0], arr[1]);
    // await changeMatLotStatus(lotNumber, 3, reagentType);
    // //const arr = [ '4H3FA1X', 'PUSP561' ]
    // await getGeneralInfoFromStorage(arr[0]);
    // await getQueueFromStorage(arr[0]);
    // await getGeneralInfoFromStorage(arr[1]);
    // await getQueueFromStorage(arr[1]);



    // 17001
    // const arr = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 2);
    // await creatMaterialLotWith2Tubes(dates, lotNumber, reagentType, arr[0], arr[1]);
    // await changeMatLotStatus(lotNumber, 3, reagentType);
    // const arr = [ 'HUXK834', '8FAX47P' ]
    // await getGeneralInfoFromStorage(arr[0]);
    // await getQueueFromStorage(arr[0]);
    //  await getGeneralInfoFromStorage(arr[1]);
    //  await getQueueFromStorage(arr[1]);


    // 17004

    // const arr = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 2);
    // await creatMaterialLotWith2Tubes(dates, lotNumber, parentReagentType, arr[0], arr[1]);
    // await creatFormulatedMaterialLot(dates, formulatedLotNumber, formulatedReagentType, arr[0]);

    // const arr = [ 'FH5SK86', 'N0P19SK' ];
    // await getGeneralInfoFromStorage(arr[0]);
    // await getQueueFromStorage(arr[0]);
    //  await getGeneralInfoFromStorage(arr[1]);
    //  await getQueueFromStorage(arr[1]);



    // 17027
    // const runName = await getRunID('RAW_MATERIALS_QC_TESTING');
    // // const runName = 'MATERIALS_QC_TESTING_19NOV21_11';
    // await createAnyRunNew('MATERIALS', 'RAW_MATERIALS_QC_TESTING', runName);
    // await startRunID(runName);
    // await putLotIntoMatQCTesting('R-0001047', runName);
    // await creatMaterialLot(dates, 'R-0001060', 'MAT000332'); //level 0 ?????
    // await putLotIntoMatQCTesting('R-0001060', runName);
    //
    // await creatMaterialLot(dates, 'R-0001050', 'MAT000332'); //level 1
    // await putLotIntoMatQCTesting('R-0001050', runName);

    // await creatMaterialLot(dates, 'R-0001047', 'MAT000331'); //level 2
    // await putLotIntoMatQCTesting('R-0001047', runName);

    // await creatMaterialLot(dates, 'R-0000049', 'MAT000036'); //level 3
    // await putLotIntoMatQCTesting('R-0000049', runName);

    // 17042
    // const runName = await getRunID('RAW_MATERIALS_QC_TESTING');
    // const runName = 'MATERIALS_QC_TESTING_19NOV21_12';
    // await createAnyRunNew('MATERIALS', 'RAW_MATERIALS_QC_TESTING', runName);
    // await startRunID(runName);

    // status Pending
    // await creatMaterialLot(dates, 'R-0001080', 'MAT000033');
    // await changeMatLotStatus('R-0001080', 0, 'MAT000033');
    // await putLotIntoMatQCTesting('R-0001080', runName);

    // status Ready for Issue
    // await creatMaterialLot(dates, 'R-0001081', 'MAT000033');
    // await changeMatLotStatus('R-0001081', 1, 'MAT000033');
    // await putLotIntoMatQCTesting('R-0001081', runName);

    // status Ready for Review
    // await creatMaterialLot(dates, 'R-0001082', 'MAT000033');
    // await changeMatLotStatus('R-0001082', 2, 'MAT000033');
    // await putLotIntoMatQCTesting('R-0001082', runName);

    // status Ready For Testing
    // await creatMaterialLot(dates, 'R-0001083', 'MAT000033');
    // await changeMatLotStatus('R-0001083', 3, 'MAT000033');
    // await putLotIntoMatQCTesting('R-0001083', runName);

    // status Quatantined
    // await creatMaterialLot(dates, 'R-0001084', 'MAT000033');
    // await changeMatLotStatus('R-0001084', 4, 'MAT000033');
    // await putLotIntoMatQCTesting('R-0001084', runName);

    // status Rejected
    // await creatMaterialLot(dates, 'R-0001085', 'MAT000033');
    // await changeMatLotStatus('R-0001085', 5, 'MAT000033');
    // await putLotIntoMatQCTesting('R-0001085', runName);

    // status Consumed
    // await creatMaterialLot(dates, 'R-0001086', 'MAT000033');
    // await changeMatLotStatus('R-0001086', 6, 'MAT000033');
    // await putLotIntoMatQCTesting('R-0001086', runName);

    // status Ready for QA Review
    // await creatMaterialLot(dates, 'R-0001087', 'MAT000033');
    // await changeMatLotStatus('R-0001087', 7, 'MAT000033');
    // await putLotIntoMatQCTesting('R-0001087', runName);

    // 16996
    // const arr = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 2);
    // await creatMaterialLotWith2Tubes(dates, lotNumber, reagentType, arr[0], arr[1]);
    // await changeMatLotStatus('R-0001090', 3, reagentType);
    // const arr = [ 'HUXK834', '8FAX47P' ]



    // await creatMaterialLot(dates, lotNumber, reagentType);
   // const arr = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);

   // //
   //  await creatMaterialLotWithTube(dates, lotNumber, reagentType, arr[0])
   //  export const creatMaterialLotWithTube(dates, lotNumber, reagentType, arr[0]);
    // console.log(source1);
    // console.log(desttube1, desttube2);
    // await getSpecimenFromStorage("75P4PCS");


    // await getParentFromStorage('9KKNH33');
    // await getQueueFromStorage('9KKNH33');
    // await getParentFromStorage('AXXX826');
    // await getQueueFromStorage('AXXX826');

    // 25714
    // const lotNumber = "R-0001021";
    // const reagentType = "MAT000200";
    // const tube_sp = await createOneTube('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS'); //7HFPA24
    // await creatMaterialLotWithTube(dates, lotNumber, reagentType, tube_sp);
    //
    // // await creatMaterialLotWithTube(dates, lotNumber, reagentType, 'XS26N2S');
    // await changeMatLotStatus(lotNumber, 3, reagentType);
    // const runName = await getRunID('MATERIAL_CONTAINERS_BULK_UPDATE');
    // // const runName = 'MATERIAL_CONTAINERS_BULK_UPDATE_22NOV21_6';
    // await createAnyRunNew('MATERIALS', 'MATERIAL_CONTAINERS_BULK_UPDATE', runName);
    // await startRunID(runName);
    //  const tube_sp = '8P4UU0C';
    // await scanIntoBulkMatLot(tube_sp, runName);

    // const arr = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'DISPOSAL', 1);
    // await creatMaterialLot(dates, "R-0001040", 'MAT000201');
    // const plate = await createOneTube('PLATE_96', 'DISPOSAL');
    // const genMat = await createOneTube('GENERAL_MATERIAL_CONTAINER', 'BALTIMORE_AVAILABLE_CONTAINERS');
    // await createMaterialLotWithKit(dates, "R-0001040", 'MAT000201', typeName, genMat);

    // 25939
    // 7AC5S9S_A.1 FK5KP35
    // 25940
    // const genMat = await createOneTube('GENERAL_MATERIAL_CONTAINER', 'BALTIMORE_AVAILABLE_CONTAINERS');
    // await createMaterialLotWithKit(dates, lotNumberWithKit, reagentTypeWithKit, typeName, genMat);
    // // await creatMaterialLot(dates, lotNumber, reagentType);
    // const arr = await getArrayWithTubes('1.5_ML_EPPENDORF_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const arr_PL = await getArrayWithTubes('1.5_ML_EPPENDORF_TUBE', 'BALTIMORE_PROCESSING_LABORATORY', 1);
    // const arr_CAM = await getArrayWithTubes('1.5_ML_EPPENDORF_TUBE', 'CAMBRIDGE_ACCESSIONING_LABORATORY', 1);
    // const runName = await getRunID('MATERIAL_CONTAINERS_BULK_UPDATE');
    // // const runName = 'MATERIAL_CONTAINERS_BULK_UPDATE_22NOV21_6';
    // await createAnyRunNew('MATERIALS', 'MATERIAL_CONTAINERS_BULK_UPDATE', runName);
    // await startRunID(runName);

    // 25940
    // 25942
    const lotNumber = "R-0001041";
    const reagentType = "MAT000200";
    // await creatMaterialLot(dates, lotNumber, reagentType);
    // const shelf = await getArrayWithTubes('SHELF','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const runName = await getRunID('MATERIAL_CONTAINERS_BULK_UPDATE');
    // const runName = 'MATERIAL_CONTAINERS_BULK_UPDATE_22NOV21_1';
    // await createAnyRunNew('MATERIALS', 'MATERIAL_CONTAINERS_BULK_UPDATE', runName);
    // await startRunID(runName);
    // const runID = 'MATERIAL_CONTAINERS_BULK_UPDATE_22OCT21_103';
    // await scanIntoBulkMatLot('2FXP4S5',runName);
    // await scanIntoBulkMatLot('F335HFA',runName);
    // await scanIntoBulkMatLot('F7F2FX9',runName);

    // const shelf = await getArrayWithTubes('SHELF','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // await newLocationValueBulkUpdate(runName, shelf[0]);

    // await creatMaterialLot(dates, lotNumber, reagentType);
    // 14773
    // const epp = await getArrayWithTubes('0.9_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS',1);
    // // dates, item, lotNumber, reagentType, volume, ml, status
    // await putTubeIntoMaterialLot(dates, epp[0], lotNumber, reagentType, 0.5, 'mL', 0);
    // 29SSS9C

    // 27313
    // const data = await searchForMaterialTypeInfo('MAT000330');
    // console.log(data[0].isCountable);
    // console.log(data[0].isKitPart);
    // console.log(data[0].isFormulated);

    // const data = await searchForMaterialTypeInfo('MAT029893');
    // // console.log(data);
    // console.log(data[0].isCountable);
    // console.log(data[0].isKitPart);
    // console.log(data[0].isFormulated);

    // await creatMaterialLot(dates, 'R-0001100', 'MAT000330');
    // await creatMaterialLot(dates, 'R-0001101', 'MAT029893');
    // await creatMaterialLot(dates, 'R-0001102', 'MAT000033');
    const runName = await getRunID('MATERIAL_CONTAINERS_BULK_UPDATE');
    // const runName = 'MATERIAL_CONTAINERS_BULK_UPDATE_23NOV21_12';
    await createAnyRunNew('MATERIALS', 'MATERIAL_CONTAINERS_BULK_UPDATE', runName);
    await startMatBulkUpdateRunID(runName);
    // HNFN701
    // await scanIntoBulkMatLot('HNFN701',runName);
    // await scanIntoBulkMatLot('F3SFN86',runName);
    // await scanIntoBulkMatLot('F7F2FX9',runName);
    // cont space 456
    // cont space 789

    // SST_n60wl81z1q
    // SST_N60WL81Z1Q
    // 86XPUP0
    // 86xpup0
    // 6c0C2nn
    // await creatMaterialLot(dates, 'R-0001110', 'MAT000200');
    // await addExistingContainer('cont space 123', 'BALTIMORE_AVAILABLE_CONTAINERS', '50ML_EPPENDORF_CONICAL_TUBE');
    // await addExistingContainer('cont space 456', 'BALTIMORE_AVAILABLE_CONTAINERS', '50ML_EPPENDORF_CONICAL_TUBE');
    // await addExistingContainer('cont space 789', 'BALTIMORE_AVAILABLE_CONTAINERS', '50ML_EPPENDORF_CONICAL_TUBE');
    // getGeneralInfoFromStorage('cont space 123')
    // await getInfoAboutMatLot('R-0001110');
    // await putTubeIntoMaterialLot(dates, 'cont space 123', 'R-0001110', 'MAT000200', 0, 'ul', 1);

};

mainMaterials();

// materials.js

// 1// https://qa.lims.thrivedetect.com/core-services/container/api/v1/lot_management/containers
// POST
// {type: "GENERAL_MATERIAL_CONTAINER", json: {}, location: "BALTIMORE_AVAILABLE_CONTAINERS", amount: 1}

// 2 https://qa.lims.thrivedetect.com/core-services/container/api/v1/units?measureCode=kit GET

