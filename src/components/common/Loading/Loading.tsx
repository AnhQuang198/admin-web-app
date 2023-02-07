import { useSelector } from "react-redux";
import LoadingBar from "react-top-loading-bar";
import { RootState } from "../../../app/store";

function Loading(props:any) {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  const onLoaderFinished = () => {
    if(isLoading === 100){
      return 0;
    }
  };

  return (
    <div>
      <LoadingBar color="#1677ff" progress={isLoading} height={3} onLoaderFinished={onLoaderFinished} />
      {props.children}
    </div>
  );
}

export default Loading;
