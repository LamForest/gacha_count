
import * as CONST from "./const";

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
        detail += `${param.shi} 源石；`
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
        public readonly description: string, //资源的简略说明
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
            const resString = 
            this.detail = `${description}：${formatResourcesString(param)}抽卡性价比为${this.cpratio.toFixed(2)}元/抽;`
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
            if( name == CONST.ACTIVITY_LAITA || name == CONST.ACTIVITY_LAIYIN){
                supplement = "（源石数量参考吾导先路)";
            }else if(name == CONST.ACTIVITY_SUMMER){
                supplement = "(源石数量参考多索雷斯)";
            }
            this.detail = `${description}关卡共计${this.shi}源石${supplement}`;
        }
}

class ActivityShopItem extends DetailedResources{
    constructor(
        name: string,
        description: string,
        param: ResourcesParam
        ){
            super(CONST.ResObtainType.activity , '', description,name, param)
            this.detail = `${description} 商店可兑换 3 抽`
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

type PurchaseList = PurchaseItem[]
type ActivityList = ActivityItem[]



type ResDetail = {
    detail: string,
    type: string, //资源获得的方式
}

export {PurchaseItem, PurchaseList, Resources, ResDetail, ActivityItem, ActivityShopItem,
RegularItem}
