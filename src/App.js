import { Tooltip } from "@progress/kendo-react-tooltip";
import React, { useEffect, useState } from "react";
import TextEditor from "./TextEditor";
import DisplayDropFields from "./DisplayDropFields";
import addFormData from "./returnMergedData";
import fields from "./fields";
import Table from "./layoutTable";

const AddDocumentTemplateByDnD = () => {
  const [rows, setRows] = useState([]);
  const [formFields, setFormFields] = useState([]);
  const [fieldId,setFieldId] = useState(null);
  const [selectedField, setSelectedField] = useState(null);
  const [inputMaster,setInputMaster] = useState("");
  const [fieldSetting,setFieldSetting] = useState(null);
  const [properties,setProperties] = useState({
    htmlAttributePropertyName:"",
    displayLabel:"",
    htmlControlType:"",
    divideInColumns:"",
    minCharacters:"",
    maxCharacters:"",
    sequenceNumber:"",
    isRequired:false,
    isHeader:false,
    textOrPlaceholder:"",
    textHtml:"",
    htmlControlHasMasterData:false,
    htmlControlMasterData:null,
    hint:""
  });

  const handleAddRow = () => {
    
    const newRow = [];
    setRows([...rows, newRow]);
  };

  const handleRemoveRow = (index) => {
    const updatedRow = rows.filter((i,inx)=>inx!==index);
     setRows(updatedRow);
  };

  const handleRemoveCol = (rowIndex,colIndex) => {
    const updatedRow = rows[rowIndex].filter((col,indx)=>indx!==colIndex);
    rows[rowIndex] = updatedRow;
    setRows([...rows]);
  };

  const handleDeleteField = (id,rowIndex,colIndex) => {
    const updatedFields = formFields.filter((field) => field.id !== id);
    setFormFields(()=>updatedFields.map((item,index)=>{
      item.properties.htmlAttributePropertyName = `${item.type}${index}`;
      return item
    }));
    if(rows && rows[rowIndex][colIndex]){
      rows[rowIndex][colIndex] = rows[rowIndex][colIndex].filter(item => item.id !== id); 
      setRows(rows);
    } 
    
  };

  const handleFieldSetting = (id) =>{
    
    let prop = formFields.filter(fld => fld.id === id);

    const fieldsProp = {
      htmlAttributePropertyName:"",
      displayLabel:"",
      htmlControlType:"",
      divideInColumns:1,
      minCharacters:"",
      maxCharacters:"",
      sequenceNumber:"",
      isRequired:false,
      isHeader:false,
      textOrPlaceholder:"",
      textHtml:"",
      htmlControlHasMasterData:false,
      htmlControlMasterData:null,
      hint:""
    };
    const fieldsPropKeys = Object.keys(prop[0]?.properties);
    setFieldSetting({id:prop[0]?.id,values:fieldsPropKeys});
    
    fieldsPropKeys.map(item=>{
      if(prop[0]?.properties[item]){
        fieldsProp[item] = prop[0]?.properties[item]?prop[0]?.properties[item]:fieldsProp[item];
      }

      setProperties(fieldsProp);

      return fieldsProp;
    })    
      
  }

  const handleAddColumn = (rowIndex) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex] = [...updatedRows[rowIndex], ""];
    setRows(updatedRows);
  }; 
  const delSelectedItem = (type,id,keyValue)=>{
  
    let updateFields = formFields.map((fld,index) => {
     
      if(fld.id === parseInt(id)){
      
        let items = fld.properties[type] ? fld.properties[type].filter(item=>item.keyValue !== keyValue) : []; 
        fld.properties[type] = items;
        
      }
      
      setInputMaster("");
      return fld;
  });
    
  setFormFields(updateFields);
  }
  const showAddedMasterItems = (type,id)=>{
    let items = null;
  formFields.map((fld) => {
      if(fld.id === parseInt(id)){
        items = fld.properties[type] && fld.properties[type].map(item=>((<li className="list-group-item d-flex justify-content-between align-items-center" key={item.keyIndex}>{item.keyValue} <button onClick={()=>{ delSelectedItem(type,id,item.keyValue) }} className="badge badge-danger badge-pill"><i className="fas fa-close" title="delete option"></i></button></li>)))
  }
  
    return items && <ul className="list-group">{items}</ul>;
  });
  return items
  }

  const addMasterItems = (type,id)=>{

    let updateFields = formFields.map((fld,index) => {
     
      if(fld.id === parseInt(id)){
        
        let items = fld.properties[type] ? fld.properties[type].map(item=>item?.keyValue) : []; 
        items.push(inputMaster);  
        fld.properties[type] = items.map((item,index)=>({keyIndex:index,keyValue:item}));
        
      }
      
      setInputMaster("");
      
      return fld;
  });
    
  setFormFields(updateFields);
  }
  
  const showFieldsInput = (type,id)=>{

    if(type === "displayLabel"){

      return (<div style={{display:'flex',flexDirection:'column', margin:10}}>
        <label>Display Label</label>
        <input type='text' customid={id} customtype={type} onChange={handleFieldsValue} value={properties[type]} placeholder='Enter label' min={2} max={50}  />
      </div>)
    }

    if(type === "divideInColumns"){
      return (<div style={{display:'flex',flexDirection:'column', margin:10}}>
        <label>Columns</label>
        <input type='number' customid={id} customtype={type} onChange={handleFieldsValue} value={properties[type]} placeholder='Enter column' min={1} max={4} />
      </div>)
    }

    if(type === "minCharacters"){
      return (<div style={{display:'flex',flexDirection:'column', margin:10}}>
        <label>Minimum Characters</label>
        <input type='number' customid={id} customtype={type} onChange={handleFieldsValue} value={properties[type]} placeholder='Enter min characters' min={1} max={4} />
      </div>)
    }

    if(type === "isRequired"){
      return (<div style={{display:'flex',flexDirection:'row', margin:10}}>
        <input type='checkbox' customid={id} customtype={type} onChange={handleFieldsValue} checked={properties[type]} /> <label>isRequired</label>
        
      </div>)
    }

    if(type === "hint"){
      return (<div style={{display:'flex',flexDirection:'column', margin:10}}>
        <label>Hint</label>
        <input type='text' customid={id} customtype={type} onChange={handleFieldsValue} value={properties[type]} placeholder='Enter hint' required />
        
      </div>)
    }

    if(type === "textOrPlaceholder"){
      return (<div style={{display:'flex',flexDirection:'column', margin:10}}>
        <label>Text or Placeholder</label>
        <input type='text' customid={id} customtype={type} onChange={handleFieldsValue} value={properties[type]} placeholder='Enter text or placeholder' required />
        
      </div>)
    }

    if(type === "htmlControlMasterData"){
      return (<div style={{display:'flex',flexDirection:'column', margin:10}}>
        <label>Items</label>
        <input type='text' placeholder='Add Item'  id="masterItem" value={inputMaster} onChange={(e)=>setInputMaster(e.target.value)} />
        
          { showAddedMasterItems(type,id) }
        
        <button onClick={()=>addMasterItems(type,id)}>Add item</button>
      </div>)
    }

    if(type === "textHtml"){
        
        return (<div style={{display:'flex',flexDirection:'column', margin:10}}>
        <label>TextEditor</label>
        <TextEditor customid={id} customtype={type} onChange={handleFieldsValue} defaultContent={properties[type]} />
        
      </div>)
     }

     return null;
}

