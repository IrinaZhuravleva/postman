import {
    addExistingContainer,
    getGeneralInfoFromStorage,
    putAnySpecimenInTube,
    getSpecimenFromStorage,
    getChildFromStorage,
    putAnySpecimenInTubeWithMassConcentration,
    creatMaterialLot,
    creatMaterialLotWithTube,
    searchForMaterialTypeInfo,
    getMaterialTypeInfo,
    putContainerInAnyQueue,
    updateLocation,
    createSpecimen,
    updateLocationWithPosition,
    putAnySpecimenInTubeWithMassMolarConcentration,
    creatFormulatedMaterialLot, getMaterialTypeInfoWithJSON
} from "./functions.js";
import {getArrayWithTubes, queueUpload} from "./tube-types.js";
import { expect } from 'chai';
import {date, monthInNumber} from "./index.js";
const dates = `2021-${monthInNumber}-${date}`;

const lotNumber = "R-0001031";
const reagentType = "MAT000415";

const aneuploidy = async () => {
// 35504
//     const epp_no_mat = await getArrayWithTubes('1.5_ML_EPPENDORF_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
//     const plate = await getArrayWithTubes('PLATE_384','BALTIMORE_AVAILABLE_CONTAINERS', 1);
//     const pico_stan_no_mat = await getArrayWithTubes('1.4_ML_FLUIDX_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
//     const fluidx_disp = await getArrayWithTubes('1.4_ML_FLUIDX_TUBE', 'DISPOSAL', 1);

// 35505
//     const pico_int_no_mat = await getArrayWithTubes('1.5_ML_EPPENDORF_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
//     const plate = await getArrayWithTubes('PLATE_384','BALTIMORE_AVAILABLE_CONTAINERS', 1);
//     const fluidx_no_mat = await getArrayWithTubes('1.4_ML_FLUIDX_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
//     const epp_disp = await getArrayWithTubes('1.5_ML_EPPENDORF_TUBE', 'DISPOSAL', 1);


    // const plate = await getArrayWithTubes('DEEP_WELL_BLOCK_96', 'BALTIMORE_AVAILABLE_CONTAINERS', 2);
    // // await creatMaterialLotWithTube(dates, "R-0001317", "MAT000317", `${tube[0]}`);
    // await putTubeIntoMatLot(dates, plate[0], 50, 'R-0001317', "MAT000317");
    // // await changeMatLotStatus('R-0001317', 1, 'MAT000317');

    // 21709 obsolete
    // await addExistingContainer ('EXTRA','7C1CK0F_H.12', '0.5_ML_FLUIDX');
    // await getGeneralInfoFromStorage('7C1CK0F');
    // const tube = await getChildFromStorage('7C1CK0F', 'A.1');
    // const specimenName = await getSpecimenFromStorage(tube);
    // const a = Object.keys(specimenName);
    // await putAnySpecimenInTubeWithMassConcentration('EXTRA', 500, 'd963oa');
    // await putAnySpecimenInTube('EXTRA', 500, a[0]);
    // await getSpecimenFromStorage('EXTRA');
    // 21725
    const arr_fluid = await getArrayWithTubes('0.5_ML_FLUIDX_RACK', 'BALTIMORE_AVAILABLE_CONTAINERS', 3);
    // await putContainerInAnyQueue(arr_fluid[0],'CFDNA_ANU_UID_PCR_QUEUE');
    // XUU61C3
    // const arr_matrix = await getArrayWithTubes('1_ML_MATRIX_RACK', 'BALTIMORE_AVAILABLE_CONTAINERS', 2);

    // const arr_disposal = await getArrayWithTubes('0.5_ML_FLUIDX_RACK', 'DISPOSAL', 1);
    // await putContainerInAnyQueue(arr_disposal[0],'CFDNA_ANU_UID_PCR_QUEUE');
    // console.log(arr_fluid,arr_matrix, arr_disposal);
    console.log(arr_fluid,arr_matrix);


    // 21517
    // // FUS0S32
    // const arr_matrix = await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // await updateLocation('AC0F3S5', 'BALTIMORE_AVAILABLE_CONTAINERS');
    // await getGeneralInfoFromStorage('C7HN2X4');
    const lotNumberWithKit = "R-0001010";
// const lotNumber = "R-0001090";
// const reagentType = "MAT000033";
    const parentReagentType = "MAT000210";
    const reagentTypeWithKit = "MAT000200";
    const typeName = "WBC-FR8-C";
    // Lots prepare 6 containers of MAT029413,
    // MAT000305,
    // MAT029605,
    // MAT000300,
    // MAT000613 and
    // MAT000412- use 0.5mL FluidX tubes, set Volume =300 uL.
    // const arr = await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // //S841KAH
    // const arr1 = await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // await creatFormulatedMaterialLot(dates, 'R-0001010', 'MAT029413', arr1[0]);
    // await creatMaterialLot(dates, 'R-0001011', 'MAT000305', typeName);
    // await creatMaterialLot(dates, 'R-0001011', 'MAT029605', typeName);
    // await creatMaterialLot(dates, 'R-0001012', 'MAT000300', typeName);//29CS1PC
    // await creatMaterialLot(dates, 'R-0001013', 'MAT000517', typeName);
    // await creatMaterialLot(dates, 'R-0001014', 'MAT000304', typeName);

    // await creatMaterialLot(dates, 'R-0001015', 'MAT000411', typeName);//KC5P85A

    // await createSpecimen('CF_DNA', 'PLASMA1');
    // await createSpecimen('CF_DNA', 'PLASMA2');
    //
    //
    // Containers-create 0.5mL FluidX rack <FluidX_rack >,
    // then 2 pcs 1mL FluidX tubes in rack locations e.g.
    // <rack_barcode_A.5> and <rack_barcode_D.2>: <tube1>, <tube2>
    // const rack = await getArrayWithTubes('0.5_ML_FLUIDX_RACK', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // // const arr = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 2);
    // const arr =  [ 'F84NAX5', 'K6XKP23' ];
    // await updateLocationWithPosition(arr[0], rack[0], 'A.5');
    // await updateLocationWithPosition(arr[1], rack[0], 'D.2');
    // //
    // console.log(arr);

    // updateLocation("U95AFF1",'BALTIMORE_AVAILABLE_CONTAINERS');

    // await putAnySpecimenInTubeWithMassMolarConcentration(arr[0], 500, 'PLASMA1', 150, 0);
    // await putAnySpecimenInTube(arr[1], 500, 'PLASMA2');
    // await putAnySpecimenInTubeWithMassMolarConcentration(arr[1], 500, 'PLASMA2', 249, 0);

    // await putContainerInAnyQueue('A986FCN', 'CFDNA_ANU_UID_PCR_QUEUE');

    // const rack = await getArrayWithTubes('0.5_ML_FLUIDX_RACK', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const arr = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 3);
    // // // const arr =  ['F1C9H6H', '12PSSU6' ];
    // await updateLocationWithPosition(arr[0], rack[0], 'A.1');
    // await updateLocationWithPosition(arr[1], rack[0], 'A.2');
    // await updateLocationWithPosition(arr[1], rack[0], 'A.3');
    // [ 'F84NAX5', 'K6XKP23' ]
    // await updateLocationWithPosition('S8F4K9U', rack[0], 'A.1');
    // await updateLocationWithPosition('XP8H52C', rack[0], 'A.2');
    // await updateLocationWithPosition('AF0CK62', rack[0], 'A.3');
    // await updateLocationWithPosition('3P14FFF', rack[0], 'A.4');

    // 21681
    // const rack = await getArrayWithTubes('TROUGH_96', 'BALTIMORE_AVAILABLE_CONTAINERS', 3);

    // 24732
    // 23076
    // const arr = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'DISPOSAL', 1);

    // 23084
    // const tube = await getChildFromStorage('7A97UKU', 'A.1');
    // // await getGeneralInfoFromStorage('7A97UKU');
    // const specimenName = await getSpecimenFromStorage(tube);
    // const a = Object.keys(specimenName);
    // await getSpecimenFromStorage(a);

    // const arr = await getArrayWithTubes('PLATE_384', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // MAT000415
    // 5A70SPF
    // await creatMaterialLot(dates, lotNumber, reagentType);
    // const tube = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // await creatMaterialLotWithTube(dates, lotNumber, reagentType, tube[0]);
    // console.log(month);

    // 21844
    // await getMaterialTypeInfo('MAT000302');
    // const a = await getMaterialTypeInfoWithJSON('MAT000304');
    // const a = await getMaterialTypeInfoWithJSON('MAT000305');
    // const a = await getMaterialTypeInfoWithJSON('MAT000312');
    // const a = await getMaterialTypeInfoWithJSON('MAT000517');
    // const a = await getMaterialTypeInfoWithJSON('MAT000613');

    // const a = await getMaterialTypeInfoWithJSON('MAT000301');
    // const a = await getMaterialTypeInfoWithJSON('MAT000314');
    // const a = await getMaterialTypeInfoWithJSON('MAT000315');
    //

    // await getMaterialTypeInfo('MAT000316');
    // const b = a.json.data.formulation_parent_containers;
    // console.log(b);

// дописать / поставить на mocha
//     const string = '10 mM Tris-HCl pH 8.5 50 mL';
//     const string = 'AnuNtcCtl';
//     const string = '1N NaOH 1 mL'; //external id 1000898
//     const string = 'DNase/RNase-Free Distilled Water 50 mL';
//     const string = 'DNase/RNase-Free Distilled Water 2 mL';

    // const string = 'SPRIselect beads 10 mL';
    // const string = 'PhiX Pool';
    // const string = 'PhiX 5 nM';

    // const string = '10 mM Tris-HCl pH 8.5 50 mL';

    // const string = 'NEBNext Ultra II Q5 Master Mix';
    // const string = 'SPRIselect beads 450 mL';
    // const string = 'EB Buffer 10 mM Tris-HCl pH 8.5';
    // const string = 'NovaSeq 6000 S2 Reagent Kit v1.5 (200 cycles) Buffer Cartridge';

    // const string = 'NovaSeq 6000 S2 Reagent Kit v1.5 (200 cycles) Cluster Cartridge';
    // const string = 'NovaSeq 6000 S2 Reagent Kit v1.5 (200 cycles) SBS Cartridge';
    // const string = 'NovaSeq 6000 S2 Reagent Kit v1.5 (200 cycles) Flow Cell';
    // const string = 'NovaSeq 6000 S2 Reagent Kit v1.5 (200 cycles) Library Tube';
    // const string = '1N NaOH 100 mL';
    // const string = 'PhiX Control v3 Kit';

    // const string = '8TSD001';
    // const string = '8TSD002';
    // const string = 'IDTE pH 8.0';
    // const string = 'IDTE pH 8.0 50 mL';
    // //
    // const a = string.split(' ').join('+');
    // const data = await searchForMaterialTypeInfo(a);
    // console.log(data[0].riskLevel);
    // console.log(data[0].externalIds);
    // console.log(data[0].isKit);
    // console.log(data[0].isKitPart);
    // console.log(data[0].isFormulated);
    // console.log(data[0].isCountable);

};

aneuploidy();
// 35504.js
