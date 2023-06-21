import { useEffect, useState } from "react";
import Main from "./Main";


const FormPage = ()=>{

	const [template, setTemplate] =  useState({
		templateType:null,
		templateName:null,
		templateLayout:null
	});

	const [isEmpty,setIsEmpty]= useState(true);

	const handleChange = (e)=>{
		
		if(e.target.type === 'button'){
			setTemplate({...template,templateLayout:e.target.value})
		}
		if(e.target.id === 'templateName'){
			setTemplate({...template,templateName:e.target.value})
		}
		if(e.target.id === 'templateType'){
			setTemplate({...template,templateType:e.target.value})
			
		}
			
	}

	const handleSubmit = ()=>{
		const isEmpty = Object.values(template).some(x => x === null || x === '');
		setIsEmpty(isEmpty);
	}

	useEffect(()=>{
		handleSubmit()
	},[template])
	return (<>
	{isEmpty?
			<div className="container">
				
  <h2>Document Template</h2>
    <div className="form-group">
      <label className="control-label col-sm-2" htmlFor="templateType">Template Type:</label>
      <div className="col-sm-10">
	  <select className="form-control" id="templateType" onChange={handleChange}>
			<option>--Select--</option>
			<option>2</option>
			<option>3</option>
			<option>4</option>
	  </select>
      </div>
    </div>
    <div className="form-group">
      <label className="control-label col-sm-2" htmlFor="template">Template:</label>
      <div className="col-sm-10">          
        <input type="text" className="form-control" onChange={handleChange} id="templateName" placeholder="Enter template name" name="template" />
      </div>
    </div>
    <div className="form-group">   
	<label className="control-label col-sm-2" htmlFor="template">Select template:</label>
      <div className="col-sm-10">          
      	<button value="simple" type="button" onClick={handleChange}><span className="k-icon k-i-layout-side-by-side large "></span>Simple Form</button>
		&nbsp;&nbsp;
		  <button value="table" type="button" onClick={handleChange}><span className="k-icon k-i-grid xxxlarge"></span> Table Form</button>
	  
	  </div>     
	
    </div>
    <div className="form-group">        
      <div className="col-sm-offset-2 col-sm-10">
        {/* <button className="btn btn-default" onClick={handleSubmit}>Create</button> */}
      </div>
    </div>
  
</div>:
<Main template={template} />
}
		</>)
}

export default FormPage;