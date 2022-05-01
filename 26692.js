import {putAnySpecimenInTube, createSpecimen, transfer} from "./functions.js";
import {getArrayWithTubes, queueUpload} from "./tube-types.js";
import {date, upperCaseMonth} from "./index.js";
import axios from "axios";
import {config} from "./creationContainers.js";

const main26692 = async() => {
    const specName = "CF_DNA_test2";
    await createSpecimen("CF_DNA", specName);
    // // await createSpecimen("PLASMA", "PLASMA_test");
    //
    // const arrKits = await getArrayWithTubes('5ML_SIMPORT_CRYOTUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 6);
    //
    // await putAnySpecimenInTube('HAXP174', 100, specName);

    // <empty_tube>,<tube_dest_1>, <tube_dest_2>, <tube_dest_3>, <tube_dest_4>, and <buffy_run_dest_tube>.

    await transfer('HAXP174', 'UPSF613', specName, 200);

};
main26692();
// 26692.js

