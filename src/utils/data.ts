import * as CONST from "../interface/const";
import { PurchaseItem, ActivityItem, ActivityShopItem } from "../interface/types";



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
      shi: 648
    }),

    // new PurchaseItem(6, 3, 0, 0, 0, "6元首充（￥6，3源石)", 'shi_6', ResObtainType.purchase),

    // new PurchaseItem(30, 12, 0, 0, 0, "30元首充（￥30，12源石）", 'shi_30', ResObtainType.purchase),
    // new PurchaseItem(98, 40, 0, 0, 0, "98元首充（￥98，40源石）", 'shi_98', ResObtainType.purchase),
    // new PurchaseItem(198, 80, 0, 0, 0, "198元首充（￥98，80源石）", 'shi_198', ResObtainType.purchase),
    // new PurchaseItem(328, 132, 0, 0, 0, "328元首充（￥328，132源石）", 'shi_328', ResObtainType.purchase),
    // new PurchaseItem(648, 260, 0, 0, 0, "648元首充（￥648，260源石）", 'shi_648', ResObtainType.purchase),
  ];

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

export const bigMonthCardList: Array<PurchaseItem> = [
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

export const activityShop: Array<ActivityItem> = [
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
  // new ActivityShopItem( 0, 0, 3, 0, "莱茵生命新活动", 'shop_laita', ResObtainType.activity),
  // new ActivityShopItem( 0, 0, 3, 0, "莱塔尼亚新活动", 'shop_laiyin', ResObtainType.activity),
  // new ActivityShopItem( 0, 0, 3, 0, "覆潮之下复刻", 'shop_fuchao', ResObtainType.activity),
  // new ActivityShopItem( 0, 0, 3, 0, "多索雷斯假日复刻", 'shop_duosuo', ResObtainType.activity),
];