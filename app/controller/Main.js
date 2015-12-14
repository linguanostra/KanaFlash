Ext.define('KanaFlash.controller.Main', {

    extend: 'Ext.app.Controller',
    requires: [],

    config: {

        stores: ['KanaEntries'],

        refs: {
            main: 'main',
            newEntryBtn: '#newEntryBtn',
            contentPanel: '#contentPanel',
            entryTypeBtn: '#entryTypeBtn'
        },

        control: {
            entryTypeBtn: {
                tap: 'entryTypeBtnTap'
            },
            newEntryBtn: {
                tap: 'onNewEntryBtnTap'
            }
        }

    },
    init: function() {

        // Define a template for the content
        this.templateContent = new Ext.XTemplate(
            '<div class="mainContentContainer">',
                '<div>',
                    '<span class="kanaChar">',
                        '{contentKana}',
                    '</span>',
                '</div>',
                '<div>',
                    '<span class="romajiChar">',
                        '{contentRomaji}',
                    '</span>',
                '</div>',
            '</div>'
        );

        // Assign base values
        this.currentEntryIndex = 0;
        this.kanaType = 'H';

    },
    launch: function() {

        // Assign labels
        this.setKanaTypeLabels();

        // Get store
        var entriesStore = this.getEntriesStore();

        // Attach events
        entriesStore.on({
            load: 'onEntriesLoad',
            scope: this
        });

        // Load data
        entriesStore.load();

    },

    getEntriesStore: function() {

        return Ext.getStore('KanaEntries');

    },

    setKanaTypeLabels: function() {

        this.getEntryTypeBtn().setText(this.kanaType == 'H' ? 'Hiragana' : 'Katakana');

    },

    onEntriesLoad: function() {

        this.generateEntry();

    },

    generateEntry: function() {

        this.renderEntry(KanaFlash.components.Utils.getRandomInt(1, this.getEntriesStore().getRecords().length) - 1);

    },

    renderEntry: function(entryIndex) {

        var records = this.getEntriesStore().getRecords(),
            record = records[entryIndex];

        this.templateContent.overwrite(this.getContentPanel().element, {
            contentKana: record.data[this.kanaType],
            contentRomaji: record.data.R
        });

        this.currentEntryIndex = entryIndex;

    },

    entryTypeBtnTap: function() {

        this.kanaType = (this.kanaType == 'H' ? 'K' : 'H');
        this.setKanaTypeLabels();
        this.renderEntry(this.currentEntryIndex);

    },

    onNewEntryBtnTap: function() {

        this.generateEntry();

    }

});
