import React,{Component,Fragment} from 'react';
import BookedList from '../../../component/list/BookedList';
import axios from 'axios';
import Api from '../../../env/env';
import '../../../index';

class Registered extends Component {

    constructor(props){
        super(props);
        this.state = {
            post:[]
        };
    }

    getData = () => {
        axios.get(Api).then((res)=>{
            this.setState({post:res.data},
            ()=>{
                console.log(this.state);
            });
        });
    }

    deleteData = (id) =>{
        const url = Api+id;
        axios.delete(url).then((res)=>{
            window.location.reload();
            alert("berhasil");
        },()=>{
            alert("gagal");
        });
        // console.log(id);
    }

    componentDidMount(){
        this.getData();
    }

    render(){
        return(
            <Fragment>
                <h2 className="text-center">List Booking</h2>
                <div class="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Pemesan</th>
                            <th>Alamat</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        this.state.post.map((item) => {
                            return <BookedList key={item.id} id={item.id} title={item.nama} alamat={item.alamat}  delete={this.deleteData} />
                        })
                    }
                </table>
                </div>
            </Fragment>
        )
    }
}

export default Registered;