# Writing tests for this app

## Test types

- e2e: These tests will run against `next dev` and `next start`
- integration: These tests run misc checks and modes and is where tests used to be added before we added more specific folders. Ideally we don't add new test suites here as tests here are not isolated from the monorepo.
- unit: These are very fast tests that should run without a browser or running next and should be testing a specific utility.

## Best Practices

- Next.js: https://github.com/vercel/next.js/docs/testing.md
