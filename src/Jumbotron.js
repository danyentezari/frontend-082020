import React, {useState} from 'react';

const Jumbtron = (props) => {

    const [state, setState] = useState(
        {
            showSubscribeButton: true
        }
    )

    const showForm = () => {
        setState(
            { showSubscribeButton: false }
        )
    }

    return (
        <div className="jumbotron">
            <h1 className="display-4">{props.title}</h1>
            <p className="lead">{props.lead}</p>
            <hr className="my-4" />
            <p>{props.description}</p>
        </div>
    )
}

export default Jumbtron;