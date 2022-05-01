// import { tubeType, location } from './tube-types.js';
import { tubes, createOneTube,
    createSpecimenPlasma,
    putPlasmaInTube,
    queueEllaResultUpload } from './functions.js'


let tubeArray = [];
// let tubeArray = ['8ANF76F', 'P1S7HS5', 'S2FAC18', '8XK5K5X'];
const containerNum = 12;

const getArray = async (containerNum) => {
    for (let i = 0; i < containerNum; i++) {
        await createOneTube(tubeType, location);
    };
    return tubes;
}

// createSpecimenPlasma();

export const putSpecimenPlasma = async(item, index) => {
    await putPlasmaInTube(item);
};
// putPlasmaInTube('P0XK59N');

const getArrayWithPlasma = async() => {
    console.log(tubes);
    tubes.forEach(putSpecimenPlasma);
};

//Put into the queue queues/ELLA_RESULT_UPLOAD_QUEUE/
export const putInQueueElla = async (item, index) => {
    queueEllaResultUpload(item);
}
// tubeArray.forEach(putInQueueElla);

// queueEllaResultUpload('UF65SH5');
async function main () {
   // await createSpecimenPlasma();
   await getArray(12); //доделать
   await getArrayWithPlasma();
}

// main();

////////////////
const getRun = async () => {
    // await createSpecimenPlasma();
    tubeArray = await getArray();
    // await putPlasmaInTube();
    // await queueEllaResultUpload();
}
// getRun();
// createSpecimenPlasma();
// putPlasmaInTube();
// queueEllaResultUpload();


// specimen-plasma.js