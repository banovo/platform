define(function(require) {
    'use strict';
    var BaseView = require('oroui/js/app/views/base/view');

    /**
     * Tags view, able to handle either `collection` of tags or plain array of `items`.
     *
     * @class
     */
    var TagsView = BaseView.extend({
        template: require('tpl!orotag/templates/viewer/tags-view.html'),
        listen: {
            'change model': 'render'
        },
        initialize: function(options) {
            this.fieldName = options.fieldName;
            return TagsView.__super__.initialize.apply(this, arguments);
        },
        getTemplateData: function() {
            return {
                model: this.model.toJSON(),
                showDefault: true,
                fieldName: this.fieldName,
                tagSortCallback: this.tagSortCallback
            };
        },
        tagSortCallback: function(a, b) {
            return (a.owner ? 1 : 0) - (b.owner ? 1 : 0);
        }
    });

    return TagsView;
});
