Ext.define('KanaFlash.view.Main', {
    extend: 'Ext.Container',
    xtype: "main",

    requires: [
    ],

    config: {
        fullscreen: true,
        layout:"card",
        ui: 'light',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Kana Flash',
                cls: 'nav-bar',
                items: [
                    {
                        id: 'entryTypeBtn',
                        xtype: 'button',
                        text: '',
                        ui: 'action'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        id: 'newEntryBtn',
                        xtype: 'button',
                        text: 'New entry',
                        ui: 'action'
                    }
                ]
            },
            {
                id: 'contentPanel',
                xtype: 'panel',
                title: 'Content'
            }
        ]
    }
});