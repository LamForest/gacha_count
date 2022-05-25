import * as CONST from "../interface/const";
import { PurchaseItem, ActivityItem, ActivityShopItem, RegularItem,MainSSItem } from "../interface/types";
import { v4 as uuidv4 } from 'uuid';

import dayjs from "dayjs";
// import { mapActions } from "vuex";
// const today_date = dayjs('2022-05-17T00:00:00.000+08:00');
export const today_date = dayjs().startOf('day')
export const deadline_date = dayjs('2022-08-22T00:00:00.000+08:00');
const days_diff = deadline_date.diff(today_date, 'day')

/**
 * 源石交易所
 */
export const shiList :Array<PurchaseItem> = [
    new PurchaseItem(6, CONST.SHI_6, "6元首充", {
      shi: 3
    }),
    new PurchaseItem(30, CONST.SHI_30, "30元首充", {
      shi: 12
    }),
    new PurchaseItem(98, CONST.SHI_98, "98元首充", {
      shi: 40
    }),
    new PurchaseItem(198, CONST.SHI_198, "198元首充", {
      shi: 80
    }),
    new PurchaseItem(328, CONST.SHI_328, "328元首充", {
      shi: 132
    }),
    new PurchaseItem(648, CONST.SHI_648, "648元首充", {
      shi: 260
    }),

    // new PurchaseItem(6, 3, 0, 0, 0, "6元首充（￥6，3源石)", 'shi_6', ResObtainType.purchase),

    // new PurchaseItem(30, 12, 0, 0, 0, "30元首充（￥30，12源石）", 'shi_30', ResObtainType.purchase),
    // new PurchaseItem(98, 40, 0, 0, 0, "98元首充（￥98，40源石）", 'shi_98', ResObtainType.purchase),
    // new PurchaseItem(198, 80, 0, 0, 0, "198元首充（￥98，80源石）", 'shi_198', ResObtainType.purchase),
    // new PurchaseItem(328, 132, 0, 0, 0, "328元首充（￥328，132源石）", 'shi_328', ResObtainType.purchase),
    // new PurchaseItem(648, 260, 0, 0, 0, "648元首充（￥648，260源石）", 'shi_648', ResObtainType.purchase),
  ];

/**
 * 组合包
 */
export const zuhebaoList: Array<PurchaseItem> = [
  new PurchaseItem(6, CONST.BAO_FRESHMAN, "新人组合包", {
    chou: 1,
  }),
  new PurchaseItem(128, CONST.BAO_FRESHMAN_CHOU, "新人寻访组合包", {
    chou_10: 2,
  }),
  new PurchaseItem(198, CONST.BAO_SUMMER, "夏日庆典礼包", {
    chou_10: 2,
    shi: 24,
  }),

  
    // new PurchaseItem(6, 0, 0, 1, 0, "新人组合包（￥6)", CONST.BAO_FRESHMAN, ResObtainType.purchase),
    // new PurchaseItem(128, 0, 0, 0, 2, "新人寻访组合包（￥128)", 'bao_freshman_chou', ResObtainType.purchase),
    // new PurchaseItem(198, 24, 0, 0, 2, "夏日庆典礼包（￥198)", 'bao_summer', ResObtainType.purchase),
]
/**
 * 月卡 大月卡
 */
export const monthCardList: Array<PurchaseItem> = [
  new PurchaseItem(168, CONST.BIG_CARD_5, "每月寻访组合包 - 5月", {
    chou_10: 1,
    shi: 42,
  }),
  new PurchaseItem(168, CONST.BIG_CARD_6, "每月寻访组合包 - 6月", {
    chou_10: 1,
    shi: 42,
  }),
  new PurchaseItem(168, CONST.BIG_CARD_7, "每月寻访组合包 - 7月", {
    chou_10: 1,
    shi: 42,
  }),
  
  // new PurchaseItem(168, 42, 0, 0, 1, "每月寻访组合包 - 5月（￥168)", CONST.BIG_CARD_5, ResObtainType.purchase),
  // new PurchaseItem(168, 42, 0, 0, 1, "每月寻访组合包 - 6月（￥168)", CONST.BIG_CARD_6, ResObtainType.purchase),
  // new PurchaseItem(168, 42, 0, 0, 1, "每月寻访组合包 - 7月（￥168)", CONST.BIG_CARD_7, ResObtainType.purchase),
]

//小月卡
{  
  const months = days_diff / 30;
  const price = months * 30;
  const yu = days_diff * 200;
  const shi = Math.floor(months) * 6; //保守一点，用floor
  const monthlyCarditem = new PurchaseItem(price, CONST.MONTHLY_CARD, `月卡`, {
    yu, shi,
  });
  monthCardList.unshift(monthlyCarditem);
}


