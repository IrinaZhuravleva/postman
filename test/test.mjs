// import assert from 'assert';
//
// describe('Array', function() {
//     describe('#indexOf()', function() {
//         it('should return -1 when the value is not present', function() {
//             assert.equal([1, 2, 3].indexOf(4), -1);
//         });
//     });
// });

import {searchForMaterialTypeInfo} from "../functions.js";
import { expect } from 'chai';

describe('TestResults.Report.Approved', () => {
    it('TC-21844. TestResults.Report.Approved - validation checks: person is null', async () => {
        const string = 'IDTE pH 8.0 50 mL';
        const a = string.split(' ').join('+');
        const data = await searchForMaterialTypeInfo(a);
        expect(data[0].riskLevel).to.be.eq(2);
        expect(data[0].externalIds).to.be.eq('1001877');
        expect(data[0].isKit).to.be.eq(false);
        expect(data[0].isKitPart).to.be.eq(false);
        expect(data[0].isFormulated).to.be.eq(true);
    });
});
