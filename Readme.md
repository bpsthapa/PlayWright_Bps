# Run tests
npm test

# Generate the Allure HTML report
npm run allure:generate

# Open the report in your browser
npm run allure:open


npm test tests/BecomeTestExpert/test.spec.js
# clear report
allure generate ./allure-results --clean -o ./allure-report
# open report
allure open ./allure-report

# at once
npx playwright test tests/BecomeTestExpert/test.spec.js && allure generate ./allure-results --clean -o ./allure-report && allure open ./allure-report