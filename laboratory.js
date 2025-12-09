class Laboratory {
    substancesList = [];
    constructor(substances) {
        if (!Array.isArray(substances) || substances.length === 0) {
            throw new Error('La liste des substances doit etre une liste non vide');
        }
        for (let substance of substances) {
            if (this.substancesList.includes(substance)) {
                throw new Error('La liste des substances doit contenir des elements uniques');
            }
            this.substancesList.push(substance);
        }
    }

    getQuantity(substance) {
        if (!this.substancesList.includes(substance)) {
            throw new Error('Substance inconnue');
        }
        return 0;
    }
    add(substance, quantity) {
        if (substance == null) {
            throw new Error('Une substance est requise');
        }
        if (!this.substancesList.includes(substance)) {
            throw new Error('Substance inconnue');
        }
        if (quantity < 0) {
            throw new Error('Impossible d\'ajouter une quantite negative');
        }
    }
}

module.exports = Laboratory;