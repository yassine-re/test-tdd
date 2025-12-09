const Laboratory = require('./laboratory');

describe('Laboratory', () => {
    describe('Constructeur', () => {
        test('creer une instance de Laboratory avec une liste vide', () => {
            expect(() => new Laboratory([])).toThrow('La liste des substances doit etre une liste non vide');
        })
    })
});