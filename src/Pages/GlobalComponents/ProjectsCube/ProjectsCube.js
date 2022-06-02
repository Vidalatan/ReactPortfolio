import React from 'react';
import classify from '../../../utils/classify';

import classes from './ProjectsCube.module.css';

export default function ProjectsCube() {

  // Events contructor
  var events = new Events();
  events.add = function(obj) {
    obj.events = { };
  }
  events.implement = function(fn) {
    fn.prototype = Object.create(Events.prototype);
  }

  function Events() {
    this.events = { };
  }
  Events.prototype.on = function(name, fn) {
    var events = this.events[name];
    if (events == undefined) {
      this.events[name] = [ fn ];
      this.emit('event:on', fn);
    } else {
      if (events.indexOf(fn) == -1) {
        events.push(fn);
        this.emit('event:on', fn);
      }
    }
    return this;
  }
  Events.prototype.once = function(name, fn) {
    var events = this.events[name];
    fn.once = true;
    if (!events) {
      this.events[name] = [ fn ];
      this.emit('event:once', fn);
    } else {
      if (events.indexOf(fn) == -1) {
        events.push(fn);
        this.emit('event:once', fn);
      }
    }
    return this;
  }
  Events.prototype.emit = function(name, args) {
    var events = this.events[name];
    if (events) {
      var i = events.length;
      while(i--) {
        if (events[i]) {
          events[i].call(this, args);
          if (events[i].once) {
            delete events[i];
          }
        }
      }
    }
    return this;
  }
  Events.prototype.unbind = function(name, fn) {
    if (name) {
      var events = this.events[name];
      if (events) {
        if (fn) {
          var i = events.indexOf(fn);
          if (i != -1) {
            delete events[i];
          }
        } else {
          delete this.events[name];
        }
      }
    } else {
      delete this.events;
      this.events = { };
    }
    return this;
  }
  // 

  // Determine prefix
  var userPrefix;
  var prefix = (function () {
    var styles = window.getComputedStyle(document.documentElement, ''),
      pre = (Array.prototype.slice
        .call(styles)
        .join('') 
        .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
      )[1],
      dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
    userPrefix = {
      dom: dom,
      lowercase: pre,
      css: '-' + pre + '-',
      js: pre[0].toUpperCase() + pre.substr(1)
    };
  })();

  function bindEvent(element, type, handler) {
    if(element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else {
      element.attachEvent('on' + type, handler);
    }
  }
  // 


  



  return (
    <div id="wrapper">
    <div className={classes.viewport}>
      <div className={classes.cube}>
        <div className={classes.side}>
          <div className={classes.cube-image}>1</div>
        </div>
        <div className={classes.side}>
          <div className={classes.cube-image}>2</div>
        </div>
        <div className={classes.side}>
          <div className={classes.cube-image}>3</div>
        </div>
        <div className={classes.side}>
          <div className={classes.cube-image}>4</div>
        </div>
        <div className={classes.side}>
          <div className={classes.cube-image}>5</div>
        </div>
        <div className={classes.side}>
          <div className={classify(classes.cubeImage, classes.active)}>6</div>
        </div>
      </div>
    </div>
  </div>
  )
}
