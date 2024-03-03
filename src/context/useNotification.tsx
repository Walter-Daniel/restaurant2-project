import { useContext } from "react";
import { NotificationContext } from "./notification.context";


export const useNotification = () => {
    const context = useContext(NotificationContext);
    if(!context) throw new Error('No existe Contexto')
    return context
}