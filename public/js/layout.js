$(function(){
    var self = {
        init() {

            this.addEvent();
        },

        addEvent() {
            $("#signOut").bind("click", () => {
                $.cookie("jwt-cerberus", null);
                window.location.href = __cerberus__.PROJECT;
            });
        }
    }

    self.init();

})