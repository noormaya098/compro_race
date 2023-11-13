import { create } from 'zustand';

const ClickSiteBarStore = create((set) => ({
    DiClickNih: false,
    setDiClickNih: (newPatchName) => set({ DiClickNih: newPatchName }), // This updates PatchName.
}));

export default ClickSiteBarStore;
