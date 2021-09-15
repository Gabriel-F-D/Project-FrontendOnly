import {useState, useEffect} from 'react'
import { dogosApi } from '../api/dogosApi';
import {useDispatch, useSelector} from 'react-redux'
import {getDogos} from '../redux/actions/dogos'

const useDogosApi = (url, isDetail) => {

    const dispatch = useDispatch();
    const dogosFromStore = useSelector(state => state.dogos.dogos);

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

   
   

    useEffect(() => {
        async function getDetail() {
            const {data} = await dogosApi.get(url);
            setData(data);
            setIsLoading(false);
        }

        async function getData() {
            if(!dogosFromStore){
                const {data} = await dogosApi.get(url);
                dispatch(getDogos(data));
                setData(data);
                setIsLoading(false);
            }else{
                setData(dogosFromStore)
                setIsLoading(false);
            }
        }
        isDetail ? getDetail() : getData();
    }, [dispatch, dogosFromStore, isDetail, url])


    return{
        data,
        isLoading,
    }
}

export default useDogosApi
