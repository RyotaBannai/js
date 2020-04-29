/*
* doesn't copy any .... huh
* */
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

(()=>{
    Object.prototype.extend = function(obj){
        for(var i in obj){
            if(!obj.hasOwnProperty(i)){
                this[i] = obj[i]
            }
        }
    }
    function New(){};
    New.extend(Init);
    log(New.value)
})()
