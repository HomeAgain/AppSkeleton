application = require('application');

// The collection is a group of instances of a model
ExampleCollection = require('models/example-collection');
// A collection view is a special view to render collections
ExampleCollectionView = require('views/example-collectionview');

module.exports = Router = Backbone.Router.extend({

  routes: {
    // Fill in your router:
    // 'url': 'function'
    '': 'example'
  },

  example: function() {
    // Instantiate a new example collection
    exampleCollection = new ExampleCollection();

    // Fetch calls the api endpoint set in the example-collection
    // file to fill in the example model in the collection
    exampleCollection.fetch({
      success: function() {
        view = new ExampleCollectionView({
          collection: exampleCollection
        });
        application.layout.content.show(view);
      },
      error: function(err) {
        console.log(err);
      }
    });
  }

});
