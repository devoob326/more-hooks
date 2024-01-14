import React from "react"
import ListItem from "./ListItem.jsx"
import './ListBody.css'
const ListBody=()=>{
    
    let listInput=React.createRef()

    let [listData,updateList]=React.useState([])

    let addTask=()=>{
        let newInput=listInput.current.value
        if(newInput===""){
            return
        }
        updateList(prev=>{
            return [...prev,newInput]
        })
        listInput.current.value="";
        listInput.current.focus();
    }

    let handleEnterKey=(e)=>{
        if(e.key==="Enter"){
            addTask();
        }
    }

    return (
        <div>
            <div className="input">
                <input type="text" className="btn" ref={listInput} onKeyDown={handleEnterKey} />
                <button className="btn1" onClick={addTask} >Add</button>
            </div>
            <div className="list">
                {listData.map((elt, i) => (
                    <ListItem text={elt} key={i} />
                ))}
            </div>
            <div className="last">
                <button
                    onClick={() => {
                        listInput.current.focus();
                    }}
                >
                    Go to top
                </button>
            </div>
        </div>
    );
}

export default ListBody