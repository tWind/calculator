(
    function() {
        var Validator = window.Validator = function($target) {
            var settings = {
                
            };
            var $fields = $target.find('.js-validate');
            var self = this;


            this.validate = {
                phone: function($elem) {
                    var numbersLimit = 10;

                    $elem.parent().addClass('-masked');

                    $elem.on('keypress', function(e) {
                        if($elem.val().length < numbersLimit)
                            return self.catchNumeric(e);
                        return false;
                    });
                },
                number: function($elem) {
                    $elem.on('keypress', function(e) {
                        return self.catchNumeric(e);
                    });
                }
            };
            this.getChar = function(event) {
                if (event.which == null) {
                    if (event.keyCode < 32) return null;
                    return String.fromCharCode(event.keyCode);
                }

                if (event.which != 0 && event.charCode != 0) {
                    if (event.which < 32) return null;
                    return String.fromCharCode(event.which);
                }
                return null;
            };

            this.catchNumeric = function(e) {
                if(e.ctrlKey || e.altKey || e.metaKey)
                    return;
                var chr = self.getChar(e);
                if(chr == null)
                    return;
                if(chr < '0' || chr > '9')
                    return false;
            };

            $fields.each(function() {
                var $elem = $(this);
                var options = $elem.data('validation-options');

                if(self.validate.hasOwnProperty(options.method)) {
                    self.validate[options.method]($elem.find('input'));
                }
            });
        };
    }()
);