Ext.define('KanaFlash.components.Utils', {
    singleton: true,

    /**
     * Get a random number in given interval
     * @param {Number} min Lower bound
     * @param {Number} max Upper bound
     * @returns {Number}
     */
    getRandomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

});