const handleFieldsValue = (e)=>{

  const type = e.target?.props?.customtype ?? e.target.getAttribute('customtype');
  const id = e.target?.props?.customid ?? e.target.getAttribute('customid');

  
  let updateFields = formFields.map((fld,index) => {
    
    
    if(fld.id === parseInt(id)){
          
      fld.properties[type] = type==="isRequired" ? e.target.checked : (e?.html ?? e.target?.value);  
      setProperties(fld.properties);

    }
    
    return fld;
});

setFormFields(updateFields);

}

  const handleDrop = (e) => {
    e.preventDefault();

    const rowindex = e.currentTarget.getAttribute("data-rowindex");
    const colindex = e.currentTarget.getAttribute("data-colindex");

    const fieldType = e.dataTransfer.getData('text');
    let prop = fields.filter(fld => fld.type === fieldType);
    
    const newField = { type: fieldType, id: Date.now(), properties:prop[0]?.properties};
    
    newField.properties.htmlAttributePropertyName = `${fieldType}${formFields.length}`;

    console.log("newField.properties.htmlAttributePropertyName",newField.properties.htmlAttributePropertyName)
    console.log("------", ...rows[rowindex][colindex]);
    
    rows[rowindex][colindex] = [...rows[rowindex][colindex],newField];
    
    setRows([...rows]);
    const formField = addFormData(rows)?.flat()?.flat()?.filter(item=>item !== null);
    
    setFormFields(formField);
    setFieldId(newField.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragStart = (e, field) => {
    e.dataTransfer.setData('text/plain', field.type);
    setSelectedField(field);
  };

  useEffect(()=>{
    if(fieldId){
      handleFieldSetting(fieldId);
    }
    
  },[fieldId]);

  return (
    
    <div className="row">
        
      <div className="col-2">
    <div className="fields-panel" style={{border:"5px solid #ffffff",backgroundColor:"#f1f1f1"}}>
          <h3 className="fw-bold mb-0 fs-4 text-muted">Fields</h3>
          {fields.map((field) => (
            <div
              key={field.type}
              className="field btn blue-primary preview-dt btn-sm w-100 my-1"
              draggable
              onDragStart={(e) => handleDragStart(e, field)}
            >
              {field.label}
            </div>
          ))}
        </div>
    </div>
    
    <Table rows={rows}
    handleRemoveCol={handleRemoveCol}
    handleAddRow={handleAddRow}
    handleDrop={handleDrop}
    handleDragOver={handleDragOver}
    DisplayDropFields={DisplayDropFields}
    handleAddColumn={handleAddColumn}
    handleRemoveRow={handleRemoveRow}
    handleFieldSetting={handleFieldSetting}
    handleDeleteField={handleDeleteField} />
    <div className={formFields?.length > 0?"col-2":"col d-none"}>
    <div className="form-config" style={{border:"5px solid #ffffff",backgroundColor:"#f1f1f1"}}>
        <h3 className="fw-bold mb-0 fs-4 text-muted">Fields Setting</h3>
        { (formFields?.length && fieldSetting?.values?.length) && fieldSetting?.values.map((fs,index)=>(
          <div key={index}>
            {showFieldsInput(fs,fieldSetting?.id)}
          </div>
        ))}
        </div>
    </div>

    </div>
  );
};

export default AddDocumentTemplateByDnD;
