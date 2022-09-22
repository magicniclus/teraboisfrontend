import React from 'react';

/**
 * It takes in a title and text as props, and returns a title and text
 * @param props - This is the object that contains all the props that were passed to the component.
 * @returns A React component that displays a title and text.
 */
const TitleAndText = (props) => {

    /* Assigning the value of the title prop to the title variable. */
    const title = props.title;

    /* Assigning the value of the text prop to the text variable. */
    const text = props.text;

    const prestation = props.prestation !== undefined ? props.prestation : null;

    const showPrestation = ()=>{
        prestation.map((el, idx)=>{
            if(idx === prestation.length-1){
                return (
                    <span key={el}>{el}</span>
                )
            }else{
                return(
                    <span key={el}>{el} |&nbsp;</span>
                )
            }
        })
    }

    /* Returning a React component that displays a title and text. */
    return (
        <div className='titleAndText'>
            <h1>{title}</h1>
            <p className="description">
                {text}
            </p>
            <div className='allPrestation'>
                {   
                    prestation !== null ? showPrestation() : null
                }
            </div>
        </div>
    );
};

export default TitleAndText;