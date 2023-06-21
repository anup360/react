
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Preview({showModal,setShowModal,formFields,displayDropFields,type }) {

    const renderTable = (data) => {
        const rows = [];
    
        const {numRows,numCols} = getRowsNCol(data);

        for (let i = 0; i <= numRows; i++) {
          const columns = [];
    
          // Create table columns
          for (let j = 0; j <= numCols; j++) {
            const item = data.find((item) => item.rowIndex === i && item.colIndex === j);
            const columnContent = item;
    
            columns.push(<td key={j} style={{outline: "thin solid"}}>{displayDropFields(columnContent,j)}</td>);
          }
    
          rows.push(<tr key={i}>{columns}</tr>);
        }
    
        return rows;
      };
const getRowsNCol = (data)=>{
        let maxRowIndex = -1;
        let maxColIndex = -1;

            data.forEach((item) => {
            if (item.rowIndex > maxRowIndex) {
            maxRowIndex = item.rowIndex;
            }
            if (item.colIndex > maxColIndex) {
            maxColIndex = item.colIndex;
            }
            });

            const numRows = maxRowIndex + 1;
            const numCols = maxColIndex + 1;
            return {numRows,numCols}
}

  return (
    <>
    {console.log("formFields",formFields,renderTable(formFields))}
      <Modal show={showModal} onHide={()=>setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {type === 'table'?<table width={"100%"}>
      <tbody>{renderTable(formFields)}</tbody>
    </table>:formFields.map((field,index) => (
            displayDropFields(field,index)
          ))}          
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Preview;