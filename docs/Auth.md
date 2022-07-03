# User Authentication and Authorization
### Plan is to allow for Users to sign up via email/pw as well as Slack SSO through Auth0
Doing this is completely free and integrates easily with the SPGI slack currently using Slack Pro and opens door for alumni integration

All email accounts will be pre-verified and we can create a request user feature with human authentication to allow webmaster to manage new user management

## Slack SSO
SAML SSO in Auth0 allows user connect with Email/pw sign in

# Authorization
Auth0 in dashboard allows for user role management to be handled and passed in token headers. We will just need to handle deserialization and role access on the server hosting(i.e AWS most likely)
