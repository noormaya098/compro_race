import { create } from 'zustand';

const GoogleMpasStore = create((set) => ({
    Alamat: "", // This holds the current path name.
    setAlamat: (newPatchName) => set({ Alamat: newPatchName }), // This updates PatchName.
}));

export default GoogleMpasStore;
