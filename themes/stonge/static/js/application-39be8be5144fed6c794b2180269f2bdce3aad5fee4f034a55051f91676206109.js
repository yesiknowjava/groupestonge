var quotesheet = (function() {
  var style=document.createElement("style");

  style.appendChild(document.createTextNode(""));

  document.head.appendChild(style);
  
  style.sheet.addCSSRule = function(selector, rules, index) {
    if("insertRule" in this) {
      this.insertRule(selector + "{" + rules + "}", index);
    } else if ("addRule" in this) {
      this.addRule(selector, rules, index);
    }
  }

  style.sheet.removeCSSRule = function(index) {
    if("removeRule" in this) {
      this.removeRule(index);
    } else if ("deleteRule" in this) {
      this.deleteRule(index);
    }
  }

  return style.sheet;
})();

//quotesheet.addCSSRule(".quote-slider .quote-slider-wrapper .quote-slide", "left: -000%", 0);

function quoteSlider(element, args) {
  this.element = element;
  this._len = this.element.getElementsByClassName("quote-slide").lenght;
}

;
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

