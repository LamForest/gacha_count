
import * as CONST from "./const";
import { v4 as uuidv4 } from 'uuid';

const cal_cp_ratio = function(rmb: number, shi:number, yu:number, chou:number,shi_chou:number){
    const total_yu = shi * 180 + yu + chou * 600 + shi_chou * 6000;
    const total_chou = total_yu / 600.0
    return rmb / total_chou;
  }

const formatResourcesString = (param: ResourcesParam) => {
    let detail = ""
    if(param.yu){
        detail += `${param.yu} 合成玉；`
    }
    if(param.shi){
        detail += `${param.shi.toFixed(2)} 源石；`
    }
    if(param.chou){
        detail += `${param.chou} 寻访凭证；`
    }
    if(param.chou_10){
        detail += `${param.chou_10} 十连寻访凭证；`
    }
    return detail;
}

class ResourcesParam{
    shi?: number
    yu?: number
    chou?: number
    chou_10?: number
};

class Resources{
    //资源数量
    public yu = 0
    public shi = 0
    public chou = 0
    public chou_10 = 0

    constructor(
        param: ResourcesParam
    ){
        if(param.shi) this.shi = param.shi;
        if(param.yu) this.yu = param.yu;
        if(param.chou) this.chou = param.chou;
        if(param.chou_10) this.chou_10 = param.chou_10;
    }
}

class DetailedResources extends Resources{


    constructor(
        public readonly type: string,//资源的获取方式，可选值见ResObtainType
        public detail: string, //资源的详细说明
        public description: string, //资源的简略说明
        public readonly name: string,//should be unique 全局唯一标识符
        param: ResourcesParam
    ){
        super(param);

    }
}


class PurchaseItem extends DetailedResources{
    public readonly cpratio: number; //性价比
    constructor(
        public price: number, 
        name: string,
        description: string,
        param: ResourcesParam,

        ){
            super(CONST.ResObtainType.purchase , "", description,name, param)
            this.cpratio = cal_cp_ratio(price, this.shi, this.yu, this.chou, this.chou_10);
            // const resString =
            this.detail = `${this.description}：${formatResourcesString(param)};`
            if(price > 0){
                this.description += `[${this.cpratio.toFixed(2)}]`
            }
        }
}

class PurchaseAmountItem extends DetailedResources{
    public _amount = 0;
    public cpratio = 0;
    //每份氪金项目所含资源数量
    public readonly per_yu:number = 0;
    public readonly per_chou:number = 0;
    public readonly per_shi:number = 0;
    public readonly per_chou_10:number = 0;
    // public readonly per_price:number = 0;
    constructor(
        public per_price: number, //单价
        name: string,
        description: string,
        param: ResourcesParam,

        ){
            super(CONST.ResObtainType.purchase , "", description,name, {})
            if(param.shi) this.per_shi = param.shi;
            if(param.yu) this.per_yu = param.yu;
            if(param.chou) this.per_chou = param.chou;
            if(param.chou_10) this.per_chou_10 = param.chou_10;

            this.cpratio = cal_cp_ratio(this.per_price, this.per_shi, this.per_yu, this.per_chou, this.per_chou_10);
            // const resString = 
            if(per_price > 0){
                this.description += `[${this.cpratio.toFixed(2)}]`
            }
            
            
        }

        public set amount(new_amount: number){
            
            this._amount = new_amount;
            this.yu = new_amount * this.per_yu;
            this.chou = new_amount * this.per_chou;
            this.shi = new_amount * this.per_shi;
            this.chou_10 = new_amount * this.per_chou_10;

            this.detail = `${this.description} x ${this._amount}：${formatResourcesString({
                shi: this.shi,
                yu: this.yu,
                chou: this.chou,
                chou_10: this.chou_10,
            })}`
            // console.log('set amount:', this.detail)
        }

        public get amount():number{
            // console.log('get amount')
            return this._amount
        }

        public get price(){
            return this.per_price * this._amount;
        }
}

class ActivityItem extends DetailedResources{
    constructor(
        name: string,
        description: string,
        param: ResourcesParam
        ){
            super(CONST.ResObtainType.activity, "", description,name, param)
            let supplement = "";
            if('shi' in param){
                if( name == CONST.ACTIVITY_LAITA || name == CONST.ACTIVITY_LAIYIN){
                    supplement = "（源石数量参考吾导先路)";
                }else if(name == CONST.ACTIVITY_SUMMER){
                    supplement = "（源石数量参考多索雷斯)";
                }
                this.detail = `${description}关卡共计${this.shi}源石${supplement}`;
            }
            
            if('yu' in param){
                //复刻紫票
                this.detail = `${description}紫票可兑换${this.yu}合成玉${supplement}`;
            }
            
        }
}

class ActivityShopItem extends DetailedResources{
    constructor(
        name: string,
        description: string,
        param: ResourcesParam
        ){
            super(CONST.ResObtainType.activity , '', description,name, param)
            this.detail = `${description} 商店可兑换 3 寻访凭证`
        }
}

class RegularItem extends DetailedResources{
    public readonly detail: string; //在计算过程时展示的字符串
    constructor(
        name: string,
        description: string,
        param: ResourcesParam,
        ){
            super(CONST.ResObtainType.regular , "", description,name, param)
            this.detail = `${description} ： ${formatResourcesString(param)}`

    }
}

class MainSSItem extends DetailedResources{
    constructor(
        description: string,
        param: ResourcesParam
        ){
            super(CONST.ResObtainType.mainSS, "", description,uuidv4(), param)
            this.detail = `${description} ： ${formatResourcesString(param)}`;
        }
}
type PurchaseList = PurchaseItem[]
// type ActivityList = ActivityItem[]



type ResDetail = {
    detail: string,
    type: string, //资源获得的方式
}

export {PurchaseItem, PurchaseList, Resources, ResDetail, ActivityItem, ActivityShopItem,
RegularItem, MainSSItem,PurchaseAmountItem}
