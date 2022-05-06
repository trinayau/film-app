import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
const WorkPage = () => {

    //destructure params down to the value name
    const {name} = useParams();
    const [showData, setShowData] = useState({});

    useEffect(() =>{ 
        async function getShowData(name) {
        
            try{
                const result = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${name}`);
                setShowData(result.data);
                
            }catch(err){
                console.error(err)
            }
        }
        getShowData(name);
        }, [name])

    return ( <>
    <h2>{showData.name}</h2>
    <div>{showData.summary}</div>
    </>);
}
 
export default WorkPage;
