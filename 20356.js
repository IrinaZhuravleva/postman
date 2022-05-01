import {getArrayWithTubes, queueUpload} from "./tube-types.js";
import {addExistingContainer, updateLocationWithPosition, updateLocation} from "./functions.js";

const main20356 = async () => {

    // Open new tab and go to Containers->Create Containers and create 4 containers 50 mL Eppendorf Conical (for example) as <cont1>, <cont2>, <cont3>, <cont4>, <cont5>, <cont6>,<cont7>, <cont8>.

    const arr = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE','BALTIMORE_PROCESSING_LABORATORY', 4);

//ЗАПУСКАТЬ ПО ОЧЕРЕДИ //тест можно проходить чисто по функциям
    await queueUpload(arr[0], 'CONTAINERS_TO_STORE_QUEUE');
//     await queueUpload(arr[2], 'CONTAINERS_TO_STORE_QUEUE');
//     await queueUpload(arr[3], 'CONTAINERS_TO_STORE_QUEUE');
//     await queueUpload(arr[1], 'CONTAINERS_TO_STORE_QUEUE');
//     await queueUpload(arr[1], 'CONTAINERS_TO_STORE_QUEUE');
//
//
//         Request URL: https://qa.lims.thrivedetect.com/core-services/container/api/v1/queues/CONTAINERS_TO_STORE_QUEUE/containers/count?searchText=7P8S5CU
//         Request Method: GET
//

    // Request URL: https://qa.lims.thrivedetect.com/core-services/container/api/v1/queues/CONTAINERS_TO_STORE_QUEUE/containers/delete
    //     Request Method: PUT
    // {containers: ["1X9AUU5", "7P8S5CU"]}

    // console.log(arr);


};
// main20356();

// 20356.js

