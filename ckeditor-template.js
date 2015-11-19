Template.CKEditor.rendered = function () {
    var data = this.data;

    var ckeditor = new CKEditor(data.options);

    window.CKEDITOR_COUNTER = typeof window.CKEDITOR_COUNTER === 'undefined' ? 0 : window.CKEDITOR_COUNTER + 1;
    var id = 'ckeditor-'+window.CKEDITOR_COUNTER;
    var textarea = document.createElement('textarea');
    textarea.setAttribute('id',id);

    this.$('.ckeditor-wrapper').append(textarea);
    ckeditor.editor = CKEDITOR.replace(id);
    console.log(ckeditor.editor);
};