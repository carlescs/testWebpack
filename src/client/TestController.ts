export class TestController{
    number1:number=1;
    number2:number=1;

    click(){
        this.number1++;
        this.number2*=2;
    }

    click2(){
        this.number1--;
        this.number2/=2;
    }
}