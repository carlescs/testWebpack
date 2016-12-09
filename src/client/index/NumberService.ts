export class NumberService{
    number1:number=1;
    number2:number=2;

    async increase(){
        this.number1++;
        this.number2*=2;
        return this.number1;
    }

    async decrease(){
        this.number1--;
        this.number2/=2;
        return this.number1;
    }
}