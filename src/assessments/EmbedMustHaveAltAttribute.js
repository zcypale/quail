/**
 * A simple test case that determines if elements, specified by a selector,
 * exist or not.
 *
 * The test fails for elements that are found and a case is created for each
 * one. The test passes is the selector finds no matching elements.
 */
var Case = require('Case');
const DOM = require('DOM');

var EmbedMustHaveAltAttribute = {
  run: function (test) {

    var selector = 'embed';

    test.get('scope').forEach(function (scope) {
      var candidates = DOM.scry(selector, scope);
      if (!candidates.length) {
        test.add(Case({
          element: undefined,
          status: 'inapplicable'
        }));
      }
      else {
        candidates.forEach(function (element) {
          var status = 'failed';
          var alt = element.getAttribute('alt');
          if (alt && typeof alt === 'string' && alt.length > 0) {
            status = 'passed';
          }

          test.add(Case({
            element: element,
            status: status
          }));
        });
      }
    });
  },

  meta: {
    testability: 1,
    title: {
      en: '\"Embed\" elements must have an \"alt\" attribute',
      nl: '\"Embed\"-elementen moeten een \"alt\"-attribuut hebben'
    },
    description: {
      en: 'All <code>embed</code> elements must have an \"alt\" attribute.',
      nl: 'Alle <code>embed</code>-elementen moeten een \"alt\"-attribuut hebben.'
    },
    guidelines: [

    ],
    tags: [
      'object',
      'embed',
      'content'
    ]
  }
};
module.exports = EmbedMustHaveAltAttribute;
