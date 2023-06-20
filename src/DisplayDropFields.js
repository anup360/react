
import { Tooltip } from "@progress/kendo-react-all";
import React from "react";
import RawHTML from "./RawHtml";
import TextEditor from "./TextEditor";

const DisplayDropFields = (field,index,handleFieldSetting,handleDeleteField,rowIndex=null,colIndex=null)=>{
  if(!!field === false){
    return null;
  }

    return (<div key={field.id}>
      
              <div key={field.id} className="form-field position-relative my-2">
                {displayValues(field)}
                <div className="position-absolute top-0 end-0">
                
                <button className="p-0 mx-1 btn btn-outline-danger" onClick={() => handleDeleteField(field.id,rowIndex,colIndex)}>
                <span className="k-icon k-i-delete"></span>
                  {/* <i className="fas fa-close" title="delete field"></i> */}
                </button>
                
                <button className="p-0 mx-1 btn btn-outline-primary" onClick={
                () => handleFieldSetting
                (field.id,rowIndex=null,colIndex=null)}><span
                className="k-icon k-i-edit"></span>{/* <i className="fas
                fa-edit" title="edit field"></i> */} </button> </div> </div>
  
            </div>)
  }
  
  const displayValues = (field) =>{
    
    if(field.type === "textBox"){
        return (
          <div className="form-group">
            <label>
            {field.properties['hint']?
            <Tooltip anchorElement="target" position="top">
              { field.properties['displayLabel']?field.properties['displayLabel']:field.type } 
              
              <i className="fa fa-info-circle text-primary mx-1" aria-hidden="true" title={field.properties['hint']}>i</i>
  
            </Tooltip>:field.properties['displayLabel']?field.properties['displayLabel']:field.type}
            </label>
            
            <input type="text" className="form-control" id={"exampleFormControlInput_"+field.id} placeholder={field.properties['textOrPlaceholder']?field.properties['textOrPlaceholder']:'Enter text'} />
          </div> 
        )
    }
    if(field.type === "paragraph"){
      
      return (
        <div style={{
          display: "flex",
          flexDirection: "column",flexGrow: 8}}>
          <label>
            {field.properties['hint']?
            <Tooltip anchorElement="target" position="top">
              <i className="fa fa-info-circle text-primary mx-1" aria-hidden="true" title={field.properties['hint']}>i</i>
              { field.properties['textHtml']?<RawHTML children={field.properties['textHtml']} />:field.type } 
              
            </Tooltip>:field.properties['textHtml']?<RawHTML children={field.properties['textHtml']} />:field.type}
          </label>
          
        </div>
      )
    }
  
    if(field.type === "radio"){
  
      const htmlControlMasterData = field.properties['htmlControlMasterData'];
        
      return (
        <div style={{
          display: "flex",
          flexDirection: "column",flexGrow: 8}}>
          <label>
            {field.properties['hint']?
            <Tooltip anchorElement="target" position="top">
              { field.properties['displayLabel']?field.properties['displayLabel']:field.type } 
              <i className="fa fa-info-circle text-primary mx-1" aria-hidden="true" title={field.properties['hint']}>i</i>
            </Tooltip>:field.properties['displayLabel']?field.properties['displayLabel']:field.type}
          </label>
  
            {htmlControlMasterData?.length ? htmlControlMasterData.map(item=>(<>{<label key={item.keyIndex}><input type="radio" value={item.keyValue} /> { item.keyValue }</label>}</>)):<><label><input type="radio" value="Option 1"/> Option 1</label><label><input type="radio" value="Option 2"/> Option 2</label></>}
        </div>
      )
    }
    
    if(field.type === "checkbox"){
  
      const htmlControlMasterData = field.properties['htmlControlMasterData'];
      return (
        <div style={{
          display: "flex",
          flexDirection: "column",flexGrow: 8}}>
          <label>
            {field.properties['hint']?
            <Tooltip anchorElement="target" position="top">
              { field.properties['displayLabel']?field.properties['displayLabel']:field.type } 
              <i className="fa fa-info-circle text-primary mx-1" aria-hidden="true" title={field.properties['hint']}>i</i>
            </Tooltip>:field.properties['displayLabel']?field.properties['displayLabel']:field.type}
          </label>
            {htmlControlMasterData?.length ?htmlControlMasterData.map(item=>(<>{<label><input type="checkbox" value={item.keyValue} /> { item.keyValue }</label>}</>)):<><label><input type="checkbox" value="Option 1"/> Option 1</label><label><input type="checkbox" value="Option 2"/> Option 2</label></>}
        </div>
      )
    }
  
    if(field.type === "dropDown"){
  
      const htmlControlMasterData = field.properties['htmlControlMasterData'];
      return (
        <div style={{
          display: "flex",
          flexDirection: "column",flexGrow: 8}}>
          <label>
            {field.properties['hint']?
            <Tooltip anchorElement="target" position="top">
              { field.properties['displayLabel']?field.properties['displayLabel']:field.type } 
              <i className="fa fa-info-circle text-primary mx-1" aria-hidden="true" title={field.properties['hint']}>i</i>
            </Tooltip>:field.properties['displayLabel']?field.properties['displayLabel']:field.type}
          </label>
            <select className="form-control form-control-sm">
            <option>---Select---</option>
            {htmlControlMasterData?.length ?htmlControlMasterData.map(item=>(<option>{ item.keyValue }</option>)):<><option>Option 1</option><option>Option 2</option></>}
            </select>
        </div>
      )
    }
  
    if(field.type === "signLine"){
      return <div className="row"><div className="border-bottom-line my-3"></div></div>
    }
  
    if(field.type === "textEditor"){
      
      return (
        <div style={{
          display: "flex",
          flexDirection: "column",flexGrow: 8}}>
          <label>
            {field.properties['hint']?
            <Tooltip anchorElement="target" position="top">
              { field.properties['displayLabel']?field.properties['displayLabel']:field.type } 
              <i className="fa fa-info-circle text-primary mx-1" aria-hidden="true" title={field.properties['hint']}>i</i>
            </Tooltip>:field.properties['displayLabel']?field.properties['displayLabel']:field.type}
          </label>
          
         <TextEditor />
          
        </div>
      )
    }
  
    if(field.type === "datePicker"){
  
      return (
        <div style={{
          display: "flex",
          flexDirection: "column",flexGrow: 8}}>
          <label>
            {field.properties['hint']?
            <Tooltip anchorElement="target" position="top">
              { field.properties['displayLabel']?field.properties['displayLabel']:field.type } 
              <i className="fa fa-info-circle text-primary mx-1" aria-hidden="true" title={field.properties['hint']}>i</i>
            </Tooltip>:field.properties['displayLabel']?field.properties['displayLabel']:field.type}
          </label>
          <input type="date" name="datePicker" className="form-control" />
        </div>
      )
    }
  
    if(field.type === "timePicker"){
  
      return (
        <div style={{
          display: "flex",
          flexDirection: "column",flexGrow: 8}}>
          <label>
            {field.properties['hint']?
            <Tooltip anchorElement="target" position="top">
              { field.properties['displayLabel']?field.properties['displayLabel']:field.type } 
              <i className="fa fa-info-circle text-primary mx-1" aria-hidden="true" title={field.properties['hint']}>i</i>
            </Tooltip>:field.properties['displayLabel']?field.properties['displayLabel']:field.type}
          </label>
          <input type="time" name="timePicker" className="form-control" />
        </div>
      )
    }
  
    if(field.type === "heading"){
  
      return (
        <div style={{
          display: "flex",
          flexDirection: "column",flexGrow: 8}}>
          <label>
            {field.properties['hint']?
            <Tooltip anchorElement="target" position="top">
              { field.properties['textHtml']?field.properties['textHtml']:field.type } 
              <i className="fa fa-info-circle text-primary mx-1" aria-hidden="true" title={field.properties['hint']}>i</i>
            </Tooltip>:field.properties['textHtml']?field.properties['textHtml']:field.type}
          </label>
          
        </div>
      )
    }
  
    if(field.type === "textArea"){
  
      return (
        <div style={{
          display: "flex",
          flexDirection: "column",flexGrow: 8}}>
          <label>
            {field.properties['hint']?
            <Tooltip anchorElement="target" position="top">
              { field.properties['displayLabel']?field.properties['displayLabel']:field.type } 
              <i className="fa fa-info-circle text-primary mx-1" aria-hidden="true" title={field.properties['hint']}>i</i>
            </Tooltip>:field.properties['displayLabel']?field.properties['displayLabel']:field.type}
          </label>
          { field.properties['textHtml']?<RawHTML children={field.properties['textHtml']} />:'' }
          <textarea className='form-control' />
        </div>
      )
    }
  
    return null
    
  }

  export default DisplayDropFields;