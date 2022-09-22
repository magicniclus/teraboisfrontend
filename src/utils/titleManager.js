export function whatPage (){
    // console.log(window.location.pathname);
    handleTitle()
}

//Function to animate the project title when the user is no longer on the page
export function handleTitle(){
    let ok = true;
    
    //We call it that in the landingPage, initialization with the name of the landing page
    document.title = "TeraBois | Rendez-vous"
    
    
    /* A function that changes the title of the page every second. */
    setInterval(()=>{
        if(document.hidden){
            ok = !ok
            if(ok){
                document.title = "Vous y etes presque !"
            }else{
                document.title = "☀️☀️Isolation 1€"
            }
        } else if(window.location.pathname === "/nous-contacter"){
            document.title = "TeraBois | Rendez-vous";
        }   

        if(window.location.pathname === "/connection"){
            if(document.hidden){
                document.title= "TeraBois | Connexion";
            }
            document.title= "TeraBois | Connexion";
        }

        if(window.location.pathname === "/"){
            if(document.hidden){
                document.title= "TeraBois | Accueil";
            }
            document.title= "TeraBois | Accueil";
        }

        if(window.location.pathname === "/accueil"){
            if(document.hidden){
                document.title= "TeraBois | Accueil";
            }
            document.title= "TeraBois | Accueil";
        }


        if(window.location.pathname === "/about"){
            if(document.hidden){
                document.title= "TeraBois | A Propos";
            }
            document.title= "TeraBois | A Propos";
        }

        if(window.location.pathname === "/admin"){
            if(document.hidden){
                document.title= "TeraBois | Tableau de bord";
            }
            document.title= "TeraBois | Tableau de bord";
        }

        if(window.location.pathname === "/politique-de-confidentialite"){
            if(document.hidden){
                document.title= "TeraBois | Politique de confidentialité";
            }
            document.title= "TeraBois | Politique de confidentialité";
        }

        if(window.location.pathname === "/conditions-generales"){
            if(document.hidden){
                document.title= "TeraBois | Conditions-generales";
            }
            document.title= "TeraBois | Conditions-generales";
        }

        if(window.location.pathname !== "/nous-contacter" && window.location.pathname !== "/connection" && window.location.pathname !== "/accueil" && window.location.pathname !== "/about" && window.location.pathname !== "/admin" && window.location.pathname !== "/politique-de-confidentialite" && window.location.pathname !=="/conditions-generales" && window.location.pathname !== "/"){
            if(document.hidden){
                document.title= "TeraBois | Page 404";
            }
            document.title= "TeraBois | Page 404";
        }
    }, 1000)
}

handleTitle()