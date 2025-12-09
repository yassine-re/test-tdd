const Laboratory = require('./laboratory');

describe('Laboratory', () => {
    describe('Constructeur', () => {
        test('creer une instance de Laboratory avec une liste vide', () => {
            expect(() => new Laboratory([])).toThrow('La liste des substances doit etre une liste non vide');
        })

        test('creer une instance de Laboratory avec une liste correcte', () => {
            const test = new Laboratory(['A', 'B']);
            expect(test.getQuantity("A")).toBe(0);
            expect(test.getQuantity("B")).toBe(0);
            expect(() => test.getQuantity("C")).toThrow('Substance inconnue');
        })
        test('creer une instance de Laboratory avec une liste nulle', () => {
            expect(() => new Laboratory(null)).toThrow('La liste des substances doit etre une liste non vide');
        })
        test('creer une instance de Laboratory avec des elements dupliques', () => {
            expect(() => new Laboratory(['A', 'B', 'A'])).toThrow('La liste des substances doit contenir des elements uniques');
        })
    })

    describe('add', () => {
        let lab;
        beforeEach(() => {
            lab = new Laboratory(['A', 'B']);
        });
        describe('cas d\'erreur', () => {
            test('ajouter une substance inconnue', () => {
                expect(() => lab.add('C', 1)).toThrow('Substance inconnue');
            })
            test('ajouter une substance negative', () => {
                expect(() => lab.add('A', -1)).toThrow('Impossible d\'ajouter une quantite negative');
            })
            test('ajouter une substance nulle', () => {
                expect(() => lab.add(null, 0)).toThrow('Une substance est requise');
            })
            test('ajouter une substance sans quantite', () => {
                expect(() => lab.add('A')).toThrow('Impossible d\'ajouter une substance sans quantite');
            })
        });
    });
});