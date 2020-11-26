# [Quality Assurance Projects - American / British Translator](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/american-british-translator)

- I can provide my own project, not the example URL.

- You can POST to `/api/translate` with a body containing text with the text to translate and locale with either american-to-british or british-to-american. The returned object should contain the submitted text and translation with the translated text.

- The `/api/translate` route should handle the way time is written in American and British English. For example, ten thirty is written as "10.30" in British English and "10:30" in American English.

- The `/api/translate` route should also handle the way titles/honorifics are abbreviated in American and British English. For example, Doctor Wright is abbreviated as "Dr Wright" in British English and "Dr. Wright" in American English. See /public/american-to-british-titles.js for the different titles your application should handle.

- Wrap any translated spelling or terms with `<span class="highlight">...</span>` tags so they appear in green.

- If one or more of the required fields is missing, return `{ error: 'Required field(s) missing' }`.

- If text is empty, return `{ error: 'No text to translate' }`

- If locale does not match one of the two specified locales, return `{ error: 'Invalid value for locale field' }`.

- If text requires no translation, return "Everything looks good to me!" for the translation value.

- All 24 unit tests are complete and passing. See /tests/1_unit-tests.js for the expected behavior you should write tests for.

- All 6 functional tests are complete and passing. See /tests/2_functional-tests.js for the functionality you should write tests for.

----------------
- All logic can go into /components/translator.js
- Complete the /api/translate route in /routes/api.js
- Create all of the unit/functional tests in tests/1_unit-tests.js and tests/2_functional-tests.js
- See the JavaScript files in /components for the different spelling and terms your application should translate
- To run the tests on Repl.it, set NODE_ENV to test without quotes in the .env file
- To run the tests in the console, use the command npm run test. To open the Repl.it console, press Ctrl+Shift+P (Cmd if on a Mac) and type "open shell"