(function ($) {
    $.fn.trimFormValues = function () {
        return this.each(function () {
            var me = $(this);
            var inputs = me.find('input, select').not(':button').not(':submit');

            inputs.each(function () {
                var input = $(this);
                input.val($.trim(input.val()));
            });
        });
    };
})(jQuery);