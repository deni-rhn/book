import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';


const BookedList = (props) => {
    return(
            <div class="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Pemesan</th>
                            <th>Alamat</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.title}</td>
                            <td>{props.alamat}</td>
                            <td><Link to={`/registered/`+ props.id} className="btn btn-primary mr-3"> Edit </Link>
                        <a onClick={()=>{props.delete(props.id)}} className="btn btn-danger">delete</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
    )
}

export default BookedList;