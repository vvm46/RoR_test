(function () {
'use strict';

var FormModule = {
  classes: {
    root: '.js-form'
  },
  init: function init() {
    var _this = this;

    var self = this;
    $(document).ready(function () {
      $(_this.classes.root).submit(function (e) {
        e.preventDefault();
        self.submitForm(this);
      });
    });
  },
  getCookie: function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = $.trim(cookies[i]);
        if (cookie.substring(0, name.length + 1) === name + '=') {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  },
  submitForm: function submitForm(that) {
    var _this2 = this;

    $.ajax({
      url: '/',
      method: $(that).attr('method'),
      data: $(that).serialize(),
      contentType: 'application/x-www-form-urlencoded',
      dataType: 'json',
      headers: {
        'X-CSRFToken': this.getCookie('csrftoken')
      },
      success: function success() {
        _this2.successForm();
      }
    }).always(function () {
      return _this2.successForm();
    });
  },
  successForm: function successForm() {
    $(this.classes.root).trigger('reset');

    alert('Thank you for you message');
  }
};

// =========================================
// Initialization
// =========================================

FormModule.init();

}());
