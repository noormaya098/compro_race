import { create } from 'zustand';

const GoogleMpasStore = create((set) => ({
    AlamatMuat: "", // This holds the current path name.
    AlamatBongkar: "", // This holds the current path name.
    AlamatMuatCoord: '',
    AlamatBongkarCoord: "",
    validasimaps: false
    // setAlamat: (newPatchName) => set({ Alamat: newPatchName }),
}));

export default GoogleMpasStore;
