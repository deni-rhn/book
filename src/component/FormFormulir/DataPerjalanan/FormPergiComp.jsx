import React,{Component} from 'react';
import axios from 'axios';


class FormPergiComp extends Component {

        constructor(props){
            super(props);
            this.state = {action:"pergi",nama_kereta:"",kelas:"executif",asal:"",tujuan:"",tanggal:""}
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

        getData = () => {
          if(this.props.id !== undefined){
            const url = "http://localhost:3004/form/" + this.props.id;
            axios.get(url).then((res)=>{
              this.setState({...res.data.pergi});
            },
            (err)=>{
              console.log("err");
            });
          }
        }

        componentDidMount(){
          this.getData();
        }

        isOption = (e) => {
          this.state.kelas = e.target.value;
        }

        render(){
            var option = ["executif","bisnis","ekonoim","eko ac"];
            var opt = option.map((item)=>{
                return  <option key={item} value={item} >{item}</option>
            });


            return(
                    <div className="penumpang">
                      <div className="d-flex mb-2">
                        <div className="col-3 panel-blue"></div>
                        <div className="col-9 panel-lblue"><b className="uppercase pr-1" >pergi</b>/<span className="font-italic" > depart</span></div>
                      </div>
                      <div className="tbl-1">
                        <div className="input-group mb-2 row m-0">
                          <div className="input-group-prepend col-3 p-0">
                            <span className="input-group-text rounded-0 panel-lblue text-white border-0 w-100" id="basic-addon3 "><b className="uppercase pr-1" >Nama kereta api</b><span className="font-italic" ></span></span>
                          </div>
                          <input type="text" className="form-control rounded-0 col-9 m-0" id="basic-url" aria-describedby="basic-addon3" name="nama_kereta" onChange={this.isChange} value={this.state.nama_kereta} />
                        </div>
                        <div className="input-group mb-2 row m-0">
                          <div className="input-group-prepend col-3 p-0">
                            <span className="input-group-text rounded-0 panel-lblue text-white border-0 w-100" id="basic-addon3 "><b className="uppercase pr-1" >kelas</b><span className="font-italic" > / class</span></span>
                          </div>
                          <select className="form-control rounded-0" name="kelas" onChange={this.isOption} >
                            {opt}
                          </select>
                        </div>
                        <div className="input-group mb-2 row m-0">
                          <div className="input-group-prepend col-3 p-0">
                            <span className="input-group-text rounded-0 panel-lblue text-white border-0 w-100" id="basic-addon3 "><b className="uppercase pr-1" >asal</b><span className="font-italic" > / origin</span></span>
                          </div>
                          <input type="text" className="form-control rounded-0 col-9 m-0" id="basic-url" aria-describedby="basic-addon3" name="asal" onChange={this.isChange} value={this.state.asal} />
                        </div>
                        <div className="input-group mb-2 row m-0">
                          <div className="input-group-prepend col-3 p-0">
                            <span className="input-group-text rounded-0 panel-lblue text-white border-0 w-100" id="basic-addon3 "><b className="uppercase pr-1" >tujuan</b><span className="font-italic" > / destination</span></span>
                          </div>
                          <input type="text" className="form-control rounded-0 col-9 m-0" id="basic-url" aria-describedby="basic-addon3" name="tujuan" onChange={this.isChange} value={this.state.tujuan} />
                        </div>
                        <div className="input-group mb-2 row m-0">
                          <div className="input-group-prepend col-3 p-0">
                            <span className="input-group-text rounded-0 panel-lblue text-white border-0 w-100" id="basic-addon3 "><b className="uppercase pr-1" >jadwal berangkat</b><span className="font-italic" ></span></span>
                          </div>
                          <input type="date" className="form-control rounded-0 col-12 m-0" id="basic-url" aria-describedby="basic-addon3" name="tanggal" onChange={this.isChange} value={this.state.tanggal} />
                        </div>
                      </div>
                    </div>
            )
        }
}

export default FormPergiComp;