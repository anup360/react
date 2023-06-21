import Preview from "./Preview";

const Table = ({
    template,
    rows,
    handleRemoveCol,
    handleAddRow,
    handleDrop,
    handleDragOver,
    DisplayDropFields,
    handleAddColumn,
    handleRemoveRow,
    handleFieldSetting,
    handleDeleteField,
    showModal,
    setShowModal,
    formFields
})=>{

    return <div className="col-8">
    <h3>{template.templateName}</h3>     
    <button onClick={handleAddRow}>Add Row</button>
    <button onClick={()=>{setShowModal(true)}} className="btn blue-primary preview-dt btn-sm">Preview</button>
    <table width="100%">
      <tbody>
        {!!rows?.length && rows?.map((row, rowIndex) => (
          <tr key={rowIndex} style={{outline: "thin solid"}}>
            {row.map((col, colIndex) => (
              <td key={colIndex} valign="top">
                
                <button onClick={() => handleRemoveCol(rowIndex,colIndex)}>-</button>
                <div style={{ minWidth: "200px", minHeight: "100px" }}>
                  <div
                    className="form-preview"
                    data-rowindex={rowIndex}
                    data-colindex={colIndex}

                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    style={{ backgroundColor: "#f1f1f1", height: "100%" }}
                    
                  >
                  
                   { !!col && col?.map((item,index)=>DisplayDropFields(item,index,handleFieldSetting,handleDeleteField,rowIndex,colIndex)) }
                  &nbsp;&nbsp;&nbsp;&nbsp;
                    { (!!col === false || col?.length === 0) && <div
                      style={{
                        border: "#603 dotted",
                        display: "block",
                        verticalAlign: "middle",
                        width: "100%",
                        height: "100px",
                      }}
                    >
                      Drop field here
                    </div> }
                  </div>
                </div>
              </td>
            ))}
            <td>
              <button onClick={() => handleAddColumn(rowIndex)}>+</button>
              <button onClick={() => handleRemoveRow(rowIndex)}>-</button> 
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <Preview showModal={showModal} setShowModal={setShowModal} formFields={formFields} displayDropFields={DisplayDropFields} type={'table'} />
  </div>
} 

export default Table; 