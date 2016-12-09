import {NumberService} from './NumberService';

export class TestController{
    constructor(private numberService:NumberService){

    }

    async increase(){
        var num=await this.numberService.increase();
        alert(`awaited ${num}`);
    }

    decrease(){
        this.numberService.decrease();
    }
}