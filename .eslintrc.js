module.exports = {
   'env': {
      'es6': true
   },
   'globals': {
      'process': true /*config global variable*/
   },
   'rules': {
      'indent': [
         'error',
         3,
         {
            'SwitchCase': 1
         }
      ],
      'linebreak-style': [
         0,
         'windows'
      ],
      'quotes': [
         'error',
         'single'
      ],
      'semi': [
         'error',
         'always'
      ],
      'space-before-blocks': [
         'error',
         'always'
      ],
      'keyword-spacing': [
         'error', {
            'overrides': {
               'if': {
                  'after': false
               },
               'for': {
                  'after': false
               },
               'while': {
                  'after': false
               },
               'do': {
                  'after': false
               },
               'switch': {
                  'after': false
               },
               'catch': {
                  'after': false
               }
            }
         }
      ],
      'comma-spacing': [
         'error', {
            'before': false,
            'after': true
         }
      ],
      'comma-style': [
         'error',
         'last'
      ],
      'no-lonely-if': [
         'error'
      ],
      'padded-blocks': [
         'error',
         'never'
      ],
      'no-console': 'off',
      'no-empty-character-class': 'error',
      'array-bracket-spacing': [
         'error',
         'never'
      ],
      'func-name-matching': 'error'
   },
   parserOptions: {
      sourceType: 'module'
   }
};
