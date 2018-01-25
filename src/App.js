import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
// import logo from './logo.svg'
// import './App.css'

//nested routes app

const Home = () => {
  return (
    <h1>Home</h1>
  )
}
const About = () => {
  return (
    <h1>About</h1>
  )
}
const Topic = () => {
  return (
    <h1>Topic</h1>
  )
}
const Topics = ({match}) => {

  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {topics.map(({name, id}) => console.log('log match', match) || (
          <li key={id}>
            <Link to={`/topics/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <hr/>
      <Route path={`/topics/:topicId`} component={Topic} />
    </div>
  )
}


class App extends Component {
  render() {
    return (
      <Router>
        <div style={{width: 1000, margin: '0 auto'}}>
            <h1 className="App-title">Welcome to React</h1>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/topics'>Topics</Link></li>
            </ul>
            <hr/>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/topics' component={Topics} />
        </div>
      </Router>

    );
  }
}

const topics = [
  {
    name: 'React Router',
    id: 'react-router',
    description: 'Declarative, component based routing for React',
    resources: [
      {
        name: 'URL Parameters',
        id: 'url-parameters',
        description: "URL parameters are parameters whose values are set dynamically in a page's URL. This allows a route to render the same component while passing that component the dynamic portion of the URL so it can change based off of it.",
        url: 'https://github.com/yarnpkg/yarn/issues/5240'
      },
      {
        name: 'Programatically navigate',
        id: 'programmatically-navigate',
        description: "When building an app with React Router, eventually you'll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router.",
        url: 'https://github.com/yarnpkg/yarn/issues/5240'
      }
    ]
  },
  {
    name: 'React.js',
    id: 'reactjs',
    description: 'A JavaScript library for building user interfaces',
    resources: [
      {
        name: 'React Lifecycle Events',
        id: 'react-lifecycle',
        description: "React Lifecycle events allow you to tie into specific phases of a component's life cycle",
        url: 'https://reacttraining.com/react-router/'
      },
      {
        name: 'React AHA Moments',
        id: 'react-aha',
        description: "A collection of 'Aha' moments while learning React.",
        url: 'https://reacttraining.com/react-router/'
      }
    ]
  },
  {
    name: 'Functional Programming',
    id: 'functional-programming',
    description: 'In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.',
    resources: [
      {
        name: 'Imperative vs Declarative programming',
        id: 'imperative-declarative',
        description: 'A guide to understanding the difference between Imperative and Declarative programming.',
        url: 'https://www.npmjs.com/package/react-router'
      },
      {
        name: 'Building User Interfaces with Pure Functions and Function Composition',
        id: 'fn-composition',
        description: 'A guide to building UI with pure functions and function composition in React',
        url: 'https://github.com/yarnpkg/yarn/issues/5240'
      }
    ]
  }
]

export default App
