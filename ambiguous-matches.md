## Ambiguous matches

Here’s the scenario. It’s 2017. There’s an excess of investor capital and you’ve managed to snag some by pitching your “Twitter for minimalists” app. You’re a long time contributor to Hacker News so you’re confident you can knock it out in a weekend.

The app is simple with only three routes - /, /notifications, and /:handle.

You’re a few hours in. You hit a snag. You run rm -rf node_modules && npm install. No luck. You check Twitter. You come back to your app. It’s still broken.

You take a look at your Routes.

<Route path='/' component={Home} />
<Route path='/notifications' component={Notifications} />
<Route path='/:handle' component={Profile} />
The issue you’re running into is that every time you navigate to /notifications, not only does the Notifications component render, but so does the Profile component since /:handle is also matching. What you need is a way to tell React Router to not match on /:handle if /notifications already matched. You get lucky and google “ambiguous matches”. The React Router documentation comes up. You see an example. You decide to break it down.

First, there’s a navbar with four routes - /about, /company, /kim (to represent a dynamic link) and /chris (also to represent a dynamic link).

import React from 'react'
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/about">About Us (static)</Link></li>
            <li><Link to="/company">Company (static)</Link></li>
            <li><Link to="/kim">Kim (dynamic)</Link></li>
            <li><Link to="/chris">Chris (dynamic)</Link></li>
          </ul>
        </div>
      </Router>
    )
  }
}
Luckily for you the navbar is similar to the “Twitter for minimalists” app you’re working on except for instead of /notifications they’re using /about and /company and the /kim and /chris links are meant to represent dynamic user profiles just like /:handle.

Next, there are three different components that are going to be rendered based on the path. About, Company, and User.

const About = () => <h2>About</h2>
const Company = () => <h2>Company</h2>
const User = ({ match }) => (
  <div>
    <h2>User: {match.params.user}</h2>
  </div>
)
Finally comes the meat of the example and what you’re really after. How to render a /:user route but only if the /about and /company routes don’t match. You see that the example is using the Switch component. You look into it and find that Switch “renders the first child <Route> that matches the location.” The React Router team thought of everything. This is exactly what you’re looking for. By placing all of your <Route>s inside of a Switch component, React Router guarantees that it’ll only render the first match. This means that by wrapping all the routes in a Switch and by placing the dynamic route last, React Router will only render the dynamic route if the other static routes don’t match.

import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'


const About = () => <h2>About</h2>
const Company = () => <h2>Company</h2>
const User = ({ match }) => (
  <div>
    <h2>User: {match.params.user}</h2>
  </div>
)

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/about">About Us (static)</Link></li>
            <li><Link to="/company">Company (static)</Link></li>
            <li><Link to="/kim">Kim (dynamic)</Link></li>
            <li><Link to="/chris">Chris (dynamic)</Link></li>
          </ul>
        </div>

        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/company" component={Company}/>
          <Route path="/:user" component={User}/>
        </Switch>
      </Router>
    )
  }
}

export default App
🕺 👩‍🎤 🎉 With this knowledge, fixing the bug in “Twitter for minimalists” is simple. Just wrap your Routes in a Switch and have the dynamic Route be last.

<Switch>
  <Route path='/' component={Home} />
  <Route path='/notifications' component={Notifications} />
  <Route path='/:handle' component={Profile} />
</Switch>
