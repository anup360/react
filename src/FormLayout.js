import Table from "./layoutTable";

const Frame = (fields,handleDragStart,formFields,fieldSetting,showFieldsInput)=>{

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
)
}

export default Frame;