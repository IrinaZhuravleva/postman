import {getArrayWithTubes} from "./tube-types.js";
import {
    createSpecimen,
    putAnySpecimenInTube, putContainerInAnyQueue
} from "./functions.js";

const main13085 = async () => {
    // await createSpecimen("BLOOD", "BLOOD1");
    // await createSpecimen("PLASMA", "PLASMA_1");
    const arr = [ 'S62CCX6', 'CK45S1C', '0C48UNP' ];

    // const arr = await getArrayWithTubes('COBAS_SAMPLE_CUP','BALTIMORE_AVAILABLE_CONTAINERS', 3);
    // await putAnySpecimenInTube(arr[0], 2000, "BLOOD1");
    // await putAnySpecimenInTube(arr[1], 100, "PLASMA_1");
    // await putAnySpecimenInTube(arr[2], 200, "PLASMA_1");
    // COBAS_SAMPLE_SETUP_QUEUE
    await putContainerInAnyQueue(arr[0], 'COBAS_SAMPLE_SETUP_QUEUE');
};
main13085();
// 13085.js