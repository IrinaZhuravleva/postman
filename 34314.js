import {createSpecimen, putAnySpecimenInTube} from "./functions.js";
import {getArrayWithTubes} from "./tube-types.js";
import {createSpecimenPlasma, putPlasmaInTube} from "./functions-dev.js";

const main = async () => {
    await createSpecimenPlasma('test');
    // const tube = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    await putPlasmaInTube('9XS5S4C', 500, 'test');
    await putPlasmaInTube('914SCXF', 500, 'test');
}
main();