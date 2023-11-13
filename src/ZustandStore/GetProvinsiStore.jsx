import create from 'zustand';
import axios from 'axios';

const useProvinsiStore = create((set) => ({
    cityid: '', 
    provinceid: "",
    DatasemuaMuat :"",
    DatasemuaBongkar :"",
    gram:"",
    selectprovinsi: null,
    result :"",
    setProvinsiId: (newProvinsiId) => set({ provinsiId: newProvinsiId }), 
}));

async function GetProvinsi() {
    const { provinceid } = useProvinsiStore.getState();
    const { cityid } = useProvinsiStore.getState();
    try {
        const response = await axios.get(`https://apirace.eurekalogistics.co.id/price/get-city?province=${provinceid}&city=${cityid}`, {
            headers: {
                Authorization: 'Bearer <your-token>'
            }
        });
        useProvinsiStore.setState({ selectprovinsi: response.data.data });
    } catch (error) {
        console.error(error);
    }
}

export { useProvinsiStore, GetProvinsi };
