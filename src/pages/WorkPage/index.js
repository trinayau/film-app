import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { ShowCard } from '../../components';

const WorkPage = () => {

    const { name } = useParams();
    const [showData, setShowData] = useState({ rating: {}, image: {}});

    useEffect(() => {

        async function getShowData(name) {
            try {
                const result = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${name}`);
                setShowData(result.data);
            } catch (err) {
                console.error(err)
            }
        }
        getShowData(name);

    }, [name])

    return <ShowCard
            name={showData.name}
            summary={showData.summary}
            image={showData.image}
            rating={showData.rating} />
           
}

export default WorkPage;