CKEditor = function(options) {
    var self = this;
    this.options = options = _.defaults(options, {
        'editor_type'  :    'advance',
        'className'    :    'ckeditor'
    });
};