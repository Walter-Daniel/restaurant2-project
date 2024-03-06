import { AxiosResponse } from "axios";
import { dashboardApi } from "../api/dashboard";
import { DashboardResponse, Data  } from '../interfaces/dashboard';
import { useQuery } from "@tanstack/react-query";


const getDashboard = async():Promise<Data> => {
    const response: AxiosResponse<DashboardResponse> = await dashboardApi.getAll();
    const {data} = response.data;
    return data;
}

export const useDashboard = () => {

    const dashboardQuery = useQuery({
        queryKey: ['dashboard'],
        queryFn: getDashboard
    });

    return dashboardQuery;

}