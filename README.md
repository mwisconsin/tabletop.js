# tabletop.js
Utilities to interact with Tabletop.events API

# To install:
  1) Download and install Node.js
  
  2) Clone repository
  
  3) In local folder, execute "npm i"

You'll need to create a credentials.js file:

creds = {

	"username" : "username at tabletop.events",
  
	"password" : "password at tabletop.events",
  
	"api_key_id" : "API key from tabletop.events"
  
}

# To acquire a Tabletop.events key:
  1) Log in to Tabletop.events
  
  2) On your Account Preference page, answer the question: "Are you a Developer" in the affirmative
  
  3) Click the resulting "Manage API Keys" link and acquire a new API Key
  
  4) Use the Public Key in the api_key_id field in your credentials.js file

# To run tests:

  Test your authoritative connection to Tabletop.events
  
    gulp test -c
