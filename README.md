# ember-config-service


Easily get values from your app's `config/environment.js` with a service.

[![Build Status](https://travis-ci.org/gmurphey/ember-config-service.svg?branch=master)](https://travis-ci.org/gmurphey/ember-config-service) [![Ember Observer Score](http://emberobserver.com/badges/ember-config-service.svg)](http://emberobserver.com/addons/ember-config-service) [![Greenkeeper badge](https://badges.greenkeeper.io/gmurphey/ember-config-service.svg)](https://greenkeeper.io/) [![npm version](https://badge.fury.io/js/ember-config-service.svg)](https://badge.fury.io/js/ember-config-service) [![npm](https://img.shields.io/npm/dm/ember-config-service.svg)](https://img.shields.io/npm/dm/ember-config-service.svg)

## Usage

Install this addon by running the following with [Ember CLI](http://www.ember-cli.com/).

    ember install ember-config-service

The `config` service is now available for you to use in your app. For example, if you added the following to your `config/environment.js`:

``` javascript
ENV.api = {
  host: 'http://mydomain.com',
  namespace: 'myapi'
};
```

You could define your application adapter with the following:

``` javascript
import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  config: Ember.inject.service(),

  host: Ember.computed.alias('config.api.host'),
  namespace: Ember.computed.alias('config.api.namespace')
});
```

## Contributing

Pull requests and issues are welcome!

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
