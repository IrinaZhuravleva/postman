import { tubes, createOneTube,
    createSpecimenPlasma,
    putPlasmaInTube,
    queueEllaResultUpload,
    createRunEllaResultUpload,
    containersRunEllaResultUpload } from './functions-dev.js'
import { createKitOneTube,
    createCollectEvent } from './creationContainers.js'


// 2. create kit with tubes and to know order id
createKitOneTube();
async function main () {
    // 1. create Specimen
    await createSpecimenPlasma();
    // 3. put specimen into tubes
    await getArrayWithPlasma();
}






