import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NavBar from './components/Navbar';
import Contact from './pages/Contact';
import ProjectDetails from './pages/ProjectDetails';
import { fetchGitHubProjectsList } from './services/GitApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';



class App extends React.Component {

  componentDidMount() {
    const ownerInfos = {
      owner: 'danielmlduarte',
      repoName: 'trybe-projects',
      optionalPath: '',
    }
    this.props.fetchProjects(ownerInfos);
  };
  
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects/:name" component={ProjectDetails}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchProjects: (ownerInfos) => dispatch(fetchGitHubProjectsList(ownerInfos)),
});

export default connect(null, mapDispatchToProps)(App);