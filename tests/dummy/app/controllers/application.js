import Controller from '@ember/controller';
import { inject } from '@ember/service';

const {
  service
} = inject;

export default Controller.extend({
  config: service()
});