/**活动复刻 & 新活动 */
export const reviewActivityList: Array<ActivityItem> = [
  new ActivityItem(CONST.ACTIVITY_FUCHAO, "覆潮之下活动复刻", {
    shi: 28,
  }),
  new ActivityItem(CONST.ACTIVITY_DUOSUO, "多索雷斯活动复刻", {
    shi: 40,
  }),
  // new ActivityItem( 28, 0, 0, 0, "覆潮之下", 'activity_fuchao', ResObtainType.activity),
  // new ActivityItem( 40, 0, 0, 0, "多索雷斯假日", 'activity_duosuo', ResObtainType.activity),
]

export const newActivityList: Array<ActivityItem> = [
  new ActivityItem(CONST.ACTIVITY_LAITA, "莱塔尼亚新活动", {
    shi: 27,
  }),
  new ActivityItem(CONST.ACTIVITY_LAIYIN, "莱茵生命新活动", {
    shi: 27,
  }),
  new ActivityItem(CONST.ACTIVITY_SUMMER, "2022夏季活动", {
    shi: 40,
  }),
  // new ActivityItem( 27, 0, 0, 0, "莱茵生命新活动", 'activity_laita', ResObtainType.activity),
  // new ActivityItem( 27, 0, 0, 0, "莱塔尼亚新活动", 'activity_laiyin', ResObtainType.activity),
];

/**
 * 活动商店
 */
export const activityShopList: Array<ActivityItem> = [
  new ActivityShopItem(CONST.SHOP_ACTIVITY_LAITA, "莱塔尼亚活动", {
    chou: 3,
  }),
  new ActivityShopItem(CONST.SHOP_ACTIVITY_LAIYIN, "莱茵生命活动", {
    chou: 3,
  }),
  new ActivityShopItem(CONST.SHOP_ACTIVITY_FUCHAO, "覆潮之下复刻", {
    chou: 3,
  }),
  new ActivityShopItem(CONST.SHOP_ACTIVITY_DUOSUO, "多索雷斯假日复刻", {
    chou: 3,
  }),
  new ActivityShopItem(uuidv4(), "2022年夏活", {
    chou: 3,
  }),
  // new ActivityShopItem( 0, 0, 3, 0, "莱茵生命新活动", 'shop_laita', ResObtainType.activity),
  // new ActivityShopItem( 0, 0, 3, 0, "莱塔尼亚新活动", 'shop_laiyin', ResObtainType.activity),
  // new ActivityShopItem( 0, 0, 3, 0, "覆潮之下复刻", 'shop_fuchao', ResObtainType.activity),
  // new ActivityShopItem( 0, 0, 3, 0, "多索雷斯假日复刻", 'shop_duosuo', ResObtainType.activity),
];

/**
 * 每日任务
 * 每周任务
 * 剿灭行动
 */

export const regularList : Array<RegularItem>= [

];

// 每日任务，每周任务，剿灭行动
{
  let yu = days_diff * 100; //每日任务
  const weeks = Math.floor(days_diff / 7) + 1;
  yu += weeks * (500); //每周任务
  yu += weeks * 1800; //剿灭
  regularList.push(new RegularItem(CONST.DAILY_TASK, '每日任务，每周任务，剿灭行动', {
    yu
  }));
}

{
  //TODO 新剿灭时间未定

  regularList.push(new RegularItem(CONST.NEW_JIAOMIE, '7月份新剿灭行动', {
    yu: 1500
  }));
}

//夏活幸运墙，签到，
export const summerList: Array<RegularItem> = [
  //TODO 夏活日期确定后，增加日期判断
  new RegularItem(uuidv4(), '夏活幸运墙', {
    yu: 8304,
  }),
  new RegularItem(uuidv4(), '夏活14天每天赠送一抽', {
    chou: 14,
  }),
  new RegularItem(uuidv4(), '夏活登录即送', {
    chou_10: 1,
  }),
  new RegularItem(uuidv4(), '夏活签到', {
    shi: 1, yu: 400,
  }),
]


//杂项
export const otherList: Array<RegularItem> = [
  //TODO 每个月注释一行
  new RegularItem(uuidv4(), '6月绿票商店第一层', {
    yu: 600, chou: 2
  }),
  new RegularItem(uuidv4(), '7月绿票商店第一层', {
    yu: 600, chou: 2
  }),
  new RegularItem(uuidv4(), '8月绿票商店第一层', {
    yu: 600, chou: 2
  }),
  new RegularItem(uuidv4(), 'BUG修复、轮换池预载，活动更新（保守估计）', {
    yu: Math.round(days_diff / 5) * 200
  }),
]
{
  //TODO 确认端午节没错
  let yu = 0;
  let shi = 0;
  if(today_date.isBefore(dayjs('2022-06-03'))){
    yu += 200;
  }
  if(today_date.isBefore(dayjs('2022-06-08'))){
    shi += 1
  }
  // const checkin_details = `端午节签到`
  if(yu !=0 || shi!=0){
    otherList.push(
      new RegularItem(uuidv4(),  `端午节签到`, {
        yu, shi,
      })
    )
  }

}

/**
 * 主线 已收录的SS
 */

