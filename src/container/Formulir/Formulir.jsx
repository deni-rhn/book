import React,{Component,Fragment} from 'react';
import axios from 'axios';
import Pemesan from '../../component/form/pemesan/Pemesan';
import Penumpang from '../../component/form/penumpang/Penumpang';
import Perjalanan from '../../component/form/perjalanan/Perjalanan';
import Header from '../../component/header/Header';
import Api from '../../env/env';


class Formulir extends Component{

    constructor(props){
      super(props)
      this.state = { nama:"",alamat:"",telephone:"",penumpang1:"",penumpang2:"",penumpang3:"",penumpang4:"",pergi:"",pulang:"" }
      this.act1 = "edit";

    }

    handleChange = (e) => {
      const name  = e.target.name;
      const value = e.target.value;

      this.setState({
        [name] : value
      });

    }

    penumpangChange = (value) => {

      if(value.no_p === 1){
        this.setState({ penumpang1: value });
      }else if(value.no_p === 2){
        this.setState({ penumpang2: value });
      }else if(value.no_p === 3){
        this.setState({ penumpang3: value });
      }else if(value.no_p === 4){
        this.setState({ penumpang4: value });
      }
    }


    PerjalananChange = (value) => {
      if(value.action === "pergi"){
        this.setState({pergi:value});
      }else if(value.action === "pulang"){
        this.setState({pulang:value});
      }
    }

    postData = () => {
      axios.post(Api,this.state)
      .then((res)=>{
        this.props.history.push('/registered');
      },(err) =>{
        alert("terjadi kesalahan");
      });
    }

    editData = () => {
          const url = Api+this.props.match.params.id;
          axios.put(url,this.state)
          .then((res)=>{
            this.props.history.push('/registered');
          },(err) =>{
            console.log("eror");
          });
        }

    submitForm = (e) => {
      e.preventDefault();
      if(this.state.nama !== "" && this.state.alamat !== "" && this.state.telephone !== "") {
        if(this.state.penumpang1 !== "" && this.state.pergi !== "" ){
          if(this.state.penumpang1.nama_p !== "" && this.state.penumpang1.id !== "" && this.state.penumpang1.type !== ""  && this.state.pergi.nama_kereta !== "" && this.state.pergi.kelas !== "" && this.state.pergi.asal !== "" && this.state.pergi.tanggal !== "" && this.state.pergi.tujuan !== "" ){
            this.postData();
          }else{
            alert("from penumpang 1 data Pergi kurang lengkap mohon diisi dengan lengkap ");
          }
        }else{
         alert("data penumpang 1 & data pergi kurang lengkap");
        }
      }else{
        alert("Data pemesanan kurang valid");
      }

    }

    editForm = (e) => {
      e.preventDefault();
      this.editData();
    }

    getData = () => {
      if(this.props.match.params.id !== undefined){
        const url = Api + this.props.match.params.id;
        axios.get(url).then((res)=>{
          this.setState({...res.data});
        },
        (err)=>{
          console.log("err");
        });
      }

    }

    cancle = (e) => {
      this.props.history.push('/registered');
    }

    componentDidMount(){
      this.getData();
    }



    render(){
        return(
          <form >
            <div className="formulir" >
              <Header />
              {
                  this.props.match.params.id === undefined ?
                  <Fragment><Pemesan  status="add"  handle={this.handleChange} /><Penumpang  handleChange={ (val)=> this.penumpangChange(val) }/><Perjalanan handlePejalanan={(val)=> this.PerjalananChange(val) } /> </Fragment> :
                  <Fragment><Pemesan  status={this.act1}  handle={this.handleChange} data={this.state} /><Penumpang status={this.act1} handleChange={ (val)=> this.penumpangChange(val) } params={this.props.match.params.id} /><Perjalanan params={this.props.match.params.id} status={this.act1} handlePejalanan={(val)=> this.PerjalananChange(val) } /> </Fragment>
              }
              <hr/>
              <hr/>
              <div className="pesan text-center mb-4 mt-4">
                {
                  this.props.match.params.id === undefined ?
                  <button type="button submit" onClick={this.submitForm} className="btn btn-primary btn-lg w-40">Pesan Tiket</button>:
                  <Fragment><button type="button submit" onClick={this.editForm} className="btn btn-primary btn-lg w-40">Edit Tiket</button> <button type="button submit" onClick={this.cancle} className="btn btn-danger">Batal Edit</button></Fragment>
                }
              </div>
            </div>
          </form>
        )
    }
}

export default Formulir;