import React,{Fragment} from 'react';
import Penumpang1 from './child/Penumpang1';
import Penumpang2 from './child/Penumpang2';
import Penumpang3 from './child/Penumpang3';
import Penumpang4 from './child/Penumpang4';

const Info = () => {
  return (
          <div className="info mt-3">
            <div className="row">
              <div className="col">
                <h6>Tipe penumpang</h6>
                <p>Informasi disini</p>
              </div>
              <div className="col">
              <h6>Tipe penumpang</h6>
                <p>Informasi disini</p>
              </div>
            </div>
          </div>
  )
}

class Penumpang extends React.Component {

  handlePenumpang = (e) => {
    this.props.handleChange(e);
  }


  render(){
    return (
            <div className="_forms">
              <div className="title panel-blue mb-3">
                <p><b className="uppercase" >data penumpang</b> / <span className="font-italic" >passenger details</span></p>
              </div>
              <div className="row">
                <div className="col-8">
                  {
                    this.props.status === "edit" ?
                    <Fragment><Penumpang1 id={this.props.params} isHandle={(e)=>this.handlePenumpang(e)} /><Penumpang2 id={this.props.params} isHandle={(e)=>this.handlePenumpang(e)} /></Fragment> :
                    <Fragment><Penumpang1 isHandle={(e)=>this.handlePenumpang(e)} /><Penumpang2 isHandle={(e)=>this.handlePenumpang(e)} /></Fragment>
                  }
                </div>
                <div className="col-4 pl-0">
                  {
                    this.props.status === "edit" ?
                    <Fragment><Penumpang3 id={this.props.params} isHandle={(e)=>this.handlePenumpang(e)} /><Penumpang4 id={this.props.params} isHandle={(e)=>this.handlePenumpang(e)} /></Fragment> :
                    <Fragment><Penumpang3 isHandle={(e)=>this.handlePenumpang(e)} /><Penumpang4 isHandle={(e)=>this.handlePenumpang(e)} /></Fragment>
                  }
                </div>
              </div>
              <hr/>
              <Info />
            </div>
    )
  }
}

export default Penumpang;