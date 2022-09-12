# ember-config-service

[![Build Status](https://travis-ci.org/gmurphey/ember-config-service.svg?branch=master)](https://travis-ci.org/gmurphey/ember-config-service) [![Ember Observer Score](http://emberobserver.com/badges/ember-config-service.svg)](http://emberobserver.com/addons/ember-config-service) [![Greenkeeper badge](https://badges.greenkeeper.io/gmurphey/ember-config-service.svg)](https://greenkeeper.io/) [![npm version](https://badge.fury.io/js/ember-config-service.svg)](https://badge.fury.io/js/ember-config-service) [![npm](https://img.shields.io/npm/dm/ember-config-service.svg)](https://img.shields.io/npm/dm/ember-config-service.svg)

Get values from your app's `config/environment.js` with a service.

## Compatibility

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v14 or above

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

See the [Contributing](CONTRIBUTING.md) guide for details.