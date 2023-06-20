const fields = [
    { type: 'paragraph', label: 'Paragraph',properties:{
      htmlAttributePropertyName:"",htmlControlType:"",divideInColumns:"",textHtml:"",hint:""
    }  },
    { type: 'textBox', label: 'Text Box',properties:{
      htmlAttributePropertyName:"",displayLabel:"",htmlControlType:"",divideInColumns:"",minCharacters:"",maxCharacters:"",sequenceNumber:"",isRequired:"",isHeader:"",textOrPlaceholder:"",htmlControlHasMasterData:"",hint:""
    } },
    { type: 'textArea', label: 'Text Area',properties:{
      htmlAttributePropertyName:"",displayLabel:"",htmlControlType:"",divideInColumns:"",minCharacters:"",maxCharacters:"",sequenceNumber:"",isRequired:"",isHeader:"",textHtml:"",htmlControlHasMasterData:"",hint:""
    } },
    { type: 'radio', label: 'Radio Button',properties:{
      htmlAttributePropertyName:"",displayLabel:"",htmlControlType:"",divideInColumns:"",sequenceNumber:"",isRequired:"",isHeader:"",htmlControlHasMasterData:true,
      htmlControlMasterData:null,
      hint:""
    } },
    { type: 'checkbox', label: 'Checkbox',properties:{
      htmlAttributePropertyName:"",displayLabel:"",htmlControlType:"",divideInColumns:"",sequenceNumber:"",isRequired:"",isHeader:"",
      htmlControlHasMasterData:true,
      htmlControlMasterData:null,
      hint:""
    } },
    { type: 'dropDown', label: "Drop Down List",properties:{
      htmlAttributePropertyName:"",displayLabel:"",htmlControlType:"",divideInColumns:"",sequenceNumber:"",isHeader:"",htmlControlHasMasterData:true,
      htmlControlMasterData:null,
      hint:""
    }},
    { type: 'signLine', label: "Signature Line",properties:{
      htmlAttributePropertyName:"",htmlControlType:"",divideInColumns:"",isHeader:"",
    }},
    { type: 'datePicker', label: "Date Picker",properties:{
      htmlAttributePropertyName:"",displayLabel:"",htmlControlType:"",divideInColumns:"",sequenceNumber:"",isRequired:"",isHeader:"",hint:""
    }},
    { type: 'timePicker', label: "Time Picker",properties:{
      htmlAttributePropertyName:"",displayLabel:"",htmlControlType:"",divideInColumns:"",sequenceNumber:"",isRequired:"",isHeader:"",htmlControlHasMasterData:"",hint:""
    }},
    { type: 'textEditor', label: "Text Editor",properties:{
      htmlAttributePropertyName:"",displayLabel:"",htmlControlType:"",divideInColumns:"",sequenceNumber:"",isHeader:"",textHtml:"",hint:""
    }},
    { type: 'heading', label: "Heading",properties:{
      htmlAttributePropertyName:"",htmlControlType:"",divideInColumns:"",sequenceNumber:"",isHeader:"",textHtml:"",hint:""
    }},
    
  ];

  export default fields;