import { create } from 'zustand';

const PatchNameZustand = create((set) => ({
    PatchName: "", // This holds the current path name.
    setPatchName: (newPatchName) => set({ PatchName: newPatchName }), // This updates PatchName.
}));

export default PatchNameZustand;
