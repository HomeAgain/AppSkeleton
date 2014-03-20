module.exports = ExampleModel = Backbone.Model.extend({
	// idAttribute is the attribute on the instance
	// representing the id
	idAttribute: 'identifier',
	defaults: {
		data: []
	},
	initialize: function() {

		this.set('name', 'exampleModel');

		if (this.get('data').length === 0) {
			// this.fetch fetches data for this model
			// it hits the endpoint set in the collection
			// from where it's instanciated (here, example-collection)
			// adding /idAttribute to the url
			this.fetch();
		}
	}
});
