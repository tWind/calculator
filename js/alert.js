(
    function() {
       var Alert = window.Alert = function($target, options) {
           var settings = {
               errorText: "Поле должно быть заполнено!",
               throwErrMethod: 'single' // 'single', 'multiply'
           };
           this.options = $.extend({}, settings, options);
           this.template =  '<div class="form__input-message">'+this.options.errorText+'</div>';
           this.active = false;
           var $error = $(this.template);

           this.throwErr = function(el) {
               var $el = el;

               if(el == undefined) {
                   $el = $target;
               }
               if(this.options.throwErrMethod == 'single') {
                   if(!this.active) {
                       $error = $(this.template);
                       $el.after($error);
                       this.active = true;
                   }
               }
               if(this.options.throwErrMethod == 'multiple') {
                   $error = $(this.template);
                   $el.after($error);
               }

           };
           this.removeErr = function(el) {
               var self = this;
               var $el = el;
               if(el == undefined)  $el = $target;
               var $error = $el.parent().find('.form__input-message');

               $error.fadeOut(900, function() {
                   $(this).remove();
                   self.active = false;
               });
           };
           return this;
       }
    }()
);