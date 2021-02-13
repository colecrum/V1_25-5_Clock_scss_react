function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //variables
//const activeStyle = 
//{backgroundColor: "#5d9451"} //muted green

//const inactiveStyle = 
//{backgroundColor: "#F6E481"} //muted yellow

const start = "Start";
const stop = "Stop";

const Reset = function (props) {
  return /*#__PURE__*/(
    React.createElement("button", { onClick: props.onClickReset, id: "reset", className: "control-button" }, "Reset"));

};

//components
class Control extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleClick",




    e => {
      if (this.state.value === start) {
        this.setState({
          value: stop });

      } else {
        this.setState({
          value: start });

      }
    });_defineProperty(this, "handleChange",
    e => {
      return this.props.onChange(e);
    });this.state = { value: start };}
  render() {
    return /*#__PURE__*/(
      React.createElement("button", {
        id: "start_stop",
        className: "control-button",
        onClick: e => {
          this.handleChange(e);
          this.handleClick(e);
        } },

      this.state.value));

  }}


class Timer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let timer;
    if (this.props.time === "Ready?") {
      timer = this.props.time;
    } else {
      let minutes = Math.floor(this.props.time / 60);
      let seconds = this.props.time - minutes * 60;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      timer = `${minutes} : ${seconds}`;
    }
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/

      React.createElement("div", { id: "timer-container" }, /*#__PURE__*/
      React.createElement("div", { id: "timer-label", className: "timer-header" }, "Time Remaining"), /*#__PURE__*/

      React.createElement("div", { id: "timer" }, /*#__PURE__*/
      React.createElement("div", { id: "time-left", className: "row" }, timer)))));







  }}


class Work extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {
    //style : inactiveStyle,
    //active: false
    // }
    //bindings
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    //this.styleMe = this.styleMe.bind(this);
  }
  //functions

  /*styleMe() {
    if(this.state.active === true) {
      this.setState({
        style: activeStyle //muted green
      });
    } else {
      this.setState({
        style: inactiveStyle//muted yellow
      })
    }
  }
  */
  handleIncrement() {
    return this.props.onChange(1);
  }
  handleDecrement() {
    return this.props.onChange(-1);
  }
  render() {

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/

      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { id: "session-label", className: "session-header" }, "WORK"), /*#__PURE__*/

      React.createElement("div", { id: "session-container", className: "row" }, /*#__PURE__*/

      React.createElement("button", { className: "fa-button", onClick: this.handleIncrement }, /*#__PURE__*/
      React.createElement("i", { id: "session-increment", class: "fa fa-plus", "aria-hidden": "true" })), /*#__PURE__*/

      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { id: "session-length"
        //style = {this.state.style}
      }, this.props.time)), /*#__PURE__*/


      React.createElement("button", { className: "fa-button", onClick: this.handleDecrement }, /*#__PURE__*/
      React.createElement("i", { id: "session-decrement", class: "fa fa-minus", "aria-hidden": "true" }))))));






  }}


class Rest extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    // style : inactiveStyle
    // }
    //bindings
    // this.styleMe = this.styleMe.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }
  //functions
  /* styleMe() {
     if(this.props.active === true) {
       this.setState({
         style: activeStyle //muted green
       });
     } else {
       this.setState({
         style: inactiveStyle//muted yellow
       })
     }
   }
   */
  handleIncrement() {
    return this.props.onChange(1);
  }
  handleDecrement() {
    return this.props.onChange(-1);
  }
  render() {

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/

      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { id: "break-label", className: "break-header" }, "REST"), /*#__PURE__*/

      React.createElement("div", { id: "break-container", className: "row" }, /*#__PURE__*/

      React.createElement("button", { className: "fa-button", onClick: this.handleIncrement }, /*#__PURE__*/
      React.createElement("i", { id: "break-increment", class: "fa fa-plus", "aria-hidden": "true" })), /*#__PURE__*/

      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { id: "break-length"
        // style = {this.state.style}
      }, this.props.time)), /*#__PURE__*/

      React.createElement("button", { className: "fa-button", onClick: this.handleDecrement }, /*#__PURE__*/
      React.createElement("i", { id: "break-decrement", class: "fa fa-minus", "aria-hidden": "true" }))))));






  }}



