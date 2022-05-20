import { ResObtainType } from "./const";

class PurchaseItem{
    public readonly cpratio: number;
    constructor(
        public price: number,
        public shi: number,
        public yu: number,
        public chou: number,
        public chou_10: number,
        public description: string,
        public name: string, //should be unique
        public type: string,
        ){
            this.cpratio = 10;
        }
}

type PurchaseList = PurchaseItem[]

type Resources = {
    yu: number,
    shi: number,
    chou: number,
    chou_10: number,
}

type ResDetail = {
    description: string,
    type: string,
}

export {PurchaseItem, PurchaseList, Resources, ResDetail}
