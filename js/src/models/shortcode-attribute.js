var Backbone = require('backbone');

var ShortcodeAttribute = Backbone.Model.extend({

	defaults: {
		attr:        '',
		label:       '',
		type:        '',
		value:       '',
		description: '',
		escape:      false,
		meta: {
			placeholder: '',
		},
	},

	initialize: function() {

		// If value not escaped, set to the default for this field type.
		if ( ! this.get( 'escape' ) && shortcodeUIFieldData[ this.get( 'type' ) ] ) {
			this.set( 'escape', shortcodeUIFieldData[ this.get( 'type' ) ].escape );
		}

	},

});

module.exports = ShortcodeAttribute;
