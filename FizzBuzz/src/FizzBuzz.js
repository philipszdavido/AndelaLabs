function FizzBuzz() {
}

FizzBuzz.prototype.fizzBuzz=function(num1){
	if(isNaN(num1)){
		return "please, input a number";
	}

    if((num1 % 3===0 )&&( num1 % 5===0)){
        return "FizzBuzz";
    }
    if((num1 % 3 !==0) && (num1 % 5 !==0)){
        return num1;
    }

   if(num1 % 3===0){
    return "Fizz";
   }
   if(num1 %5===0){
    return "Buzz";
   }

};
