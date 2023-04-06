export default {
  state: {
    num: 20,
  },
  actions: {
    add1(newState: { num: number }, action: { type: string; value: number }) {
      newState.num++;
    },
    add2(newState: { num: number }, action: { type: string; value: number }) {
      newState.num += action.value;
    },
  },
  asyncActions: {
      asyncAdd1(dispatch:Function):void{
      setTimeout(()=>{
        dispatch({ type: "add1" });
      },1000)
    }
  },
};
