import React , {useEffect, useState} from 'react' ;
function NavBar() {
    const [navBackground, setNavBackground] = useState(false)
    useEffect(() => {
        
        window.addEventListener( 'scroll' , () => {
            if( window.scrollY>=40 ) 
                setNavBackground(true) ;
            else setNavBackground(false)    
        });
        return () => {
            window.removeEventListener('scroll') ;
        };

    }, []) ;
    return (
        <div className={`navbar__warpper ${navBackground && "nav_black"}  `} >
            {console.log(navBackground)}
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                alt="Netflix.svg" 
                height={20} 
            />
        </div>
    );
}

export default NavBar ;