import React,{Component} from 'react';
import axios from 'axios';

class FormPulangComp extends Component {

    constructor(props){
        super(props);
        this.state = {action:"pulang",nama_kereta:"",kelas:"executif",asal:"",tujuan:"",tanggal:""}
    }

    getData = () => {
        if(this.props.id !== undefined){
          const url = "http://localhost:3004/form/" + this.props.id;
          axios.get(url).then((res)=>{
            if(res.data.pulang !== ""){
                this.setState({...res.data.pulang});
            }
          },
          (err)=>{
            console.log("err");
          });
        }
      }

    isChange = (e) => {
        const nama  = e.target.name;
        const value = e.target.value;
        this.setState({[nama]:value},()=>{
            this.props.data(this.state);
        });
    }

    isOption = (e) => {
        this.state.kelas = e.target.value;
    }

    componentDidMount(){
        this.getData();
    }

    render(){

        var option = ["executif","bisnis","ekonim","eko ac"];
        var opt = option.map((item)=>{
            return  <option key={item} value={item} >{item}</option>
        });

        return(
            <div className="penumpang">
                <div className="d-flex mb-2">
                    <div className="col-12 panel-lblue"><b className="uppercase pr-1" >pulang</b>/<span className="font-italic" > return</span></div>
                </div>
                <div className="tbl-1">
                    <div className="input-group mb-2 row m-0">
                        <input type="text" className="form-control rounded-0 m-0" id="basic-url" aria-describedby="basic-addon3" name="nama_kereta" onChange={this.isChange} value={this.state.nama_kereta} />
                    </div>
                    <div className="input-group mb-2 row m-0" name="kelas" onChange={this.isOption} >
                        <select className="form-control rounded-0">
                            {opt}
                        </select>
                    </div>
                    <div className="input-group mb-2 row m-0">
                        <input type="text" className="form-control rounded-0 m-0" id="basic-url" aria-describedby="basic-addon3" name="asal" onChange={this.isChange} value={this.state.asal} />
                    </div>
                    <div className="input-group mb-2 row m-0">
                        <input type="text" className="form-control rounded-0 m-0" id="basic-url" aria-describedby="basic-addon3" name="tujuan" onChange={this.isChange}  value={this.state.tujuan} />
                    </div>
                    <div className="input-group mb-2 row m-0">
                        <input type="text" className="form-control rounded-0 col-12 m-0" id="basic-url" aria-describedby="basic-addon3" name="tanggal" onChange={this.isChange} value={this.state.tanggal} />
                    </div>
                </div>
            </div>
        )
    }
}

export default FormPulangComp;