export const mainList : Array<MainSSItem> = [
  new MainSSItem(`序章 黑暗时代·上`, {
    shi: 11  + 7, //主线11关，战斗教学7关
  }),
  new MainSSItem(`序章 黑暗时代·上（突袭)`, {
    shi: 11, //主线11关，战斗教学7关
  }),
  new MainSSItem(`第一章 黑暗时代·下`, {
    shi: 10 * 2 + 2 + 3, //主线12关，战斗教学3关,有两关不能突袭
  }),
  new MainSSItem(`第一章 黑暗时代·下 (突袭)`, {
    shi: 10 , //主线12关，战斗教学3关,有两关不能突袭
  }),
  new MainSSItem(`第二章 异卵同生`, {
    shi: 10 + 4 + 12 , //主线10关，战斗教学4关，支线12关
  }),
  new MainSSItem(`第二章 异卵同生（突袭）`, {
    shi: 10  , //主线10关，战斗教学4关，支线12关
  }),

  //主线8关，战斗教学1关，支线7关
  new MainSSItem(`第三章 二次呼吸`, {
    shi: 8  + 1 + 7 , 
  }),
  new MainSSItem(`第三章 二次呼吸（突袭）`, {
    shi: 8  , 
  }),


    //主线10，战斗教学0关，支线10关
    new MainSSItem(`第四章 急性衰竭`, {
      shi: 10 + 0 + 10 , 
    }),
    new MainSSItem(`第四章 急性衰竭（突袭）`, {
      shi: 10  , 
    }),


    //主线10，剧情1，战斗教学0关，支线9关，绝境作战4
    new MainSSItem(`第五章 靶向药物`, {
      shi: 10 + 1 + 9 , 
    }),
    new MainSSItem(`第五章 靶向药物（突袭、绝境作战）`, {
      shi: 10 + 4 , 
    }),
    
    //主线15，剧情3，战斗教学1关，支线4关，绝境作战4
    new MainSSItem(`第六章 局部坏死`, {
      shi: 15 + 3 + 1 + 4 , 
    }),
    new MainSSItem(`第六章 局部坏死（突袭、绝境作战）`, {
      shi: 15 + 4 , 
    }),

    //主线16，剧情4，战斗教学1关，支线2关，绝境作战4
    new MainSSItem(`第七章 苦难摇篮`, {
      shi: 16 + 4 + 1 + 2 , 
    }),
    new MainSSItem(`第七章 苦难摇篮（突袭、绝境作战）`, {
      shi: 16 + 4 , 
    }),

    //主线17（JT8-1没突袭），剧情6，隐藏剧情5，战斗教学1关，支线0关，绝境作战4
    new MainSSItem(`第八章 怒号光明`, {
      shi: 17 + 6 + 5 + 1  , 
    }),
    new MainSSItem(`第八章 怒号光明（突袭、绝境作战）`, {
      shi: 16 + 4 , 
    }),

    //主线17，剧情4，战斗教学1关，支线1关，绝境作战6
    new MainSSItem(`第九章 风暴瞭望`, {
      shi: 17 + 4 + 1 + 1  , 
    }),
    new MainSSItem(`第九章 风暴瞭望（突袭、绝境作战）`, {
      shi: 17 + 6 , 
    }),   

    //主线15，剧情4，战斗教学1关，支线0关，绝境作战3
    new MainSSItem(`第十章 破碎日冕`, {
      shi: 15 + 4 + 1  , 
    }),
    new MainSSItem(`第十章 破碎日冕（突袭、绝境作战）`, {
      shi: 15 + 3 , 
    }),   
    

]

export const documentedSSList : Array<MainSSItem> = [
  //骑兵与猎人
  new MainSSItem(`骑兵与猎人`, {
    shi: 6 + 6 * 2 , 
  }), 

  //火蓝之心
  new MainSSItem(`火蓝之心`, {
    shi: 14 + 4 + 6 * 2 , 
  }), 

  //喧闹法则
  new MainSSItem(`喧闹法则`, {
    shi: 13 + 8 * 2 , 
  }), 

  //沃伦母的
  new MainSSItem(`沃伦姆德的薄暮`, {
    shi: 15 + 8 * 2  + 1, //1为200杀小剿灭 
  }), 

  //密林悍将
  new MainSSItem(`密林悍将归来`, {
    shi: 12 + 8 * 2 , 
  }), 

  //玛丽亚林光
  new MainSSItem(`玛莉娅·临光`, {
    shi: 12 + 8 * 2 , 
  }),   

  //孤岛风云
  new MainSSItem(`孤岛风云`, {
    shi: 11 + 8 * 2 , 
  }),   

  //画中人
  new MainSSItem(`画中人`, {
    shi: 14 + 8 * 2 , 
  }),   

  //生于黑夜
  new MainSSItem(`生于黑夜`, {
    shi: 8 + 13 + 1 , 
  }),   


  //依晨漫步
  new MainSSItem(`遗尘漫步`, {
    shi: 11 + 8 * 2 , 
  }),   


  //覆潮之下
  // new MainSSItem(`覆潮之下`, {
  //   shi: 12 + 8 * 2 , 
  // }),   
]