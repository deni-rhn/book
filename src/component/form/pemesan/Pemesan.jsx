import React from 'react';

const Pemesan = (props) => {
    if(props.status === "edit"){
      return(
              <div className="_forms">
                <div className="title panel-blue">
                  <p><b className="uppercase" >data pemesanan</b> / <span className="italic" >data of person making the reservation</span></p>
                </div>
                <div className="group pt-3">
                  <div className="input-group mb-2 row m-0">
                    <div className="input-group-prepend col-2 pl-0 pr-0">
                      <span className="input-group-text rounded-0 panel-lblue text-white border-0 w-100" id="basic-addon3 "><b className="uppercase pr-1" >Nama</b><span className="font-italic" > / nama</span></span>
                    </div>
                    <input type="text" className="form-control rounded-0 col-10 m-0" id="basic-url" aria-describedby="basic-addon3" name="nama" onChange={props.handle} value={props.data.nama} />
                  </div>
                  <div className="input-group mb-2 row m-0">
                    <div className="input-group-prepend col-2 pl-0 pr-0">
                      <span className="input-group-text rounded-0 panel-lblue text-white border-0 w-100" id="basic-addon3 "><b className="uppercase pr-1" >Alamat</b><span className="font-italic" > / address</span></span>
                    </div>
                    <input type="text" className="form-control rounded-0 col-10 m-0" id="basic-url" aria-describedby="basic-addon3" name="alamat" onChange={props.handle} value={props.data.alamat} />
                  </div>
                  <div className="input-group mb-2 row m-0">
                    <div className="input-group-prepend col-2 pl-0 pr-0">
                      <span className="input-group-text rounded-0 panel-lblue text-white border-0 w-100" id="basic-addon3 "><b className="uppercase pr-1" >Telephon</b><span className="font-italic" > / telephone</span></span>
                    </div>
                    <input type="text" className="form-control rounded-0 col-10 m-0" id="basic-url" aria-describedby="basic-addon3" name="telephone" onChange={props.handle} value={props.data.telephone} />
                  </div>
                </div>
              </div>
      )
    }else{
    return (
              <div className="_forms">
                <div className="title panel-blue">
                  <p><b className="uppercase" >data pemesanan</b> / <span className="italic" >data of person making the reservation</span></p>
                </div>
                <div className="group pt-3">
                  <div className="input-group mb-2 row m-0">
                    <div className="input-group-prepend col-2 pl-0 pr-0">
                      <span className="input-group-text rounded-0 panel-lblue text-white border-0 w-100" id="basic-addon3 "><b className="uppercase pr-1" >Nama</b><span className="font-italic" > / nama</span></span>
                    </div>
                    <input type="text" className="form-control rounded-0 col-10 m-0" id="basic-url" aria-describedby="basic-addon3" name="nama" onChange={props.handle} />
                  </div>
                  <div className="input-group mb-2 row m-0">
                    <div className="input-group-prepend col-2 pl-0 pr-0">
                      <span className="input-group-text rounded-0 panel-lblue text-white border-0 w-100" id="basic-addon3 "><b className="uppercase pr-1" >Alamat</b><span className="font-italic" > / address</span></span>
                    </div>
                    <input type="text" className="form-control rounded-0 col-10 m-0" id="basic-url" aria-describedby="basic-addon3" name="alamat" onChange={props.handle} />
                  </div>
                  <div className="input-group mb-2 row m-0">
                    <div className="input-group-prepend col-2 pl-0 pr-0">
                      <span className="input-group-text rounded-0 panel-lblue text-white border-0 w-100" id="basic-addon3 "><b className="uppercase pr-1" >Telephon</b><span className="font-italic" > / telephone</span></span>
                    </div>
                    <input type="text" className="form-control rounded-0 col-10 m-0" id="basic-url" aria-describedby="basic-addon3" name="telephone" onChange={props.handle} />
                  </div>
                </div>
              </div>
    )
  }
}

export default Pemesan;