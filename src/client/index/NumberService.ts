export class NumberService{
    number1:number=1;
    number2:number=2;

    increase(){
        this.number1++;
        this.number2*=2;
    }

    decrease(){
        this.number1--;
        this.number2/=2;
    }
}