import React from 'react';
import {Link} from 'react-router-dom';


const RegisteredPost = (props) => {
    return(
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <hr/>
                    <p className="card-text"> {props.alamat}</p>
                    <Link to={`/registered/`+ props.id} className="btn btn-primary mr-3"> Edit </Link>
                    <a onClick={()=>{props.delete(props.id)}} className="btn btn-danger">delete</a>
                </div>
            </div>
    )
}

export default RegisteredPost;