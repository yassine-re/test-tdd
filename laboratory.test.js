const Laboratory = require('./laboratory');

describe('Laboratory', () => {
    describe('Constructeur', () => {
        test('creer une instance de Laboratory avec une liste vide', () => {
            const lab = new Laboratory([]);
            expect(lab).toBeInstanceOf(Laboratory);
        })
    })
});