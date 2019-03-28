function makeStopwatch(name) { //oop function.
    	var timer1 = {}; //created an object to add the keys and values (OOP)

		timer1.name = name
        timer1.stop2; 
        timer1.time = 1200;
        timer1.startwatch = startwatch;
        timer1.reset = reset
        

    return timer1 // in oop we should return the obj.
        
    
}

function fmtMSS(s){
return ( s - ( s %= 60 ) ) / 60 + ( 9<s?':':':0') + s } //function that calculate the countdown.




var startwatch = function() {//function that count down the timer on the html.
    var that = this;
    var time1 = 300// time of the timer.
    this.stop2 = setInterval(function() {// set the interval to calculate the countdown
        that.ret = that.ret - 1;
        document.getElementById('123').textContent = this.fmtMSS(time1);//return or show the changable variable or timer on html.
      

        if ( time1 === 0 ) {//if condition to alert and to clear the timwer when it reaches 0.
          	alert( "Sorry Your Time Is Up!!");

						clearInterval(that.stop2);
    }
        time1--; 
    }, 1000);
    
}
var userAnswers = [];


var reset = function() {//function that resets the timer
    clearInterval(this.stop2);
    this.time1 = 0;
    document.getElementById('123').textContent = this.fmtMSS(time1);//return or show the number on the html page with jquery.
};














