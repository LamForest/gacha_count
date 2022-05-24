//
// export const TYPE_PURCHASE = "氪金";
// export const TYPE_REGULAR = "日常任务";
// export const TYPE_ACTIVITY = "活动";
// export const TYPE_CHECKIN = "签到";
// export const TYPE_UPDATE = "更新";
// export const TYPE_MAIN = "主线";
// export type TYPE_PURCHASE = "氪金";
// export type TYPE_REGULAR = "日常任务";
// export type TYPE_ACTIVITY = "活动";
// export type TYPE_CHECKIN = "签到";
// export type TYPE_UPDATE = "更新";
// export type TYPE_MAIN = "主线";
// export type ResType = 
//     TYPE_PURCHASE 
//     | TYPE_REGULAR
//     | TYPE_ACTIVITY
//     | TYPE_CHECKIN
//     | TYP

import { ActivityItem } from "./types"

// type a = TYPE_PURCHASE;
export const ResObtainType:Record<string, string> = {
    regular : "日常任务", //日常
    // checkin : "签到",
    purchase : "氪金",
    activity : '活动',
    // update : '更新',
    // main : '主线', //TODO
    // yellowTicket : '黄票'

};

/**
 * name
 */
export const ACTIVITY_LAIYIN = 'activity_laiyin'
export const ACTIVITY_DUOSUO = 'activity_duosuo' 
export const ACTIVITY_LAITA = 'activity_laita' 
export const ACTIVITY_FUCHAO = 'activity_FUCHAO' 
export const ACTIVITY_SUMMER = 'activity_summer_2022'

export const SHOP_ACTIVITY_LAIYIN = 'shop_activity_laiyin'
export const SHOP_ACTIVITY_DUOSUO = 'shop_activity_duosuo' 
export const SHOP_ACTIVITY_LAITA = 'shop_activity_laita' 
export const SHOP_ACTIVITY_FUCHAO = 'shop_activity_fuchao' 
export const SHOP_ACTIVITY_SUMMER = 'shop_activity_summer_2022'

export const BAO_FRESHMAN = 'bao_freshman'; //新人组合包
export const BAO_FRESHMAN_CHOU = 'bao_freshman_chou' //新人寻访组合包
export const BAO_SUMMER = 'bao_summer_2022' //夏日庆典礼包

export const BIG_CARD_5 = 'big_monthly_card_5'
export const BIG_CARD_6 = 'big_monthly_card_6'
export const BIG_CARD_7 = 'big_monthly_card_7'

export const SHI_6 = 'shi_6';
export const SHI_30 = 'shi_30';
export const SHI_98 = 'shi_98';
export const SHI_198 = 'shi_198';
export const SHI_328 = 'shi_328';
export const SHI_648 = 'shi_648';

// const TypeTitles = {
//     ResObtainType.regular: 
// }

