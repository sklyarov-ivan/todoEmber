App = Ember.Application.create();

// App.Store = DS.Store.extend({
//   adapter: DS.FixtureAdapter
// });

// App.Store = DS.Store.extend({
//   adapter: DS.LSAdapter
// });

// App.Store = DS.Store.extend();
// App.ApplicationAdapter = DS.FixtureAdapter.extend();
App.ApplicationAdapter = DS.LSAdapter.extend({
    namespace:'todos-emberjs'
});
