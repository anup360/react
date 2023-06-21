import Preview from "./Preview";

const PlainLayout = ({template,formFields,handleDrop,handleDragOver,displayDropFields,handleFieldSetting,handleDeleteField,showModal,setShowModal})=>{

   return <div className={formFields?.length > 0?"col-8":"col-10"}>
    <div
          className="form-preview"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{border:"5px solid #ffffff",backgroundColor:"#f1f1f1",height:'100%'}}
        >
          <h3 className="fw-bold mb-0 fs-4 text-muted">{template.templateName} <button onClick={()=>{setShowModal(true)}} className="btn blue-primary preview-dt btn-sm">Preview</button></h3>
        
          {formFields.map((field,index) => (
            displayDropFields(field,index,handleFieldSetting,handleDeleteField)
          ))}
        </div>
        <Preview showModal={showModal} setShowModal={setShowModal} formFields={formFields} displayDropFields={displayDropFields} type={'simple'} />
    </div>
}

export default PlainLayout;