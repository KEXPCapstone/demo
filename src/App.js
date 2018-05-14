import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as SolutionsConst from './solutions.js';
import * as SkillsConst from './skills.js';

class App extends Component {

  render() {
    var solutionsArray = SolutionsConst.solutions.map(function(solution, i) {
      return <Solution key={i} title={solution.title} description={solution.description} imageUrl={solution.imageUrl} githubLink={solution.githubLink} otherLink={solution.otherLink}/>
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
              <nav>
                <a href="https://kexpshelves.com" aria-label="KEXP Shelves Website" target="_blank"><i className="fa fa-external-link fa-lg" aria-hidden="true"></i></a>
                <a href="https://github.com/KEXPCapstone" aria-label="GitHub repo" target="_blank"><i className="fa fa-github fa-lg" aria-hidden="true"></i></a>
              </nav>
            </header>
          </div>
          
          <div className="arrowContainer">
            <a href="#solution"><i className="fa fa-angle-down fa-3x faa-passing animated"></i></a>
          </div>
        </section>
        <section id="problem">
        <h2>KEXP's Music Library</h2>
          <div className="flex-container container">
            <p>Over the past two years, KEXP has digitized its music library of 70,000+ vinyl and CD albums. 
              The primary goal of this process has been to produce a more convenient and robust way for 
              radio hosts to interact with the music and associated metadata stored in KEXP’s 
              collection. However, there are still areas throughout the programming process which 
              could be improved through the use of the digitized library.</p>
            <p>Furthermore, the current interface used to navigate KEXP's digital library is severed from the 
              emotional context of the physical collection. For example, the digital library lacks the "notes"
               which radio hosts once used to communicate with other hosts about a particular album. </p>
            <p>The aggregation and curation of library information would enable accessibility to the media library's 
              pool of knowledge, promoting KEXP's values of music discovery, 
              community, and cultural enrichment. Additionally, a tool which enables radio hosts to easily plan their sets would 
              harness the digital library in a new and valuable way that could extend beyond internal KEXP use, 
              demonstrating that collection's value. Ultimately, this serves as the platform behind Shelves. </p>  
          </div>
        </section>
        <section id="solution">
          <h2>Shelves for KEXP</h2>
          <div className="flex-container container">
          {solutionsArray}
          </div>
        </section>
        <section id="skills">
          <h2>Built With</h2>
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

class Solution extends Component {

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
