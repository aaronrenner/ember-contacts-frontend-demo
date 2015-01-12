import {
  formattedDate
} from 'front-end/helpers/formatted-date';

module('FormattedDateHelper');

// Replace this with your real tests.
test('it works', function() {
  var result = formattedDate(new Date(2014, 0, 1, 12, 0, 0, 0), 'MMMM Do, YYYY [at] h:mm a');
  equal(result, 'January 1st, 2014 at 12:00 pm');
});
