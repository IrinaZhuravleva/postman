import {
    createOneTube, createOneTubeNew,
    creatMaterialLot, putTubeIntoMaterialLot
} from "./functions.js";
import {getArrayWithTubes, queueUpload } from "./tube-types.js";
import {
    createSpecimen,
    putAnySpecimenInTube,
    putContainerInAnyQueue,
    updateLocationWithPosition
} from "./functions.js";



const main25238 = async () => {

    // const rack = await createOneTubeNew('0.5_ML_FLUIDX_RACK', 'BALTIMORE_PROCESSING_LABORATORY');
    // const tube1 = await createOneTubeNew('0.5_ML_FLUIDX', 'BALTIMORE_PROCESSING_LABORATORY');
    // // await createSpecimen("CF_DNA", "CF_DNA1");
    //
    // const arr = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_PROCESSING_LABORATORY', 4);

    // // const arr = ['X5F01PC', 'U0XHP91', '64CH4SN', 'S7KS9F9', '4UPXK90'];
    // await arr.forEach(function (item, index) {
    //     putAnySpecimenInTube(arr[index], 100, "CF_DNA1");
    //
    // });
    // await putAnySpecimenInTube(tube1, 49, "CF_DNA1");
    //
    // await updateLocationWithPosition(tube1,  rack, "A.1");
    // await updateLocationWithPosition(arr[0],  rack, "B.1");
    // await updateLocationWithPosition(arr[1],  rack, "C.1");
    // await updateLocationWithPosition(arr[2],  rack, "D.1");
    // await updateLocationWithPosition(arr[3],  rack, "E.1");


    // await queueUpload('CCU527H', 'CFDNA_SV_LIBRARY_CONSTRUCTION_QUEUE');
    // const rack2 = await createOneTubeNew('0.5_ML_FLUIDX_RACK', 'BALTIMORE_PROCESSING_LABORATORY');
    // const arr2 = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_PROCESSING_LABORATORY', 2);
    // // const arr2 = тубы с контролами  POS / NEG
    //
    // await arr2.forEach(function (item, index) {
    //     updateLocationWithPosition(arr2[index],  rack2, `B.${index + 1}`);
    //
    // });

    // console.log(tube1, rack);
    // X63CXA9
    // 0CUP46U
    //     [ 'X63CXA9', '0CUP46U' ] pos/neg
    // U74CK4P rack with controls

    // await putTubeIntoMaterialLot('0CUP46U', )

    // console.log(rack2);
    // const DESTINATION_PLATE = await createOneTubeNew('PLATE_96_PCR', 'BALTIMORE_PROCESSING_LABORATORY');
    // // <DESTINATION_PLATE> - 96 well PCR Plate - LC Destination Plate
    // //     * <SPRI_BEADS_PLATE> - 96 well PCR Plate - SPRI Beads Plate
    // const SPRI_BEADS_PLATE = await createOneTubeNew('PLATE_96_PCR', 'BALTIMORE_PROCESSING_LABORATORY');
    // //         * <ETHANOL_TROUGH> - Trough 96 - Ethanol Trough
    // const ETHANOL_TROUGH = await createOneTubeNew('TROUGH_96', 'BALTIMORE_PROCESSING_LABORATORY');
    // //             * <PEG_TROUGH> - Trough 96 - PEG Trough
    // const PEG_TROUGH = await createOneTubeNew('TROUGH_96', 'BALTIMORE_PROCESSING_LABORATORY');
    // //                 * <WASTE_TROUGH> - Trough 96 - Waste Trough
    // const WASTE_TROUGH = await createOneTubeNew('TROUGH_96', 'BALTIMORE_PROCESSING_LABORATORY');
    //
    // console.log(DESTINATION_PLATE, SPRI_BEADS_PLATE,ETHANOL_TROUGH,PEG_TROUGH, WASTE_TROUGH);
    // H6C64FK 2U1FF8A H8A6F5S 079HKAH A9H9HC5



};
main25238();

// 'HH44PC9', '2HH5HF0', 'F7FF2X9', 'X74U9FU'
// 70N8FFS A53N5SP
