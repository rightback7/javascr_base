let calculator = {
  read(){
    this.a=prompt("첫번째 값",0);
    this.b=prompt("두번째 값",0);
  },
  sum(){
    return Number(this.a)+Number(this.b);
  },
  mul(){
    return this.a*this.b;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );