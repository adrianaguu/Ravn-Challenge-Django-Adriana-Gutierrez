import { useState } from 'react';
import '../styles/PersonData.css';

const SectionPersonDataRow = (props) => {

    return (
        <div>
            <div className="SectionRow">

                <div className="Name">{props.name}</div>
                <div className="Value">{props.value && props.value}</div>

            </div>
            <hr/>
        </div>
    )
}

const SectionHeader = (props) => {
    return (
        <div className="SectionHeader">
            <h2>{props.title}</h2>
        </div>
    )
}

export const PersonData = (props) => {

    return (
        <div className="PersonData">

            <SectionHeader title="General Information" />
            <SectionPersonDataRow name="Eye Color" value={props.person.eye_color} />
            <SectionPersonDataRow name="Hair Color" value={props.person.hair_color} />
            <SectionPersonDataRow name="Skin Color" value={props.person.skin_color} />
            <SectionPersonDataRow name="Birth Year" value={props.person.birth_year} />

            <SectionHeader title="Vehicles" />
            {
                props.person.vehicles.map((vehicle, index) => {

                    return <div key={index}>
                        <SectionPersonDataRow name={vehicle} />
                    </div>
                }
                )
            }

        </div>
    )
}