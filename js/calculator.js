module.exports = function(target) {
    var $target = $(target);

    var defaults = {
        field: 'input',
        sum: '.calculated-sum'
    };

    this.init = function(opts) {
        this.options = $.extend({}, defaults, opts);

        this.$fields = $target.find(this.options.field);
        this.$sum = $target.find(this.options.sum);
    };

    this.getPrice = function() {
        this.$sum.text(calculate(this.$fields));
    };

    function calculate($items) {
        var result = 0;
        $.each($items, function() {
            var $el = $(this);
            result += parseInt($el.val());
        });
        return result;
    }
};