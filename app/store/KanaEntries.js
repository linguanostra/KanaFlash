Ext.define('KanaFlash.store.KanaEntries', {
    extend: 'Ext.data.Store',
    requires: 'KanaFlash.model.KanaEntry',

    config: {
        model: 'KanaFlash.model.KanaEntry'
    },

    getRecords: function() {

        return this.data.all;

    }
});