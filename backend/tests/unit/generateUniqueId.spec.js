const generateImoqueId = require('../../src/utils/generateImoqueId');

describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        
        const id = generateImoqueId();

        expect(id).toHaveLength(8);
    })
})