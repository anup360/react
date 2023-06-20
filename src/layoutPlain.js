
const PlainLayout = (formFields,handleDrop,handleDragOver,displayDropFields)=>{

   return <div className={formFields?.length > 0?"col-8":"col-10"}>
    <div
          className="form-preview"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{border:"5px solid #ffffff",backgroundColor:"#f1f1f1",height:'100%'}}
        >
          <h3 className="fw-bold mb-0 fs-4 text-muted">Form <button onClick={()=>{}} className="btn blue-primary preview-dt btn-sm">Preview</button></h3>
        
          {formFields.map((field,index) => (
            displayDropFields(field,index)
          ))}
        </div>
    </div>
}

export default PlainLayout;