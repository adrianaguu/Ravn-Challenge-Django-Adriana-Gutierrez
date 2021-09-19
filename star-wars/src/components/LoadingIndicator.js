import '../styles/LoadingIndicator.css';
import loading from '../static/loading.gif';

export const LoadingIndicator = () => {
    return (
        <div className="Cell">
            <div className="LoadingIndicator">
            
                 <img src={loading} alt="loading spinner" /> 
                 Loading 
                
            </div>
        </div>
    )
}