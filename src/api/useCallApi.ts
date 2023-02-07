import { useDispatch } from "react-redux";
import {
  disableLoading,
  enableLoading,
} from "../components/common/Loading/LoadingSlice";

export const useCallApi = () => {
  const dispatch = useDispatch();

  const handleCallApi = async (callback:any) => {
    dispatch(enableLoading());
    try {
      const data = await callback();
      dispatch(disableLoading());
      return data;
    } catch (error) {
      dispatch(disableLoading());
      return error;
    }
  };

  return (callback:any) => handleCallApi(callback);
};
