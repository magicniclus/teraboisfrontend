import React from 'react';

/**
 * It returns a div with a class of "specialisteLeft specialiste" or "specialisteRight specialiste"
 * depending on the value of the "sens" prop
 * @param props - {
 * @returns A React component
 */
const ImageAndText = (props) => {

    /* Creating a variable called img and assigning it the value of the img property of the props
    object. */
    const img = props.img;

    const folder = props.folder;

    /* Creating a variable called alt and assigning it the value of the alt property of the props
    object. */
    const alt= props.alt;

    /* Creating a variable called title and assigning it the value of the title property of the props
    object. */
    const title = props.title;

    /* Creating a variable called text and assigning it the value of the text property of the props
    object. */
    const text = props.text;

    /* Creating a variable called sens and assigning it the value of the sens property of the props
    object. */
    const sens = props.sens;

    /* Creating a variable called addClass and assigning it the value of the addClass property of the
    props object. */
    const addClass = props.addClass;

    const textTwo = props.textTwo !== undefined ? props.textTwo : null;

    const showFolder = ()=>{
        if(folder !== undefined){
            return {
                
            }
        }
    }

    /* Checking the value of the sens property of the props object. If the value is "left", it returns
    a div with a class of "specialisteLeft specialiste". If the value is not "left", it returns a
    div with a class of "specialisteRight specialiste". */
    if(sens === "left"){
        return (
            <div className={addClass != undefined ? addClass + " first specialisteLeft specialiste" : "specialisteLeft specialiste"}>
                <img
                    // src={img}
                    src={folder !== undefined ? `./img/${folder}/${img}_1440.jpg` : img}
                    srcSet={folder !== undefined ? `
                        ./img/${folder}/${img}_1440.jpg 1440w,
                        ./img/${folder}/${img}_1024.jpg 1024w,
                        ./img/${folder}/${img}_768.jpg 768w,
                        ./img/${folder}/${img}_425.jpg 425w,
                        ./img/${folder}/${img}_375.jpg 375w,
                        ./img/${folder}/${img}_320.jpg 320w,
                    ` : null}
                    sizes={ folder !== undefined ? `
                        (max-width: 1440px) 1440px,
                        (max-width: 1024px) 1024px,
                        (max-width: 768px) 768px,
                        (max-width: 425px) 425px,
                        (max-width: 375px) 375px,
                        (max-width: 320px) 320px,
                    ` : null}
                    alt={alt} 
                />
                <div className="specialisteRightContainer">
                    <h3>{title}</h3>
                    <p>{text}</p>
                    {
                        textTwo !== null ? <p className='textTwo'>{textTwo}</p> : null
                    }
                </div>
            </div>
        );
    } else {
        return (
            <div className={addClass != undefined ? addClass + "first specialisteRight specialiste" : "specialisteRight specialiste"}>
                <div className="specialisteRightContainer">
                    <h3>{title}</h3>
                    <p>{text}</p>
                    {
                        textTwo !== null ? textTwo : null
                    }
                </div>
                <img src={img} alt={alt} />
            </div>
        );
    }

};

export default ImageAndText;