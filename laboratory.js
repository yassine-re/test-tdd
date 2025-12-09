class Laboratory {
    constructor(substances) {
        if (!Array.isArray(substances) || substances.length === 0) {
            throw new Error('La liste des substances doit etre une liste non vide');
        }
        this.substancesMap = new Map();

        for (let substance of substances) {
            if (this.substancesMap.has(substance)) {
                throw new Error('La liste des substances doit contenir des elements uniques');
            }
            this.substancesMap.set(substance, 0);
        }
    }

    getQuantity(substance) {
        if (!this.substancesMap.has(substance)) {
            throw new Error('Substance inconnue');
        }
        return this.substancesMap.get(substance);
    }

    add(substance, quantity) {
        if (substance == null) {
            throw new Error('Une substance est requise');
        }
        if (quantity == null) {
            throw new Error('Impossible d\'ajouter une substance sans quantite');
        }
        if (quantity < 0) {
            throw new Error('Impossible d\'ajouter une quantite negative');
        }
        if (!this.substancesMap.has(substance)) {
            throw new Error('Substance inconnue');
        }
        this.substancesMap.set(substance, this.substancesMap.get(substance) + quantity);
    }
}

module.exports = Laboratory;