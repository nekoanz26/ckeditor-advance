Package.describe({
    name: 'nekoanz:ckeditor-advance',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'CKEditor(advance) wrapper for meteorjs',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use(['ecmascript','templating']);

    api.addFiles([
        'ckeditor-template.html',
        'ckeditor-template.js',
        'ckeditor.min.js',
        'ckeditor-advance.js',
    ], 'client');

    api.addAssets([
        'config.js',
        'build-config.js',
        'contents.css',
        'styles.js',
    ], 'client');

    /*
     * Skins - Moono
     */
    api.addAssets([
        'skins/moono/dialog.css',
        'skins/moono/dialog_ie.css',
        'skins/moono/dialog_ie7.css',
        'skins/moono/dialog_ie8.css',
        'skins/moono/dialog_iequirks.css',
        'skins/moono/editor.css',
        'skins/moono/editor_gecko.css',
        'skins/moono/editor_ie.css',
        'skins/moono/editor_ie7.css',
        'skins/moono/editor_ie8.css',
        'skins/moono/editor_iequirks.css',
        'skins/moono/icons.png',
        'skins/moono/icons_hidpi.png',
        'skins/moono/images/arrow.png',
        'skins/moono/images/close.png',
        'skins/moono/images/lock-open.png',
        'skins/moono/images/lock.png',
        'skins/moono/images/refresh.png',
        'skins/moono/images/spinner.gif',
        'skins/moono/images/hidpi/close.png',
        'skins/moono/images/hidpi/lock-open.png',
        'skins/moono/images/hidpi/lock.png',
        'skins/moono/images/hidpi/refresh.png',
    ], 'client');

    /*
     * Languages
     */
    api.addAssets([
        'lang/af.js',
        'lang/ar.js',
        'lang/bg.js',
        'lang/bn.js',
        'lang/bs.js',
        'lang/ca.js',
        'lang/cs.js',
        'lang/cy.js',
        'lang/da.js',
        'lang/de.js',
        'lang/el.js',
        'lang/en-au.js',
        'lang/en-ca.js',
        'lang/en-gb.js',
        'lang/en.js',
        'lang/eo.js',
        'lang/es.js',
        'lang/et.js',
        'lang/eu.js',
        'lang/fa.js',
        'lang/fi.js',
        'lang/fo.js',
        'lang/fr-ca.js',
        'lang/fr.js',
        'lang/gl.js',
        'lang/gu.js',
        'lang/he.js',
        'lang/hi.js',
        'lang/hr.js',
        'lang/hu.js',
        'lang/id.js',
        'lang/is.js',
        'lang/it.js',
        'lang/ja.js',
        'lang/ka.js',
        'lang/km.js',
        'lang/ko.js',
        'lang/ku.js',
        'lang/lt.js',
        'lang/lv.js',
        'lang/mk.js',
        'lang/mn.js',
        'lang/ms.js',
        'lang/nb.js',
        'lang/nl.js',
        'lang/no.js',
        'lang/pl.js',
        'lang/pt-br.js',
        'lang/pt.js',
        'lang/ro.js',
        'lang/ru.js',
        'lang/si.js',
        'lang/sk.js',
        'lang/sl.js',
        'lang/sq.js',
        'lang/sr-latn.js',
        'lang/sr.js',
        'lang/th.js',
        'lang/tr.js',
        'lang/tt.js',
        'lang/ug.js',
        'lang/uk.js',
        'lang/vi.js',
        'lang/zh-cn.js',
        'lang/zh.js',
    ], 'client');

    /*
     * Plugins - a11yhelp
     */
    api.addAssets([
        'plugins/a11yhelp/dialogs/lang/af.js',
        'plugins/a11yhelp/dialogs/lang/ar.js',
        'plugins/a11yhelp/dialogs/lang/bg.js',
        'plugins/a11yhelp/dialogs/lang/ca.js',
        'plugins/a11yhelp/dialogs/lang/cs.js',
        'plugins/a11yhelp/dialogs/lang/cy.js',
        'plugins/a11yhelp/dialogs/lang/da.js',
        'plugins/a11yhelp/dialogs/lang/de.js',
        'plugins/a11yhelp/dialogs/lang/el.js',
        'plugins/a11yhelp/dialogs/lang/en-gb.js',
        'plugins/a11yhelp/dialogs/lang/en.js',
        'plugins/a11yhelp/dialogs/lang/eo.js',
        'plugins/a11yhelp/dialogs/lang/es.js',
        'plugins/a11yhelp/dialogs/lang/et.js',
        'plugins/a11yhelp/dialogs/lang/eu.js',
        'plugins/a11yhelp/dialogs/lang/fa.js',
        'plugins/a11yhelp/dialogs/lang/fi.js',
        'plugins/a11yhelp/dialogs/lang/fo.js',
        'plugins/a11yhelp/dialogs/lang/fr-ca.js',
        'plugins/a11yhelp/dialogs/lang/fr.js',
        'plugins/a11yhelp/dialogs/lang/gl.js',
        'plugins/a11yhelp/dialogs/lang/gu.js',
        'plugins/a11yhelp/dialogs/lang/he.js',
        'plugins/a11yhelp/dialogs/lang/hi.js',
        'plugins/a11yhelp/dialogs/lang/hr.js',
        'plugins/a11yhelp/dialogs/lang/hu.js',
        'plugins/a11yhelp/dialogs/lang/id.js',
        'plugins/a11yhelp/dialogs/lang/it.js',
        'plugins/a11yhelp/dialogs/lang/ja.js',
        'plugins/a11yhelp/dialogs/lang/km.js',
        'plugins/a11yhelp/dialogs/lang/ko.js',
        'plugins/a11yhelp/dialogs/lang/ku.js',
        'plugins/a11yhelp/dialogs/lang/lt.js',
        'plugins/a11yhelp/dialogs/lang/lv.js',
        'plugins/a11yhelp/dialogs/lang/mk.js',
        'plugins/a11yhelp/dialogs/lang/mn.js',
        'plugins/a11yhelp/dialogs/lang/nb.js',
        'plugins/a11yhelp/dialogs/lang/nl.js',
        'plugins/a11yhelp/dialogs/lang/no.js',
        'plugins/a11yhelp/dialogs/lang/pl.js',
        'plugins/a11yhelp/dialogs/lang/pt-br.js',
        'plugins/a11yhelp/dialogs/lang/pt.js',
        'plugins/a11yhelp/dialogs/lang/ro.js',
        'plugins/a11yhelp/dialogs/lang/ru.js',
        'plugins/a11yhelp/dialogs/lang/si.js',
        'plugins/a11yhelp/dialogs/lang/sk.js',
        'plugins/a11yhelp/dialogs/lang/sl.js',
        'plugins/a11yhelp/dialogs/lang/sq.js',
        'plugins/a11yhelp/dialogs/lang/sr-latn.js',
        'plugins/a11yhelp/dialogs/lang/sr.js',
        'plugins/a11yhelp/dialogs/lang/sv.js',
        'plugins/a11yhelp/dialogs/lang/th.js',
        'plugins/a11yhelp/dialogs/lang/tr.js',
        'plugins/a11yhelp/dialogs/lang/tt.js',
        'plugins/a11yhelp/dialogs/lang/ug.js',
        'plugins/a11yhelp/dialogs/lang/uk.js',
        'plugins/a11yhelp/dialogs/lang/vi.js',
        'plugins/a11yhelp/dialogs/lang/zh-cn.js',
        'plugins/a11yhelp/dialogs/lang/zh.js',
        'plugins/a11yhelp/dialogs/a11yhelp.js',
    ], 'client');

    /*
     * Plugins - clipboard
     */
    api.addAssets([
        'plugins/clipboard/dialogs/paste.js'
    ], 'client');

    /*
     * Plugins - find
     */
    api.addAssets([
        'plugins/find/dialogs/find.js'
    ], 'client');

    /*
     * Plugins - link
     */
    api.addAssets([
        'plugins/link/dialogs/anchor.js',
        'plugins/link/dialogs/link.js',
        'plugins/link/images/anchor.png',
        'plugins/link/images/hidpi/anchor.png',
    ], 'client');
});