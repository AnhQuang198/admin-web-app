import React, { useState } from "react";
import { useSelector } from "react-redux";
import LoadingBar from "react-top-loading-bar";
import { RootState } from "../../../app/store";

function Loading(props:any) {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  const [progress, setProgress] = useState<number>(0);

  const loadingProgress = () => {
    if (isLoading) {
      setProgress(70);
    }
    return progress + 100;
  }

  const onLoaderFinished = () => {
    setProgress(0);
  };

  return (
    <div>
      <LoadingBar color="#1677ff" progress={loadingProgress()} height={3} onLoaderFinished={onLoaderFinished} />
      {props.children}
    </div>
  );
}

export default Loading;
