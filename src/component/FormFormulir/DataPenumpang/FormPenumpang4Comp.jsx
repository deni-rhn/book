import React,{Component} from 'react';
import axios from 'axios';

class FormPenumpang4Comp extends Component {

    constructor(props){
        super(props);
        this.state = {
                        nama_p:'',
                        id:'',
                        type:'dewasa',
                        no_p:4
                    }
        this.option = ['dewasa','bayi'];
    }

    isChange = (e) => {
        const name  = e.target.name;
        const value = e.target.value;
        this.setState({ [name] : value },()=>{
          this.props.isHandle(this.state);
        });
    }

    isOption = (e) => {
        this.state.type = e.target.value;
        this.props.isHandle(this.state);
      }

    getData = () => {
      if(this.props.id !== undefined){
        const url = "http://localhost:3004/form/" + this.props.id;
        axios.get(url).then((res)=>{
          if(res.data.penumpang4 !== ""){
            this.setState({...res.data.penumpang4});
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
                    <div className="col-12 panel-lblue"><b className="uppercase pr-1" >penumpang 4</b>/<span className="font-italic" > passenger 4</span></div>
                  </div>
                  <div className="tbl-1">
                    <div className="input-group mb-2 row m-0">
                      <input type="text" className="form-control rounded-0 m-0" id="basic-url" aria-describedby="basic-addon3" name="nama_p" onChange={this.isChange} value={this.state.nama_p} />
                    </div>
                    <div className="input-group mb-2 row m-0">
                      <input type="text" className="form-control rounded-0 m-0" id="basic-url" aria-describedby="basic-addon3" name="id" onChange={this.isChange} value={this.state.id} />
                    </div>
                    <div className="input-group mb-2 row m-0">
                    <select className="form-control rounded-0" name="type"  onChange={this.isOption}>
                        {opt}
                      </select>
                    </div>
                  </div>
                </div>
              )
      }
}

export default FormPenumpang4Comp;