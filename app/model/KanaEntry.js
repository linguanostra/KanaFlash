Ext.define('KanaFlash.model.KanaEntry', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['H', 'K', 'R'],

        proxy: {
            type: 'ajax',
            url: 'data/KanaEntries.json',
            reader: {
                type: 'json',
                rootProperty: 'Data'
            }
        }
    }
});