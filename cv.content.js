const content = {
  person: 'Mateusz Curyło',
  elementary: [
    { title: 'github',
      link: 'https://github.com/mhcurylo',
      content: '/mhcurylo' },
    { title: 'twitter',
      link: 'https://twitter.com/mhcurylo',
      content: '@mhcurylo' },
    { title: 'web cv',
      link: 'http://mhcurylo.github.io/',
      content: 'mhcurylo.github.io' },
    { title: 'email',
      content: 'mhcurylo@gmail.com' },
    { title: 'phone',
      content: '+48 691 444 422'}],
  sections: [
    { type: 'paragraphs',
      title: 'Personal summary',
      content: [
        'I am a programmer and a philosopher with a background in philosophy of media and computing. Currently I enjoy frontend development, especially coding JavaScript and Single Page Applications.',
        'I have worked professionally on an AngularJS/Cordova mobile application, as well as large AngularJS projects consuming RESTful web services.',
        'I am found of short Read-Evaluation-Print-Loops, tight coupling between theory and practice and the opportunities to learn new design patterns, frameworks and languages.',
        'Recently I have been learning functional programming, React/Redux libraries and Clojure language. Some of the effects of my practice are available as Open Source at my github repository.']},
    {
      type: 'lists',
      title: 'Technical Profile',
      content: [
        {
          title: 'Web Client Technology',
          content: [
            'HTML5',
            'CSS preprocessors: SCSS, Less, Stylus',
            'CSS frameworks: Bootstrap, Jeet, Axis, Colors.css',
            'SVG, Canvas',
            'WebSocket, WebAudio']},
        {
          title: 'Javascript',
          content: [
            'Professional experience with AngularJS, JQuery lite, Moment.js, consuming REST, lodash, OOP',
            'Development experience with Babel ES6-ES7, ReactJS, Redux, Immutable.js, socket.io, phantomJS, functional paradigm',
            'Developed node.js backend with socket.io and Redux architecture',
            'Linted with: jshint, eslint, eslint-config-airbnb',
            'Built with tools: grunt, npm, webpack, bower',
            'Wrote unit tests in: Mocha/Chai']},
        {
          title: 'Tooling',
          content: [
            'Version control with GIT',
            'IDE: Sublime Text, Brackets, Vim',
            'OS: Windows, Arch Linux']},
        { title: 'Other',
          content: [
            'I manage my own Digital Ocean CentOS server with Nginx and Node.',
            'I made a one-button Arduino twitter interface <a href="https://twitter.com/asciiarcade0">@ASCIIArcade0</a>']}]},
    {
      type: 'lists',
      title: 'Career History',
      content: [
        {
          title: 'Cometari Dedicated Solutions',
          time: 'October 2015 - December 2015, contract',
          technologies: 'GIT, Grunt, AngularJS, REST, Scss, Bootstrap, Jeet, Svg, Trello, Jira',
          description: 'Frontend JavaScript in a fast paced Agile environment',
          content: [
            'shipped SPA with AngularJS consuming RESTfull web services',
            'designed and developed module for creating HTML complex input forms from JSONs with AngularJS, lodash and advanced prototyping methods',
            'developed AngularJS modules consuming REST web services',
            'implemented interactive and static pages from wireframes using AngularJS/Bootstrap and AngularJS/Jeet']},
        {
          title: 'Heartland Games',
          time: 'October 2014 - October 2015, self-founded',
          technologies: 'AngularJS, WebAudio, Cordova, Crosswalk, Less, Bootstrap, OOP, Svg, Canvas',
          description: 'Game designer/Game developer/Founder',
          content: [
            'shipped AngularJS/Cordova mobile game',
            'designed and developed an AngularJS/Cordova game for mobile',
            'integrated Cordova plugins to Angular app including analytics, in-app biling and admob',
            'designed and developed promotional webpage']},
        {
          title: 'Jagiellonian University',
          time: '2012, 2013, 2014, 2015',
          description: 'Teaching Assistant',
          content: [
            'I have assisted in teaching courses <em>Aesthetics of Electronic Age</em> and <em>Arts and Aesthetics in XXI Century</em>']},
        {
          title: 'Akademia Ignatianum in Cracow',
          time: '2013',
          description: 'Lecturer',
          content: [
            'I have conducted a seminar titled <em>Philosophy of the web II</em>']}]},
    {
      type: 'lists',
      title: 'Portfolio',
      content: [
        {
          title: 'React CV generator',
          link: 'https://github.com/mhcurylo/React-CV-generator',
          description: 'Generates CV page from JS object. Based on React Static Boilerplate.',
          technologies: 'ReactJS, phantomJS, ES6, eslint, scss',
          content: []},
        {
          title: 'HeRRChat',
          link: 'https://github.com/mhcurylo/HeRRChat',
          description: 'A simple IRC-style WebSocket chat app. Client and server.',
          technologies: 'SPA, Node, ReactJS, Redux, React-router, Immutable.js, socket.io, Mocha, Chai, Babel ES6-ES7',
          content: []},
        {
          title: 'Squared Lines Js13k Reversed',
          link: 'http://js13kgames.com/entries/squared-lines-js13k-reversed',
          description: 'Js13k games competition entry written in 48 hours.',
          technologies: 'Web Game, vanilla JS, canvas, git',
          content: []},
        {
          title: 'Squared Lines',
          link: 'https://play.google.com/store/apps/details?id=com.linessquared&hl=en',
          description: 'Mobile game written using Angular JS/Cordova.',
          technologies: 'Mobile Game, AngularJS, Cordova, Crosswalk, WebAudio, OOP, Flexbox, RWD, Canvas, CSS, localstorage',
          content: ['Preview available at: <a href="http://www.squaredlines.com/stratagemone/"> http://www.squaredlines.com/stratagemone</a>']},
        {
          title: 'Promotional page for Squared Lines',
          link: 'http://www.squaredlines.com',
          description: 'A promotional page for Squared Lines game.',
          technologies: 'Bootstrap, Less, Svg',
          content: []}]},
    {
      type: 'lists',
      title: 'Education',
      content: [
        {
          title: 'Ph.D. Candidate',
          time: '2010 - Present',
          description: 'Jagiellonian University',
          content: [
            'My primary area of research is philosophy of media and ontology of computing']},
        {
          title: 'MA Philosophy',
          time: '2003-2010',
          description: 'Jagiellonian University',
          content: [
            'I have taken courses in Philosophy of Information and Introduction to Logic with Set Theory']},
        {
          title: 'Udacity',
          technologies: 'Python',
          content: [
            'COMPUTER SCIENCE 101: Introduction to Computer Science Building a Search Engine']}]},
    { type: 'paragraphs',
      title: 'Philosophy and software',
      content: [
        'We live in the age of <a href="http://computationalculture.net/comment/die-aufklarung-in-the-age-of-philosophical-engineering">Philosophical Engineering</a>. Thus I find my experience as a philosopher and educator highly relevant to understanding concepts expressed in code, design patterns, frameworks, architectures and working software. <a href="http://pages.cs.wisc.edu/~remzi/Naur.pdf">Theory building</a> is a skill shared by a philosopher and a programmer.']}]};

export { content as default } ;
