import React,{Component,Fragment} from 'react';
import FormPergiComp from '../DataPerjalanan/FormPergiComp';
import FormPulangComp from './FormPulangComp';


const Info = () => {
  return (
    <div className="info mt-3">
      <div className="row">
        <div className="col">
          <h6>Tipe penumpang</h6>
          <p>Lorem Ipsum is simply dummy <br/> text of the printing and typesetting industry. <br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
        </div>
        <div className="col">
          <h6>Where can I get some?</h6>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <h6>enter your name?</h6>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </div>
  )
}


class DataPerjalananComp extends Component {

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
                <Fragment><FormPergiComp id={this.props.params} data={(val) => this.isPerjalanan(val) } option={(e) => this.isOption(e) } /></Fragment> :
                // add
                <Fragment><FormPergiComp  data={(val) => this.isPerjalanan(val) } option={(e) => this.isOption(e) } /></Fragment>
              }
            </div>
            <div className="col-4 pl-0">
            {
                this.props.status === "edit" ?
                // edit
                <Fragment><FormPulangComp id={this.props.params} data={(val) => this.isPerjalanan(val) } option={(e) => this.isOption(e) } /></Fragment> :
                // add
                <Fragment><FormPulangComp data={(val) => this.isPerjalanan(val) } option={(e) => this.isOption(e) } /></Fragment>
              }
            </div>
          </div>
          <hr/>
          <Info/>
        </div>
      )
    }
}

export default DataPerjalananComp;