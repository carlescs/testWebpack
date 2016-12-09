import {NumberService} from './NumberService';

export class TestController{
    messages:IMessage[]=[];
    i=0;
    constructor(private numberService:NumberService){
        
    }

    async increase(){
        var num=await this.numberService.increase();
        this.messages.push({ id:this.i++, message:`awaited ${num}` });
    }

    async decrease(){
        var num=await this.numberService.decrease();
        this.messages.push({id: this.i++,message:`awaited ${num}`});
    }
}

export interface IMessage{
    id:number;
    message:string;
}