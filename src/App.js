import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import ProjectDetails from './pages/ProjectDetails';
import { fetchGitHubProjectsList } from './services/GitApi';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  componentDidMount() {
    const ownerInfos = {
      owner: 'danielmlduarte',
      repoName: 'trybe-projects',
      optionalPath: '',
    };
    const { fetchProjects } = this.props;
    fetchProjects(ownerInfos);
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/projects/:name" component={ ProjectDetails } />
          <Route path="/projects" component={ Projects } />
          <Route path="/contact" component={ Contact } />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: (ownerInfos) => dispatch(fetchGitHubProjectsList(ownerInfos)),
});

App.propTypes = {
  fetchProjects: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
