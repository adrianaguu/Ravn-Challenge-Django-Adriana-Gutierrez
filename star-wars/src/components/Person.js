import '../styles/Person.css';
import indicator from '../static/indicator.svg';

export const Person = (props) => {
    return (
        <div>
            <div className="Person">
                <div className="Cell">
                    <h2>{props.name}</h2>
                    <p>{props.species} from {props.homeworld}</p>
                    
                </div>
                <div className="Icon">
                    <img src={indicator} alt="loading spinner" />
                </div>
            </div>
            <div className="Separator"><hr /></div>
            
        </div>
    )
}