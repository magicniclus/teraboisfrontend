import React, { useEffect} from 'react';
import { useDispatch} from 'react-redux';
import { useState } from 'react';
import SelectDropDown from './SelectDropDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark, faCheck} from '@fortawesome/free-solid-svg-icons';
import { addUser, addUserWhenImAdmin, prospectValid } from '../redux/actions/action'

const AddPropsectInAdminPage = (props) => {

    /* It's a regex to check if the name is valid. */
    const regexName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

    /* It's a regex to check if the code postal is valid. */
    const regexCodePostal = /[0-9]{5}/g;

    /* It's a regex to check if the phone number is valid. */
    const regexPhone = /^\d{10}$/;

    /* It's a regex to check if the mail is valid. */
    const regexMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    /* Creating a state variable called nameValue and a function to update it called setNameValue. */
    const [nameValue, setNameValue]=useState(null);

    /* Creating a state variable called errorName and a function to update it called setErrorName. */
    const [errorName, setErrorName]=useState(false);

    /* Creating a state variable called prenomValue and a function to update it called setPrenomValue. */
    const [prenomValue, setPrenomValue]=useState(null);

    /* Creating a state variable called errorPrenom and a function to update it called setErrorPrenom. */
    const [errorPrenom, setErrorPrenom]=useState(false);

    /* Creating a state variable called prenomValue and a function to update it called setPrenomValue. */
    const [emailValue, setEmailValue]=useState(null);

    /* Creating a state variable called errorPrenom and a function to update it called setErrorPrenom. */
    const [errorEmail, setErrorEmail]=useState(false);

    /* It's a hook to manage the state of the component. */
    const [errorPhone, setErrorPhone] = useState(false)

    /* It's a hook to manage the state of the component. */
    const [phoneValue, setPhoneValue] = useState(null)

    /* It's a hook to manage the state of the component. */
    const [errorCodePostal, setErrorCodePostal] = useState(false)

    /* It's a hook to manage the state of the component. */
    const [codePostalValue, setCodePostalValue] = useState(null)

    /* It's a hook that allow us to manage the state of the component. */
    const [prestation, setPrestation] = useState(null);

    /* It's a hook that allow us to manage the state of the component. */
    const [logement, setLogement] = useState(null);

    /* It's a hook that allow us to manage the state of the component. */
    const [age, setAge] = useState(null);

    /* It's a hook that allow us to manage the state of the component. */
    const [surface, setSurface] = useState(null);

    /* It's a hook that allow us to manage the state of the component. */
    const [realisation, setRealisation] = useState(null)

    /* It's a hook that allow us to manage the state of the component. */
    const [globalError, setGlobalError] = useState(false)
    
    /* It's a hook that allow us to manage the state of the component. */
    const [thkx, setThks] = useState(false)

    /* It's a hook that allow us to dispatch an action. */
    const dispatch = useDispatch()

    /**
     * It's a function that is called when the user clicks on the submit button. It prevents the
     * default behavior of the form, then it checks if the values of the inputs are correct, if they
     * are, it sets the globalError to true, if not, it sets it to false. If the globalError is true,
     * it sends the data to the API, and then it calls the callback function to close the modal
     * @param e - the event
     */
    const submitThis = async (e)=>{
        e.preventDefault()


        //CheckNom
        if (nameValue !== null && regexName.test(nameValue)) {
            setErrorName(false);
        } else {
            setErrorName(true)
        }

        //CheckPrenom
        if (prenomValue !== null && regexName.test(prenomValue)) {
            setErrorPrenom(false);
        } else {
            setErrorPrenom(true)
        }

        //CheckCodePostal
        if (codePostalValue !== null ) {
            setErrorCodePostal(false);
        } else {
            setErrorCodePostal(true)
        }

        //CheckPhone
        if (phoneValue !== null && regexPhone.test(phoneValue)) {
            setErrorPhone(false);
        } else {
            setErrorPhone(true)
        }

        //CheckMail
        if (emailValue !== null && regexMail.test(emailValue)) {
            setErrorEmail(false);
        } else {
            setErrorEmail(true)
        }

        if(!errorName && !errorPrenom && !errorCodePostal && !errorPhone && prestation !== null && logement !== null && age !== null && surface !== null && realisation !== null){
            setGlobalError(true)
        } else setGlobalError(false)

        // console.log(globalError);

        if(globalError){
            // console.log("ok");
            setThks(true)

            await dispatch(addUserWhenImAdmin({
                "name": nameValue,
                "prenom": prenomValue,
                "email": emailValue,
                "phone": phoneValue,
                "prestation": prestation.toString(),
                "habitation": logement.toString(),
                "age": age.toString(),
                "surface": surface.toString(),
                "date": realisation.toString(),
                "codePostal": codePostalValue,
                "rgpd": true
            }));

            // setThks(false)
            setTimeout(()=>{
                props.callBack(false);
            }, 2000)
        }
    }

   /**
    * It returns a div with a check icon and a h3 tag with the text "Prospect Ajouté"
    * @returns A function that returns a div with a checkmark and a h3 tag.
    */
    const showThks = () =>{
        console.log("Un");
        return(
            <>
                <div className='thksContainer'>
                    <FontAwesomeIcon icon={faCheck}/>
                    <h3>Prospect Ajouté</h3>
                </div>
            </>
        )
    }

   /**
    * It's a function that returns a form with a bunch of inputs and dropdowns
    * @returns The function showArray is being returned.
    */
    const showArray = ()=>{
        console.log('deux');
        return(
            <>
                <div className='closeBtn'>
                    <FontAwesomeIcon icon={faXmark} onClick={() => props.callBack(false)}/>
                </div>
                <form onSubmit={submitThis}>
                    <div className={errorName ? "nom error" : "nom"}>
                        <label>
                            Nom*
                            <input type="text" id="name" name="name" placeholder="Doe" value={nameValue} onChange={(e) => setNameValue(e.target.value)} required></input>
                            {errorName ? <span>Veuillez saisir un nom valide</span> : null}
                        </label>
                    </div>
                    <div className={errorPrenom ? "prenom error" : "prenom"}>
                        <label>
                            Prenom*
                            <input type="text" id="name" name="fist-name" placeholder="John" value={prenomValue} onChange={(e) => setPrenomValue(e.target.value)} required></input>
                            {errorPrenom ? <span>Veuillez saisir un prenom valide</span> : null}
                        </label>
                    </div>
                    <div className={errorPrenom ? "email error" : "email"}>
                        <label>
                            Email*
                            <input type="email" id="name" name="email" placeholder="johndoe@exemple.fr" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} required></input>
                            {errorEmail ? <span>Veuillez saisir un prenom valide</span> : null}
                        </label>
                    </div>
                    <div className={errorPhone ? "phone error" : "phone"}>
                        <label>
                            Téléphone*
                            <input type="tel" id="phone" name="phone" placeholder="0635487596" minLength="10" maxLength="10" onChange={(e) => setPhoneValue(e.target.value)} required></input>
                            {errorPhone ? <span>Veuillez saisir un numéro de téléphone valide</span> : null}
                        </label>
                    </div>
                    <div className={errorCodePostal ? "codePostal error" : "codePostal"}>
                        <label>
                            Code postal*
                            <input type="number" id="codePostal" name="codePostal" placeholder="33750" minLength="5" maxLength="5" onChange={(e) => setCodePostalValue(e.target.value)} required></input>
                            {errorCodePostal ? <span>Veuillez saisir un code postal valide</span> : null}
                        </label>
                    </div>
                    <div className="dropDownContainer">
                        <SelectDropDown list={["Ite", "Iti", "Isolation des combles", "Isolation sous toiture"]} title="Préstations" addClass="prestations" callBack={setPrestation}/>
                        <SelectDropDown list={["Maison", "Immeuble"]} title="Type de Logement" addClass="logement" callBack={setLogement}/>
                        <SelectDropDown list={["- de 2ans", "+ de 2ans", "+ de 15ans"]} title="Age du logement" addClass="age" callBack={setAge}/>
                        <SelectDropDown list={["- de 50m²", "Entre 50 et 100m²", "+ de 100m²"]} title="Surface de l'habitation" addClass="surface" callBack={setSurface}/>
                        <SelectDropDown list={["Le plus tôt possible", "Dans les 3 mois", "Dans l'année", "Je ne sais pas"]} title="Réalisation des travaux" addClass="realisation" callBack={setRealisation}/>
                    </div>
                    <div className='buttonContainer'>
                        <button type="submit">Ajouter</button>
                        <button type="button" onClick={() => props.callBack(false)}>Annuler</button>
                    </div>
                </form>
            </>
        )
    }

    return (
        <div className='addPropsectInAdminPage'>
            {thkx === true ? showThks(): showArray()}
        </div>
    );
};

export default AddPropsectInAdminPage;