class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "reset",
















    () => {
      this.setState({
        work: 25,
        rest: 5,
        current: "Ready?",
        segment: 0,
        timerState: "stopped",
        intervalId: "",
        alarmColor: { color: 'black' } });

      clearInterval(this.interval);
    });this.state = { work: 25, rest: 5, current: "Ready?", segment: 0, timerState: "stopped", intervalId: "" }; //bindings
    this.toggleTimer = this.toggleTimer.bind(this);this.startTimer = this.startTimer.bind(this);this.timer = this.timer.bind(this);this.changeRest = this.changeRest.bind(this);this.changeWork = this.changeWork.bind(this);} //functions
  toggleTimer() {if (this.state.timerState === "stopped") {
      this.startTimer();
      this.setState({ timerState: "running" });
    } else {
      this.setState({ timerState: "stopped", segment: 0 });
      clearInterval(this.state.intervalId);
    }
  }
  startTimer() {
    let interval = setInterval(this.timer, 1000);
    this.setState({ intervalId: interval });
  }
  timer() {
    if (this.state.current > 0) {
      this.setState({ current: this.state.current - 1 });
    } else {
      document.querySelector("#beep").play();
      if (this.state.segment === 1) {
        this.setState({
          segment: 2,
          current: this.state.rest * 60 });

      } else {
        this.setState({
          segment: 1,
          current: this.state.work * 60 });

      }
    }
  }
  changeWork(e) {
    if (this.state.work + e > 0) {
      this.setState({ work: this.state.work + e });
    }
    if (this.state.segment > 0) {
      clearInterval(this.state.intervalId);
      this.setState({
        current: "Ready?",
        segment: 0 });

    }
  }
  changeRest(e) {
    if (this.state.rest + e > 0) {
      this.setState({ rest: this.state.rest + e });
    }
    if (this.state.segment > 0) {
      clearInterval(this.state.intervalId);
      this.setState({
        current: "Ready?",
        segment: 0 });

    }
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { id: "container", className: "overlay" }, /*#__PURE__*/

      React.createElement("div", { className: "main" }, /*#__PURE__*/

      React.createElement("div", { className: "sub-main" }, /*#__PURE__*/
      React.createElement("div", { className: "left" }, /*#__PURE__*/
      React.createElement(Work, {
        time: this.state.work,
        onChange: this.changeWork,
        active: this.state.segment === 1 ? true : false }), /*#__PURE__*/

      React.createElement("hr", null), /*#__PURE__*/
      React.createElement(Rest, {
        time: this.state.rest,
        onChange: this.changeRest,
        active: this.state.segment === 2 ? true : false }))), /*#__PURE__*/




      React.createElement("div", { className: "sub-main" }, /*#__PURE__*/
      React.createElement("div", { className: "right" }, /*#__PURE__*/
      React.createElement(Timer, {
        time: this.state.current,
        style: this.state.alarmColor }), /*#__PURE__*/


      React.createElement("div", { id: "control-container", className: "row" }, /*#__PURE__*/
      React.createElement(Control, { onChange: this.toggleTimer }), /*#__PURE__*/
      React.createElement(Reset, { onClickReset: this.reset })))))), /*#__PURE__*/








      React.createElement("audio", { id: "beep", src: "http://soundbible.com/mp3/Boxing%20Bell%20Start%20Round-SoundBible.com-1691615580.mp3" }), /*#__PURE__*/

      React.createElement("br", null), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("hr", { id: "footer" }), /*#__PURE__*/
      React.createElement("div", { id: "contact-section" }, "\xA0 \xA0 \xA0 ", /*#__PURE__*/
      React.createElement("section", { id: "contact", class: "container" }, /*#__PURE__*/
      React.createElement("h2", { id: "contact-title" }, "Designed & Coded by Cole Crum"), /*#__PURE__*/
      React.createElement("div", { class: "contact-links" }, /*#__PURE__*/

      React.createElement("a", { id: "profile-link", href: "https://github.com/colecrum?tab=repositories", target: "_blank", class: "btn contact-details" }, /*#__PURE__*/React.createElement("img", { id: "git-logo", class: "contact-img", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHXk1n8mQe3sbaaMDgiqtSeSC8QySxLfgkaA&usqp=CAU", title: "GitHub" })), /*#__PURE__*/
      React.createElement("a", { href: "https://codepen.io/colecrum", target: "_blank", class: "btn contact-details" }, /*#__PURE__*/React.createElement("img", { class: "contact-img", src: "https://blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Large.png", title: "CodePen" })), /*#__PURE__*/
      React.createElement("a", { href: "mailto:colemcrum@gmail.com", target: "_blank", class: "btn contact-details" }, /*#__PURE__*/React.createElement("img", { class: "contact-img", src: "https://lh3.googleusercontent.com/VS3B_qhOFTYsdyNfnlr98zg3HNjB_Gcs9bxVnaQO9MysAoBOXMHATClhRviImKKJV8RV-0s7hl8KeVQcij5Iagb1exHzt40x679l8Q=w0", title: "Email" })), /*#__PURE__*/
      React.createElement("a", { href: "tel:512-517-8503", target: "_blank", class: "btn contact-details" }, /*#__PURE__*/React.createElement("img", { class: "contact-img", src: "https://cdn4.iconfinder.com/data/icons/phones-colored/48/JD-32-512.png", title: "Phone" }))), "\xA0 \xA0 \xA0 "), "\xA0 \xA0 ")));







  }}




ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));