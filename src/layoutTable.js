

const Table = ({
    rows,
    handleRemoveCol,
    handleAddRow,
    handleDrop,
    handleDragOver,
    DisplayDropFields,
    handleAddColumn,
    handleRemoveRow,
    handleFieldSetting,
    handleDeleteField
})=>{

    return <div className="col-8">
        {console.log("!!rows",rows,!!rows)}
    <button onClick={handleAddRow}>Add Row</button>
    <table width="100%">
      <tbody>
        {!!rows?.length && rows?.map((row, rowIndex) => (
          <tr key={rowIndex}>
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
                  
                   { !!col && col?.map((item,index)=>DisplayDropFields(item,index,handleDeleteField,handleFieldSetting,rowIndex,colIndex)) }
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
  </div>
} 

export default Table; 