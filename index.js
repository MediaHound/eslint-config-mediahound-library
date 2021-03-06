module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true
  },
  "plugins": [
    "import"
  ],
  "rules": {
    ////////// Possible Errors //////////

    "comma-dangle": [1, "never"], // disallow trailing commas in object literals
    "no-cond-assign": 1,          // disallow assignment in conditional expressions
    "no-constant-condition": 1,   // disallow use of constant expressions in conditions
    "no-control-regex": 1,        // disallow control characters in regular expressions
    "no-debugger": 1,             // disallow use of debugger
    "no-dupe-keys": 1,            // disallow duplicate keys when creating object literals
    "no-empty": 1,                // disallow empty statements
    "no-ex-assign": 1,            // disallow assigning to the exception in a catch block
    "no-extra-boolean-cast": 1,   // disallow double-negation boolean casts in a boolean context
    "no-extra-semi": 1,           // disallow unnecessary semicolons
    "no-func-assign": 1,          // disallow overwriting functions written as function declarations
    "no-inner-declarations": 1,   // disallow function or variable declarations in nested blocks
    "no-invalid-regexp": 1,       // disallow invalid regular expression strings in the RegExp constructor
    "no-irregular-whitespace": 1, // disallow irregular whitespace outside of strings and comments
    "no-negated-in-lhs": 1,       // disallow negation of the left operand of an in expression
    "no-obj-calls": 1,            // disallow the use of object properties of the global object (Math and JSON) as functions
    "no-regex-spaces": 1,         // disallow multiple spaces in a regular expression literal
    "no-sparse-arrays": 1,        // disallow sparse arrays
    "no-unreachable": 1,          // disallow unreachable statements after a return, throw, continue, or break statement
    "use-isnan": 1,               // disallow comparisons with the value NaN
    "valid-typeof": 1,            // Ensure that the results of typeof are compared against a valid string


    ////////// Best Practices //////////

    "block-scoped-var": 1,      // treat var statements as if they were block scoped (off by default)
    "curly": 1,                 // specify curly brace conventions for all control statements
    "default-case": 1,          // require default case in switch statements (off by default)
    "dot-notation": 1,          // encourages use of dot notation whenever possible
    "eqeqeq": 1,                // require the use of === and !==
    "guard-for-in": 1,          // make sure for-in loops have an if statement (off by default)
    "no-alert": 1,              // disallow the use of alert, confirm, and prompt
    "no-caller": 1,             // disallow use of arguments.caller or arguments.callee
    "no-div-regex": 1,          // disallow division operators explicitly at beginning of regular expression (off by default)
    "no-labels": 1,             // disallow use of labels for anything other then loops and switches
    "no-eq-null": 1,            // disallow comparisons to null without a type-checking operator (off by default)
    "no-eval": 1,               // disallow use of eval()
    "no-extend-native": 1,      // disallow adding to native types
    "no-extra-bind": 1,         // disallow unnecessary function binding
    "no-fallthrough": 1,        // disallow fallthrough of case statements
    "no-floating-decimal": 1,   // disallow the use of leading or trailing decimal points in numeric literals (off by default)
    "no-implied-eval": 1,       // disallow use of eval()-like methods
    "no-iterator": 1,           // disallow usage of __iterator__ property
    "no-lone-blocks": 1,        // disallow unnecessary nested blocks
    "no-loop-func": 1,          // disallow creation of functions within loops
    "no-multi-str": 1,          // disallow use of multiline strings
    "no-native-reassign": 1,    // disallow reassignments of native objects
    "no-new": 1,                // disallow use of new operator when not part of the assignment or comparison
    "no-new-func": 1,           // disallow use of new operator for Function object
    "no-new-wrappers": 1,       // disallows creating new instances of String, Number, and Boolean
    "no-octal": 1,              // disallow use of octal literals
    "no-octal-escape": 1,       // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    "no-process-env": 0,        // disallow use of process.env (off by default)
    "no-proto": 1,              // disallow usage of __proto__ property
    "no-redeclare": 1,          // disallow declaring the same variable more then once
    "no-return-assign": 0,      // disallow use of assignment in return statement
    "no-script-url": 1,         // disallow use of javascript: urls.
    "no-self-compare": 1,       // disallow comparisons where both sides are exactly the same (off by default)
    "no-sequences": 1,          // disallow use of comma operator
    "no-unused-expressions": 1, // disallow usage of expressions in statement position
    "no-void": 1,               // disallow use of void operator (off by default)
    "no-with": 1,               // disallow use of the with statement
    "radix": 1,                 // require use of the second argument for parseInt() (off by default)
    "wrap-iife": 1,             // require immediate function invocation to be wrapped in parentheses (off by default)
    "yoda": 1,                  // require or disallow Yoda conditions


    ////////// Variables //////////

    "no-catch-shadow": 1,             // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
    "no-delete-var": 1,               // disallow deletion of variables
    "no-label-var": 1,                // disallow labels that share a name with a variable
    "no-shadow": 1,                   // disallow declaration of variables already declared in the outer scope
    "no-shadow-restricted-names": 1,  // disallow shadowing of names such as arguments
    "no-undef": 1,                    // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undef-init": 1,               // disallow use of undefined when initializing variables
    "no-undefined": 0,                // disallow use of undefined variable (off by default)
    "no-unused-vars": 0,              // disallow declaration of variables that are not used in the code
    "no-use-before-define": 1,        // disallow use of variables before they are defined


    ////////// Stylistic Issues //////////

    "keyword-spacing": [2, {"before": true, "after": true, "overrides": {}}],
    "brace-style": [1, "stroustrup"],               // enforce one true brace style (off by default)
    "camelcase": 1,                 // require camel case names
    "comma-spacing": 1,             // enforce spacing before and after comma
    "comma-style": 1,               // enforce one true comma style (off by default)
    "consistent-this": [1, "_this"],// enforces consistent naming when capturing the current execution context (off by default)
    "eol-last": 1,                  // enforce newline at the end of file, with no multiple empty lines
    "func-style": 1,                // enforces use of function declarations or expressions (off by default)
    "max-nested-callbacks": 1,      // specify the maximum depth callbacks can be nested (off by default)
    "new-cap": 0,                   // require a capital letter for constructors
    "new-parens": 1,                // disallow the omission of parentheses when invoking a constructor with no arguments
    "no-array-constructor": 1,      // disallow use of the Array constructor
    "no-lonely-if": 1,              // disallow if as the only statement in an else block (off by default)
    "no-mixed-spaces-and-tabs": 1,  // disallow mixed spaces and tabs for indentation
    "no-multiple-empty-lines": 1,   // disallow multiple empty lines (off by default)
    "no-nested-ternary": 1,         // disallow nested ternary expressions (off by default)
    "no-new-object": 1,             // disallow use of the Object constructor
    "no-spaced-func": 1,            // disallow space between function identifier and application
    "no-trailing-spaces": 1,        // disallow trailing whitespace at the end of lines
    "one-var": 0,                   // allow just one var statement per function (off by default)
    "operator-assignment": 1,       // require assignment operator shorthand where possible or prohibit it entirely (off by default)
    "quotes": [1,  "single"],       // specify whether double or single quotes should be used
    "jsx-quotes": [2, "prefer-double"],
    "semi": 1,                      // require or disallow use of semicolons instead of ASI
    "sort-vars": 1,                 // sort variables within the same declaration block (off by default)
    "space-before-blocks": 1,       // require or disallow space before blocks (off by default)
    "space-infix-ops": 1,           // require spaces around operators
    "space-unary-ops": 1,           // Require or disallow spaces before/after unary operators (words on by default, nonwords off by default)

    /////////// Import /////////
    "import/no-unresolved": [2, { commonjs: true, amd: true }],
    "import/imports-first": [1, "absolute-first"],
    "import/named": 2,
    "import/namespace": 2,
    "import/no-duplicates": 2,
    "import/default": 2,
    "import/export": 2,
    "import/no-extraneous-dependencies": 1,
    "import/no-mutable-exports": 1,
    "import/newline-after-import": 1,
  }
};
