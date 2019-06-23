import React,{Component,Fragment} from 'react';
import Pergi from './child/Pergi';
import Pulang from './child/Pulang';


const Info = () => {
  return (
    <div className="info mt-3">
      <div className="row">
        <div className="col">
          <h6>Informasi Waktu Berangkat/Pulang</h6>
          <p>Contain of information</p>
        </div>
        <div className="col">
        <h6>Informasi Waktu Berangkat/Pulang</h6>
          <p>Contain of information</p>
        </div>
      </div>
    </div>
  )
}


class Perjalanan extends Component {

    constructor(props){
      super(props)
    }


    isPerjalanan = (e) => {
      this.props.handlePejalanan(e);
    }

    render(){
      return (
        <div className="_forms">
          <div className="title panel-blue mb-3">
            <p><b className="uppercase" >data perjalanan</b> / <span className="font-italic" >booking details</span></p>
          </div>
          <div className="row">
            <div className="col-8">
              {
                this.props.status === "edit" ?
                // edit
                <Fragment><Pergi id={this.props.params} data={(val) => this.isPerjalanan(val) } option={(e) => this.isOption(e) } /></Fragment> :
                // add
                <Fragment><Pergi  data={(val) => this.isPerjalanan(val) } option={(e) => this.isOption(e) } /></Fragment>
              }
            </div>
            <div className="col-4 pl-0">
            {
                this.props.status === "edit" ?
                // edit
                <Fragment><Pulang id={this.props.params} data={(val) => this.isPerjalanan(val) } option={(e) => this.isOption(e) } /></Fragment> :
                // add
                <Fragment><Pulang data={(val) => this.isPerjalanan(val) } option={(e) => this.isOption(e) } /></Fragment>
              }
            </div>
          </div>
          <hr/>
          <Info/>
        </div>
      )
    }
}

export default Perjalanan;