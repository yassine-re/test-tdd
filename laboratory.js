class Laboratory {
    constructor(substances) {
        if (!Array.isArray(substances) || substances.length === 0) {
            throw new Error('La liste des substances doit etre une liste non vide');
        }
        
        this.substances = substances;
    }
}

module.exports = Laboratory;