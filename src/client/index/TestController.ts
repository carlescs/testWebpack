import {NumberService} from './NumberService';

export class TestController{
    constructor(private numberService:NumberService){

    }

    increase(){
        this.numberService.increase();
    }

    decrease(){
        this.numberService.decrease();
    }
}