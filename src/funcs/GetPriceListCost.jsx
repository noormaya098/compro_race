import axios from "axios";
import { useProvinsiStore } from "../ZustandStore/GetProvinsiStore";
import { notification } from "antd";


export async function GetPriceListCost() {
    const storeState = useProvinsiStore.getState();
    const { DatasemuaMuat, DatasemuaBongkar, gram, result } = storeState;
    useProvinsiStore.setState({
        result: null,
    });
    const dataForm = new URLSearchParams();
    dataForm.append('muat', DatasemuaMuat?.city_id);
    dataForm.append('bongkar', DatasemuaBongkar?.city_id);
    dataForm.append('berat', gram);

    try {
        const response = await axios.post(`https://apirace.eurekalogistics.co.id/price/get-cost`, dataForm.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        console.log(response.data);
        notification.success({
            message: "Tarif Di Temukan"
        })
        useProvinsiStore.setState({ result: response.data })
        return response.data;
    } catch (error) {
        notification.error({
            type: "error",
            message: "Tarif Tidak Di temukan"
        })
        console.error('Error fetching price list cost:', error);
    }
}
