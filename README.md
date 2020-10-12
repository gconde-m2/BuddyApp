# Buddy App

Final project for Web Development Bootcamp in Ironhack

- Authors: Guillermo Conde Magaña, Belén Olías Ericsson

- v1.0.0


# Endpoints



| ENDPOINT                            | METHOD |  DESCRIPTION OF RESPONSE                         |
|-------------------------------------|--------|--------------------------------------------------|
| /                                   | GET    | Home Page                                        |
| /login                              | GET    | Render the login form                            |
| /login                              | POST   | 204 if successful                                |
| /signup                             | GET    | Render the signup form                           |
| /signup                             | POST   | 204 if successful                                |
| /logout                             | GET    | Close session                                    |
| /dogList                            | GET    | Render the list of all dogs                      |
| /dogList/:dog\_id                   | GET    | Render the dog details view                      |
| /map                                | GET    | Render the list of all associations              |
| /stadistics                         | GET    | Render the data visualization page               |
| /donation                           | GET    | Render the ways of help                          |
| /donation/donationForm              | GET    | Render the form for giving money                 |
| /profile                            | GET    | Render the user's profile                        |
| /profile/edit                       | PUT    | Edit user's profile                              |  |
| /profile/owned                      | GET    | Render the user's owned dog                      |
| /profile/owned/new                  | GET    | Render the adding dog form                       |
| /profile/owned/new                  | POST   | 204 if successful                                |
| /profile/owned/:dog\_id             | GET    | Render the details of an owned dog from the list |
| /profile/owned/:dog\_id/edit        | PUT    | Edit details of an owned dog                     |
| /profile/owned/:dog\_id/delete      | DELETE | Remove dog from the 'owned' list                 |
