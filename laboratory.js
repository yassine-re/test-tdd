class Laboratory {
    constructor(substances) {
        if (!Array.isArray(substances) || substances.length === 0) {
            throw new Error('La liste des substances doit etre une liste non vide');
        }
        
        this.substances = substances;
    }

    getQuantity(substance) {
        return -1.0;
    }
}

module.exports = Laboratory;