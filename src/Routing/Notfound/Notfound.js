
import {Link} from 'react-router-dom';

const NotFound = () => {
    return(
        <> 
         <div style={{height: '200px'}}>
            <h1 style={{color:'white'}}>Page not Found</h1>
            <Link to='/' className="Link-routes"> back </Link>
         </div>
        </>
    )
}
export default NotFound