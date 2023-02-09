import { notification } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";

export interface NotiObject {
  type: NotificationType;
  title: string;
  content: string;
}

export const useGetNotification = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (params: NotiObject) => {
    api[params.type]({
      message: params.title,
      description: params.content,
    });
  };

  return { openNotification, contextHolder };
};
