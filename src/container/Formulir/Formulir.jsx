import React,{Component,Fragment} from 'react';
import './Formulir.css';
import axios from 'axios';
import DataPemesanaComp from '../../component/FormFormulir/DataPemesanan/DataPemesanaComp';
import DataPenumpangComp from '../../component/FormFormulir/DataPenumpang/DataPenumpangComp';
import DataPerjalananComp from '../../component/FormFormulir/DataPerjalanan/DataPerjalananComp';


class Formulir extends Component{

    constructor(props){
      super(props)
      this.state = { nama:"",alamat:"",telephone:"",penumpang1:"",penumpang2:"",penumpang3:"",penumpang4:"",pergi:"",pulang:"" }
      this.act1 = "edit";

    }


    //data penumpang

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


    // dataperjalanan
    PerjalananChange = (value) => {
      // this.setState({pergi:value});
      if(value.action === "pergi"){
        this.setState({pergi:value});
      }else if(value.action === "pulang"){
        this.setState({pulang:value});
      }
    }

    // save to db json
    postData = () => {
      axios.post("http://localhost:3004/form",this.state)
      .then((res)=>{
        this.props.history.push('/registered');
      },(err) =>{
        alert("terjadi kesalahan");
      });
    }

    // save to db json
    editData = () => {
          const url = "http://localhost:3004/form/"+this.props.match.params.id;
          axios.put(url,this.state)
          .then((res)=>{
            this.props.history.push('/registered');
          },(err) =>{
            console.log("eror");
          });
        }

    // form submit
    submitForm = (e) => {
      e.preventDefault();
      // this.postData();
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
        const url = "http://localhost:3004/form/" + this.props.match.params.id;
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
              <div className="header">
                <h3 className="title">Formulir Pemesanan Tiket kereta api</h3>
                <h4 className="t_desk italic" >ticket reservation form</h4>
              </div>
              {
                  this.props.match.params.id === undefined ?
                  // add
                  <Fragment><DataPemesanaComp  status="add"  handle={this.handleChange} /><DataPenumpangComp  handleChange={ (val)=> this.penumpangChange(val) }/><DataPerjalananComp handlePejalanan={(val)=> this.PerjalananChange(val) } /> </Fragment> :
                  // edit
                  <Fragment><DataPemesanaComp  status={this.act1}  handle={this.handleChange} data={this.state} /><DataPenumpangComp status={this.act1} handleChange={ (val)=> this.penumpangChange(val) } params={this.props.match.params.id} /><DataPerjalananComp params={this.props.match.params.id} status={this.act1} handlePejalanan={(val)=> this.PerjalananChange(val) } /> </Fragment>
              }
              <hr/>
              {/* <div className="alert alert-primary mt-2" role="alert">
                Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              </div> */}
              <hr/>
              <div className="pesan text-center mb-4 mt-4">
                {
                  this.props.match.params.id === undefined ?
                  // save
                  <button type="button submit" onClick={this.submitForm} className="btn btn-primary">Pesan Tiket</button>:
                  <Fragment><button type="button submit" onClick={this.editForm} className="btn btn-primary">Edit Tiket</button> <button type="button submit" onClick={this.cancle} className="btn btn-danger">Batal Edit</button></Fragment>
                }
              </div>
            </div>
          </form>
        )
    }
}

export default Formulir;