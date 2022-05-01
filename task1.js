let tube1: string = 'TEST_TUBE_1';
let tube2: string = 'TEST_TUBE_2';
let tube3: string = 'TEST_TUBE_3';

await UIQueueSharedSteps.addContainerToQueue('PLASMA_CENTRIFUGATION_QUEUE', tube1);
await UIQueueSharedSteps.addContainerToQueue('PLASMA_CENTRIFUGATION_QUEUE', tube2);
await UIQueueSharedSteps.addContainerToQueue('PLASMA_CENTRIFUGATION_QUEUE', tube3);

// await arr.forEach(function(item, index) {
//    putAnySpecimenInTube(item, 500, 'CF_test');
// });

let tubes: