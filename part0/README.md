sequenceDiagram
Client ->> Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
Server -->> Client: redirect location (from the Headers): /exampleapp/notes

Client ->> Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
Server -->> Client: HTML Document

Client ->> Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
Server -->> Client: CSS File

Client ->> Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
Server -->> Client: JavaScript file

Client ->> Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
Server -->> Client: JSON data





