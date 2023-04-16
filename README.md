## Course Assignment

[![Deploy static content to Pages](https://github.com/Ingvildb1/social-media-client-ca/actions/workflows/pages.yml/badge.svg)](https://github.com/Ingvildb1/social-media-client-ca/actions/workflows/pages.yml) [![Code Review](https://github.com/Ingvildb1/social-media-client-ca/actions/workflows/gpt.yml/badge.svg)](https://github.com/Ingvildb1/social-media-client-ca/actions/workflows/gpt.yml) [![Automated Unit Testing](https://github.com/Ingvildb1/social-media-client-ca/actions/workflows/unit-test.yml/badge.svg)](https://github.com/Ingvildb1/social-media-client-ca/actions/workflows/unit-test.yml) [![Automated E2E Testing](https://github.com/Ingvildb1/social-media-client-ca/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/Ingvildb1/social-media-client-ca/actions/workflows/e2e-test.yml)

### Brief
CA : improving the quality of an existing application by providing various development workflows as well as a testing strategy.


## Workflows/hooks

- Project is configured to run Prettier on commit
- Project is configured to run ESLint on commit
- Project default branch is protected, code is versioned and branching conventions have been followed
- Project is configured to build and deploy to pages on merge to default branch

## Unit tests

- The login function fetches and stores a token in browser storage
- The logout function clears the token from browser storage

## End-To-End tests

- The user can log in and access their profile
- The user cannot submit the login form with invalid credentials and is shown a message
- The user can log out with the logout button
