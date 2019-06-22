import React,{Component,Fragment} from 'react';
import RegisteredPost from '../../../component/RegisterdComp/RegisteredPost';
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
            <div className="registered" >
                <div className="title">
                    <h1 className="text-center" > List Booking </h1>
                    <hr/>
                    <br/>
                </div>
                {
                    this.state.post.map((item) => {
                        return <RegisteredPost key={item.id} id={item.id} title={item.nama} alamat={item.alamat}  delete={this.deleteData} />
                    })
                }
            </div>
        )
    }
}

export default Registered;