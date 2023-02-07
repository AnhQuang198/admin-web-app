import { notification } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";

export interface NotiObject {
  type: NotificationType;
  title: string;
  content: string;
}

export const useGetNotification = () => {
  const [notify, setNotify] = notification.useNotification();

  const openNotification = (
    type: NotificationType,
    title: string,
    content: string
  ) => {
    notify[type]({
      message: title,
      description: content,
    });
  };

  return (params: any) =>
    openNotification('error', params.title, params.content);
};
