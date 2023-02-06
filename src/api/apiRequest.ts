import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const isLoading = useSelector((state: RootState) => state.loading.isLoading);

export const nonAuthGet = async (url: string) => {

}

export const nonAuthPost = async (url: string, data: any) => {

}