export default function addFormData(data){
    return data.map((cols,rowIndx)=>{
      if(cols.length){
        return cols.map((item,colIndx)=>{
          if(item.length){
            return item.map((i,index)=>{
              i['rowIndex'] = rowIndx;
              i['colIndex'] = colIndx;
              return i;
            })
          }else{
            return null;
          }
          
        })
      }else{
        return null;
      }
    }
      )
  }
