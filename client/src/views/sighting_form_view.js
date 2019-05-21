const PubSub = require('../helpers/pub_sub.js')

const SightingFormView = function (form) {
  this.form = form;
};

SightingFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

SightingFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newSighting = this.createNewSighting(evt.target)
  PubSub.publish('SightingFormView:sumbit', (newSighting)) 
  console.log('form view', newSighting)
  evt.target.reset()
}

SightingFormView.prototype.createNewSighting = function (form) {
  const newSighting = {
    species: form.species.value,
    location: form.location.value,
    date: form.date.value
  }
  return newSighting
}

module.exports = SightingFormView;
