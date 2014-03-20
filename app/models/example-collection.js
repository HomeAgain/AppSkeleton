ExampleModel = require('models/example-model');

module.exports = ExampleCollection = Backbone.Collection.extend({
    // The url used to fetch data for the collection
    url: 'http://127.0.0.1:4000/example/',
    // the model used by the collection. It also
    // sets the url to fetch for a single model from
    // the url given here
    model: ExampleModel
});
