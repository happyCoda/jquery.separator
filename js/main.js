require.config({

  paths: {
    jquery: 'jquery-2.0.3.min',
    separator: 'jquery.separator'
  },

  shim: {
    separator: {
      deps: ['jquery']
    }
  }
});

require([
  'jquery',
  'separator'
], function ($) {

  $(function () {
    var form = {
      root: $('.main_form'),
      inputTxt: $('.main_form__item.txt_input'),
      submitBtn: $('.main_form__submit'),

      events: function () {

        this.submitBtn.on('click', (function (e) {
          var inputTxtVal,
            processedVal;

          e.preventDefault();

          inputTxtVal = this.inputTxt.val().replace(/\s*/g, '');

          try {

            processedVal = $.separator(inputTxtVal);

          } catch (err) {

            processedVal = err.message;
            
          }

          this.inputTxt.val(processedVal);

        }).bind(this));
      },

      init: function () {

        this.events();
      }
    };

    form.init();
  });
});
