import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ProjectsConst from './projects.js';
import * as SkillsConst from './skills.js';

class App extends Component {

  render() {
    var projectsArray = ProjectsConst.projects.map(function(project, i) {
      return <Project key={i} title={project.title} description={project.description} imageUrl={project.imageUrl} githubLink={project.githubLink} otherLink={project.otherLink}/>
    });
    var skillsArray = SkillsConst.skills.map(function(skill, i) {
      var isFontAwesome = false;
      if (skill.className.startsWith('fa')) { isFontAwesome = true; }
      return  <Skill key={i} className={skill.className} label={skill.label} isFaIcon={isFontAwesome} />
    });

    return (
      <div className="App">
        <section id="about">
          <div>
            <header>
              <h1>KEXP Shelves</h1>
              <nav>
                <a href="https://kexpshelves.com" aria-label="KEXP Shelves Website" target="_blank"><i className="fa fa-external-link" aria-hidden="true"></i></a>
                <a href="https://github.com/KEXPCapstone" aria-label="GitHub repo" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
              </nav>
            </header>
          </div>
          <div className="aboutTextContainer">
            <p>Amplifying DJs’ ability to craft creative broadcasts</p>
          </div>
          <div className="arrowContainer">
            <a href="#projects"><i className="fa fa-angle-down fa-3x faa-passing animated"></i></a>
          </div>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div className="flex-container container">
            {projectsArray}
          </div>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          {skillsArray}

        </section>
      </div>
    );
  }
}

class Skill extends Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      hover: false,
      isFaIcon: this.props.isFaIcon
    };
  }
  toggleClass() {
    var currHoverStatus = this.state.hover;
    this.setState({ hover: !currHoverStatus });
  }

  render() {
    var coloredClass = this.state.isFaIcon ? this.props.className + " lightBlue" : this.props.className + " colored";
    return (
      <div className="skillIconDiv" aria-label={this.props.label}>
        <i className={this.state.hover ? coloredClass : this.props.className} onMouseEnter={this.toggleClass} onMouseLeave={this.toggleClass} aria-hidden="true"></i>
        <p>{this.props.label}</p>
      </div>
    );
  }
}

class Project extends Component {

  render() {
    var imgStyle = {
      backgroundImage: "url(" + this.props.imageUrl + ")"
    }

    var content = <div></div>
    if (this.props.githubLink) {
      content = <a href={this.props.githubLink} target="_blank" aria-label="See this project on GitHub"><i className="fa fa-github fa-2x linkStyle" aria-hidden="true"></i></a>
    } else if (this.props.otherLink) {
      content = <a href={this.props.otherLink} target="_blank" aria-label="See this project in a new tab"><i className="fa fa-external-link fa-2x linkStyle" aria-hidden="true"></i></a>
    }
    return (
      <div className="flex-column">
        <div className="content">
          <div className="image" style={imgStyle}></div>
          <div className="textContent">
            <h3>{this.props.title}</h3>
            {content}
            <hr></hr>
            <p>{this.props.description} </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
