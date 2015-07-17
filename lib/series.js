'use strict';

var Series = function(string){
  // add your solution here!
    var series = string.split("");

    for(var i=0; i < series.length; i++) {
        series[i] = Number(series[i]);
    }

    this.digits = series;

    this.slices = function(number_digits){

        var result = [];

        if (number_digits <= this.digits.length ) {
            for(var i=0; i <= (this.digits.length - number_digits); i++) {
                result.push(this.digits.slice(i, number_digits+i));
            }

            return result;

        } else {
            throw new Error('Slice size is too big.');
        }
    }


};