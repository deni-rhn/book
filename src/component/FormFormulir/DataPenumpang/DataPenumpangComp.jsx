import React,{Fragment} from 'react';
import FormPenumpang1Comp from './child/FormPenumpang1Comp';
import FormPenumpang2Comp from './child/FormPenumpang2Comp';
import FormPenumpang3Comp from './child/FormPenumpang3Comp';
import FormPenumpang4Comp from './child/FormPenumpang4Comp';

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

class DataPenumpangComp extends React.Component {

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
                    <Fragment><FormPenumpang1Comp id={this.props.params} isHandle={(e)=>this.handlePenumpang(e)} /><FormPenumpang2Comp id={this.props.params} isHandle={(e)=>this.handlePenumpang(e)} /></Fragment> :
                    <Fragment><FormPenumpang1Comp isHandle={(e)=>this.handlePenumpang(e)} /><FormPenumpang2Comp isHandle={(e)=>this.handlePenumpang(e)} /></Fragment>
                  }
                </div>
                <div className="col-4 pl-0">
                  {
                    this.props.status === "edit" ?
                    <Fragment><FormPenumpang3Comp id={this.props.params} isHandle={(e)=>this.handlePenumpang(e)} /><FormPenumpang4Comp id={this.props.params} isHandle={(e)=>this.handlePenumpang(e)} /></Fragment> :
                    <Fragment><FormPenumpang3Comp isHandle={(e)=>this.handlePenumpang(e)} /><FormPenumpang4Comp isHandle={(e)=>this.handlePenumpang(e)} /></Fragment>
                  }
                </div>
              </div>
              <hr/>
              <Info />
            </div>
    )
  }
}

export default DataPenumpangComp;