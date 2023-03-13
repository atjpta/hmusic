import { alertStore } from "~~/stores/alert.store";
const useAlert = alertStore()
const supabase = useSupabaseClient()
export default {
    upload: async (filePath, file) => {
        let { error: uploadError } = await supabase.storage
            .from("hmusic-files/image")
            .upload(filePath, file);
        if (uploadError) throw uploadError;

        useAlert.setSuccess("tải ảnh lên thành công");
        return;
    },
   
} 