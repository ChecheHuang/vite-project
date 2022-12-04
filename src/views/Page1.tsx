import React from "react";
import { useSelector, useDispatch } from "react-redux";
import numStatus from "@/store/NumStatus";

function Page1() {
  const { num, sarr } = useSelector((state: RootState) => ({
    num: state.NumStatusReducer.num,
    sarr: state.ArrStatusReducer.sarr,
  }));
  const dispatch = useDispatch();
  const changeNum = () => {
    // dispatch((dispatch: Function) => {
    //   setTimeout(() => {
    //     dispatch({ type: "add1" });
    //   }, 1000);
    // });

    dispatch(numStatus.asyncActions.asyncAdd1);
  };

  const changeArr = () => {
    dispatch({ type: "sarrpush", value: 1000 });
  };
  return (
    <div>
      Page1
      <p>{num}</p>
      <p>{sarr}</p>
      <button onClick={changeNum}>按鈕</button>
      <button onClick={changeArr}>按鈕</button>
    </div>
  );
}

export default Page1;
