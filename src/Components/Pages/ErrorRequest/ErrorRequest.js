import appConfig from '../../Config/appConfig';
import './ErrorRequest.css'

function ErrorRequest({error}){
    
    return(
        <div className='ErrorRequest'>
            <h2>
                {error.code}
            </h2>
            <div>
                {error.message}
            </div>
            <br/>
            <img src={appConfig.errorCats + error.response.status} alt='cat status' />
        </div>
    )
}

export default ErrorRequest;