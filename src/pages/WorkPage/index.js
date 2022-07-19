import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShowCard } from "../../components";
import axios from 'axios';
const WorkPage = () => {

    //destructure params down to the value name
    const {name} = useParams();
    const [showData, setShowData] = useState({rating: {}, image: {medium: {}}});
    const navigate = useNavigate()
    function handleClick() {
        navigate(-1);
    }
    

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

        //for testing- screen.getByRole("button, { name: "Back" }") looking for button with name of back -> what the button says it's called

       

    return ( <ShowCard name={showData.name} summary={showData.summary} image={showData.image} rating={showData.rating}/>)
}
 
export default WorkPage;
