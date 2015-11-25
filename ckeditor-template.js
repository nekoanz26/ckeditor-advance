Template.CKEditor.rendered = function () {
    var data = this.data ? this.data : {};
    var options = data.options ? data.options : {};

    var ckeditor = new CKEditor(options);
    window.CKEDITOR_BASEPATH = "/packages/nekoanz_ckeditor-advance/";

    window.CKEDITOR_COUNTER = typeof window.CKEDITOR_COUNTER === 'undefined' ? 0 : window.CKEDITOR_COUNTER + 1;
    var id = 'ckeditor-'+window.CKEDITOR_COUNTER;
    var textarea = document.createElement('textarea');
    textarea.setAttribute('id',id);
    textarea.defaultValue = typeof options.defaultValue !== 'undefined' ? options.defaultValue : '';
    
    if(options.className){
        textarea.className = options.className;
    }

    this.$('.ckeditor-wrapper').append(textarea);
    ckeditor.editor = CKEDITOR.replace(id);
};