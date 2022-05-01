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
    creatFormulatedMaterialLot
} from "./functions.js";
import {getArrayWithTubes, queueUpload} from "./tube-types.js";
import { expect } from 'chai';
import {date, monthInNumber} from "./index.js";
const dates = `2021-${monthInNumber}-${date}`;

const lotNumber = "R-0001031";
const reagentType = "MAT000415";

const aneuploidy = async () => {
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
    // const arr_fluid = await getArrayWithTubes('0.5_ML_FLUIDX_RACK', 'BALTIMORE_AVAILABLE_CONTAINERS', 3);
    // await putContainerInAnyQueue(arr_fluid[0],'CFDNA_ANU_UID_PCR_QUEUE');
    // // XUU61C3
    // const arr_matrix = await getArrayWithTubes('1_ML_MATRIX_RACK', 'BALTIMORE_AVAILABLE_CONTAINERS', 2);
    //
    // const arr_disposal = await getArrayWithTubes('0.5_ML_FLUIDX_RACK', 'DISPOSAL', 1);
    // // await putContainerInAnyQueue(arr_disposal[0],'CFDNA_ANU_UID_PCR_QUEUE');[ 'C8PHS61' ]
    // console.log(arr_fluid,arr_matrix, arr_disposal);
    // [ 'X8K7P3S', '83FA9PF', 'UN5HN34' ] [ '40KP7HK', 'P57A7PH' ]

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

    // как получить индекс мат лота
    // 1. https://qa.lims.thrivedetect.com/core-services/container/api/v1/labels/generate/REAGENT_R
    // {gtin: "R-0000021", labelTypeCode: "REAGENT_R"}

    // 2.

    await creatMaterialLot(dates, 'R-0001011', 'MAT000305', typeName);
    // await creatMaterialLot(dates, 'R-0001011', 'MAT029605', typeName);
    // await creatMaterialLot(dates, 'R-0001012', 'MAT000300', typeName);//29CS1PC
    // await creatMaterialLot(dates, 'R-0001013', 'MAT000517', typeName);
    // await creatMaterialLot(dates, 'R-0001014', 'MAT000304', typeName);

    // await creatMaterialLot(dates, 'R-0001015', 'MAT000411', typeName);//KC5P85A

    // await createSpecimen('CF_DNA', 'Iva_CF');
    // await createSpecimen('CF_DNA', 'Pet_CF');
    //
    //
    // Containers-create 0.5mL FluidX rack <FluidX_rack >,
    // then 2 pcs 1mL FluidX tubes in rack locations e.g.
    // <rack_barcode_A.5> and <rack_barcode_D.2>: <tube1>, <tube2>
    // const rack = await getArrayWithTubes('0.5_ML_FLUIDX_RACK', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const arr = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 2);
    // // // const arr =  [ 'F84NAX5', 'K6XKP23' ];
    // await updateLocationWithPosition(arr[0], rack[0], 'A.5');
    // await updateLocationWithPosition(arr[1], rack[0], 'D.2');
    // //
    // console.log(arr);

    // updateLocation("U95AFF1",'BALTIMORE_AVAILABLE_CONTAINERS');

    // await putAnySpecimenInTubeWithMassMolarConcentration(arr[0], 500, 'Iva_CF', 150, 0);
    // await putAnySpecimenInTube(arr[1], 500, 'PLASMA2');
    // console.log(arr);
    // await putAnySpecimenInTubeWithMassMolarConcentration(arr[1], 500, 'Pet_CF', 249, 0);

    // await putContainerInAnyQueue(rack[0], 'CFDNA_ANU_UID_PCR_QUEUE');
    // console.log(rack[0]);
    // const rack = await getArrayWithTubes('0.5_ML_FLUIDX_RACK', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const arr = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 3);
    // // // // const arr =  ['F1C9H6H', '12PSSU6' ];
    // await updateLocationWithPosition(arr[0], rack[0], 'A.1');
    // await updateLocationWithPosition(arr[1], rack[0], 'A.2');
    // await updateLocationWithPosition(arr[2], rack[0], 'A.3');
    // console.log(rack[0]);
    // await updateLocationWithPosition('S8F4K9U', rack[0], 'A.1');
    // await updateLocationWithPosition('XP8H52C', rack[0], 'A.2');
    // await updateLocationWithPosition('AF0CK62', rack[0], 'A.3');
    // await updateLocationWithPosition('3P14FFF', rack[0], 'A.4');

    // 21681
    // const rack = await getArrayWithTubes('TROUGH_96', 'BALTIMORE_AVAILABLE_CONTAINERS', 3);

    // 24732
    // 23076
    const arr = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'DISPOSAL', 1);

    // 23084
    //

    // const tube = await getChildFromStorage('CUA6P30', 'A.1');
    // // // await getGeneralInfoFromStorage('7A97UKU');
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

// дописать / поставить на mocha
    // const string = 'NEBNext Ultra II Q5 Master Mix';
    // const string = 'SPRIselect beads 450 mL';
    // const string = 'EB Buffer 10 mM Tris-HCl pH 8.5';
    // const string = 'NovaSeq 6000 S2 Reagent Kit v1.5 (200 cycles) Buffer Cartridge';
    // const string = 'NovaSeq 6000 S2 Reagent Kit v1.5 (200 cycles) SBS Cartridge';
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
    //
    // const a = string.split(' ').join('+');
    // const data = await searchForMaterialTypeInfo(a);
    // console.log(data[0].riskLevel);
    // console.log(data[0].externalIds);
    // console.log(data[0].isKit);
    // console.log(data[0].isKitPart);
    // console.log(data[0].isFormulated);


};

aneuploidy();
// aneuploidy.js
