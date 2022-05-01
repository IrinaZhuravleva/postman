import {
    createSpecimen,
    putAnySpecimenInTube
} from "./functions.js";
import {createOneTube, getArrayWithTubes, queueUpload } from "./tube-types.js";

const main22856 = async () => {
    // createSpecimen('CF_DNA', 'CF_test')

    // const arr = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 2);
    // const arrCam = await getArrayWithTubes('0.5_ML_FLUIDX', 'CAMBRIDGE_AVAILABLE_CONTAINERS', 2);
    // const rackBalt = await createOneTube('0.5_ML_FLUIDX_RACK','BALTIMORE_AVAILABLE_CONTAINERS');
    // const rackCamb = await createOneTube('0.5_ML_FLUIDX_RACK','CAMBRIDGE_AVAILABLE_CONTAINERS');

    const arr = ["N0AC0U9", "9P6X7PX", "8P44SAX", "2HH2CS2", "U2S96AC", "1A41XCX", "H4KP68N", "2SXA12S", "S78UCH3", "6AX4H7N", "F2U2C0K", "7PK6SU6", "7HU7X4N", "HS6NH24", "HHH632F", "PP5F21P", "PX9N0K2", "AA057KK", "FNF743N", "KSX417P", "284NAXN", "4P9KPF3", "8HUA2U5", "AX8X9X4", "N9XXK30", "U9NAF21", "3ANX25K", "F5CCC99", "2H8U6XU", "5C8A0PC", "F9S7SX1", "PAS336N", "47X3NCU", "984SPHS", "UH2A96F", "U5NH5H4", "K0KP73K", "P5SA7P3", "1UPHS61", "H0CC76U", "ACH2S97", "FK3U80S", "N07F1PA", "H583PKC", "HC6A2K1", "UN943PX", "S1C1KA2", "S2A6UP8", "UA44P9K", "3F3HS0S", "SNH971X", "66XF6CF", "6PAF90U", "16SHKU3", "8X7K7SS", "PA945XN", "C21S9UF", "1X90UUN", "S6US5C8", "16A5UKS", "XU2NN62", "7UN3U4H", "CS02F6K", "CKC64H4", "8K6F1KX", "XF4U40U", "49UCNX8", "9NA1N5X", "X51CNS6", "K7C5P9S", "N8KAA41", "3N0HF9X", "256CNXH", "57XCK8A", "4F2AS8N", "FUPK920", "832HCXX", "CPU476C", "2P5H7NU", "2H2F1KS", "CH9H44U", "8K8NSK1", "7KPFU07", "05NCK2C", "AC702SP", "UFA230S", "57X0CSF", "85C6PHF", "C7C2XS5", "K6P9N3P", "AN5F6C7", "0KNA87U", "FCNS236", "N7N9F5A", "AN355SP", "N5F7KK9"];

    // const arrCam = [ 'U32XH4K', 'SCS337U' ];
    // await arr.forEach(function(item, index) {
    //    putAnySpecimenInTube(item, 500, 'CF_test');
    // });

    // await arrCam.forEach(function(item, index) {
    //    putAnySpecimenInTube(item, 500, 'CF_test');
    // });
    // console.log(arr, arrCam, rackBalt, rackCamb);
    await arr.forEach(function(item, index) {
        queueUpload(item, 'GENERIC_CFDNA_RACK_UPDATE_QUEUE');
    });
    // await arrCam.forEach(function(item, index) {
    //     queueUpload(item, 'GENERIC_CFDNA_RACK_UPDATE_QUEUE');
    // });

    // console.log(arr, arrCam, rackBalt, rackCamb);
    //
    // [ 'N4C76HK', 'XC84U8C' ] [ 'NPH302A', '4XXK96H' ] FFS103U 5USK1K0


};
main22856();



// 22856.js




