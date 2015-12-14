//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src'
});
//</debug>

Ext.application({
    name: 'KanaFlash',

    requires: ['KanaFlash.components.Utils'],
    models: ['KanaEntry'],
    stores: ['KanaEntries'],
    controllers: ['Main'],
    views: ['Main'],

    launch: function() {

        var mainView = Ext.create('KanaFlash.view.Main');
        Ext.Viewport.add(mainView);

    }
});

