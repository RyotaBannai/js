var $ = require( "jquery" );

document.addEventListener('DOMContentLoaded', function() {
    // var checkConsoleLog = new Bind(document.body); //click anywhere on the screen.
    // var checkConsoleLog = new Bind2(document.body);
    var checkConsoleLog = new Bind3(document.body);
    // checkEventListner();
    $('#bind_this').on('click', function(){
        console.log('#bind_this');
    });
    checkEventListner2();
});

function checkEventListner () {
    let onclick = $("#old_style").get(0).onclick;
    console.log(onclick);
    /*
    * こんな感じで確認できる。
    * ƒ onclick(event) {
    *   show();
    * }
    * */
}

function checkEventListner2 () {
    // let events = $._data($("#old_style").get(0)).events; // onclick props でつけたのはこれでは取得できない
    let events = $._data($("#bind_this").get(0)).events;
    $.each(events.click, function(){
        console.log(this.handler);
    });
    /*
    * ƒ (){
        console.log('#bind_this');
    }
    * */
}

var Bind = function(element) {
    this.name = 'Bind function';
    this.onclick1 = function(event) {
        console.log(this.name); // expect 'Bind function' but not...
    };
    this.onclick2 = function(event) {
        console.log(this.name) // this is binded so this works as expected...
    };
    element.addEventListener('click', this.onclick1, false);
    element.addEventListener('click', this.onclick2.bind(this), false);
};

var Bind2 = function(element) {
    this.name = 'Bind2 function';
    this.handleEvent = function(event) {
        console.log(this.name);
        switch(event.type){
            case 'click':
                console.log('click');
                break;
            case 'dblclick':
                console.log('double click');
                break;
        }
    };
    element.addEventListener('click', this, false);
    element.addEventListener('dblclick', this, false);
};

var Bind3 = function(element) {
    this.name = 'Bind3 function';
    let that = this;
    element.addEventListener('click', function(e) {return that.someRandomMethod(e);});
    element.addEventListener('dblclick', function(e) {return that.someRandomMethod(e);});
};
Bind3.prototype = {
    someRandomMethod: function(event) {
        console.log(this.name);
        switch(event.type){
            case 'click':
                console.log('click');
                break;
            case 'dblclick':
                console.log('double click');
                break;
        }
    },
};
