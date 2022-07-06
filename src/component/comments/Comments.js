import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showMeComments } from '../../redux/actions/action';
import Cards from './components/Cards';
import "./_comments.scss"

const Comments = () => {
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch();

    const state = useSelector(state => state.comments)

    useEffect(()=>{
        addComments()
    }, [])

    const addComments = async ()=>{
        await setIsLoading(true)
        await dispatch(showMeComments())
        await setIsLoading(false)
    }

    const loader = ()=>{
        return(
            <h4>Loader</h4>
        )
    }

    const getComment = ()=>{
        if(state !== []){
            return(
                <>
                    {
                        state.map((comm)=>
                        <div key={comm.id} className='cardsContainer'>
                            <Cards name={comm.attributes.name} commentaire={comm.attributes.commentaire} stars={comm.attributes.note}/>
                        </div>
                        )
                    }
                </>
            )
        }
    }

    return (
        <div className='commentsContainer'>
            <h3>Ils nous on fait confiance</h3>
            <div className="commentContainer">
                {
                    isLoading ? loader():getComment()
                }
            </div>
        </div>
    );
};

export default Comments;