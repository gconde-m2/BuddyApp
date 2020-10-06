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
| /dogList/new                        | GET    | Render the adding dog form                       |
| /dogList/new                        | POST   | 204 if successful                                |
| /dogList/:dog\_id                   | GET    | Render the dog details view                      |
| /map                                | GET    | Render the list of all associations              |
| /estadistics                        | GET    | Render the data visualization page               |
| /profile                            | GET    | Render the user's profile                        |
| /profile/edit                       | PUT    | Edit user's profile                              |
| /profile/favourites                 | GET    | Render the user's added\-to\-favourites dogs     |
| /profile/favourites/:dog\_id/delete | DELETE | Remove a dog from the favourites list            |
| /profile/owned                      | GET    | Render the user's owned dog                      |
| /profile/owned/new                  | GET    | Render the adding dog form                       |
| /profile/owned/new                  | POST   | 204 if successful                                |
| /profile/owned/:dog\_id             | GET    | Render the details of an owned dog from the list |
| /profile/owned/:dog\_id/edit        | PUT    | Edit details of an owned dog                     |
| /profile/owned/:dog\_id/delete      | DELETE | Remove dog from the 'owned' list                 |
