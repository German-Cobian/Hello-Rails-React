# Hello-Rails-React

A Rails app with a React-Redux front end. The Rails back-end is set up as an API. The database is seeded with 5 different greetings which display on the browser, one at a time. The user can refresh the browser to see one of the five greetings randomly display.

### Setup and Install

* Open your terminal - Windows: `Win + R`, then type `cmd` | Mac: `Command + space`, then type `Terminal`
* Navigate to a directory of your choosing using the `cd` command
* Run this command in your OS terminal: `git clone git@github.com:German-Cobian/Hello-Rails-React.git` to get a copy of the project
* Navigate to the project's directory using the `cd` command
* Run `rails webpacker:install` to configure Webpacker for your environment
* Install dependencies by running `bundle install`
* Migrate the database to your environment by running `rails db:migrate` and then seed the app with data that is pre-packaged for its pages to display by running`rails db:seed`
* Run `rails server` to fire up the server
* Open up a second terminal window and run `./bin/webpack-dev-server`
* Visit `http://localhost:3000/api/greetings` in your browser to get into the app
* See the displayed greeting. To obtain another random greeting refresh the page

## Built With

* HTML
* Rails
* React
* Redux
* React-Rails
* Postgresql
* Github workflow

## Author

👤 **German Cobian**
* GitHub: [@German Cobian](https://github.com/German-Cobian)
* Twitter: [@GermanCobian1](https://twitter.com/GermanCobian1)
* LinkedIn: [@German Cobian](https://www.linkedin.com/in/german-cobian/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/German-Cobian/Hello-Rails-React/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

* Guidelines for this project were provided by [Microverse](https://github.com/microverseinc/curriculum-rails/blob/main/connect-frontend-frameworks/hello_world_with_react.md)
* Technical instructions by freeCodeCamp's [How to create a Rails project with a React and Redux front-end](https://www.freecodecamp.org/news/how-to-create-a-rails-project-with-a-react-and-redux-front-end-8b01e17a1db/) tutorial.

## 📝 License

[MIT licensed](https://github.com/German-Cobian/Hello-Rails-React/blob/main/LICENSE).
