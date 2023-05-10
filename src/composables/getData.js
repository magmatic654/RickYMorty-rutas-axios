import axios  from 'axios';
import { ref } from 'vue';

const data = ref(null)
const errorData = ref(null)
const loading = ref(null)

export const useGetData = ()=>{

    const getData = async(url)=>{
        loading.value = true
        try {
          const res = await axios(url)
          data.value = res.data

        } catch (error) {
          errorData.value = true;
        }finally{
          loading.value = false
        }
      }
    return{
        getData,
        data,
        errorData,
        loading,
    }

}