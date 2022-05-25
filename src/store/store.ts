import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { PurchaseItem, ResDetail, Resources } from '@/interface/types'
import { ResObtainType } from '@/interface/const'

// export interface State {
// //   yu: number;
// //   shi: number;
// //   chou: number;
// //   chou_10: number;
// //   cost: number;//氪金总金额
    
// }

export interface State{
  checkeds : Record<string, PurchaseItem>
}
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    checkeds:{}
  },
  mutations:{
    check(state, item: PurchaseItem){ //state 类似this指针
        if(item.name in state.checkeds == false){
            state.checkeds[item.name] = item;
        }else{
            // console.log("试图check已经checked的item ： " + item.name);
        }
        

    },
    uncheck(state, item: PurchaseItem){ //state 类似this指针
        if(item.name in state.checkeds == true){
            delete state.checkeds[item.name];
        }else{
            // console.log("试图uncheck已经unchecked的item ： " + item.name);
        }
    },
  },

  getters:{
      totalPrice(state): number{
        let price = 0;
        for(const k in state.checkeds){
          if('price' in state.checkeds[k] && state.checkeds[k].type == ResObtainType.purchase ){
            price += state.checkeds[k].price;
          }
        }
        return price;
      },
      totalResources(state): Resources{
        const totalRes:Resources = {
            yu: 0,
            shi: 0,
            chou: 0,
            chou_10 : 0,
        };
        for(const k in state.checkeds){
            totalRes.yu += state.checkeds[k].yu;
            totalRes.chou += state.checkeds[k].chou;
            totalRes.shi += state.checkeds[k].shi;
            totalRes.chou_10 += state.checkeds[k].chou_10;
        }
        return totalRes;
      },

      totalChou(state, getters): number{
          // const res :Resources = getters.totalResources(); //runtime-core.esm-bundler.js?5c40:218 Uncaught TypeError: getters.totalResources is not a function
          const res :Resources = getters.totalResources;
          const ret = (res.shi * 180 + res.yu) / 600.0 + res.chou + res.chou_10 * 10 ;
          return ret;
      },

      allDetails(state) : Array<ResDetail>{

        const ret: Array<ResDetail> = [];

        for(const k in state.checkeds){
          const item = state.checkeds[k];
          ret.push({
            detail: item.detail,
            type: item.type,
          });
        }

        return ret;
      }
  }

})

// define your own `useStore` composition function
export function useStore () {
  return baseUseStore(key)
}