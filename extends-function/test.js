let log = console.log;
function Init(){
    this.value = [1,2,3];
    this.type = 'super';
}
Init.prototype = {
    show: function () {
        log(this.value)
    }
};

let New = function() {
    Init.apply(this, arguments);
    this.type = 'child';
};

New.prototype = Init.prototype;  // Set prototype to Person's
New.prototype.constructor = New;

(()=>{
    init = new New();
    log(init.type);
})()
