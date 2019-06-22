import React,{Component} from 'react';
import axios from 'axios';
import Api from '../../../../env/env';

class FormPenumpang1Comp extends Component {

    constructor(props){
      super(props);
      this.state = {
                      nama_p:'',
                      id:'',
                      type:'dewasa',
                      no_p:1
                    }
      this.option = ['dewasa','bayi']
    }

    isChange = (e) => {
      const name  = e.target.name;
      const value = e.target.value;
      this.setState({[name]:value},()=>{
        this.props.isHandle(this.state);
      });
    }

    isOption = (e) => {
      this.state.type = e.target.value;
      this.props.isHandle(this.state);
    }

    getData = () => {
      if(this.props.id !== undefined){
        const url = Api+this.props.id;
        axios.get(url).then((res)=>{
          if(res.data.penumpang1 !== ""){
            this.setState({...res.data.penumpang1});
          }
        },
        (err)=>{
          console.log("err");
        });
      }
    }

    componentDidMount(){
      this.getData();
    }

    render(){
      var opt = this.option.map((item) => {
        return <option key={item} value={item} > {item} </option>
      });
      return(
              <div className="penumpang">
                <div className="d-flex mb-2">
                  <div className="col-3 panel-blue"></div>
                  <div className="col-9 panel-lblue"><b className="uppercase pr-1" >penumpang 1</b>/<span className="font-italic" > passenger 1</span></div>
                </div>
                <div className="tbl-1">
                  <div className="input-group mb-2 row m-0">
                    <div className="input-group-prepend col-3 p-0">
                      <span className="input-group-text rounded-0 panel-lblue text-white border-0 w-100" id="basic-addon3 "><b className="uppercase pr-1" >Nama</b><span className="font-italic" > / name</span></span>
                    </div>
                    <input type="text" className="form-control rounded-0 col-9 m-0" id="basic-url" aria-describedby="basic-addon3" name="nama_p" onChange={this.isChange} value={this.state.nama_p} />
                  </div>
                  <div className="input-group mb-2 row m-0">
                    <div className="input-group-prepend col-3 p-0">
                      <span className="input-group-text rounded-0 panel-lblue text-white border-0 w-100" id="basic-addon3 "><b className="uppercase pr-1" >No identitas</b><span className="font-italic" > / id</span></span>
                    </div>
                    <input type="text" className="form-control rounded-0 col-9 m-0" id="basic-url" aria-describedby="basic-addon3" name="id" onChange={this.isChange} value={this.state.id}/>
                  </div>
                  <div className="input-group mb-2 row m-0">
                    <div className="input-group-prepend col-3 p-0">
                      <span className="input-group-text rounded-0 panel-lblue text-white border-0 w-100" id="basic-addon3 "><b className="uppercase pr-1" >tipe pnp</b><span className="font-italic" > / type</span></span>
                    </div>
                    <select className="form-control rounded-0" name="type"  onChange={this.isOption} value={this.state.type}>
                      {opt}
                    </select>
                  </div>
                </div>
              </div>
      )
    }
}

export default FormPenumpang1Comp;