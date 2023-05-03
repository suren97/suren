import {AgGridReact} from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import Store from "../Redux/Store";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { jsPanel } from "jspanel4";

function View_user()
{
const state=Store.getState();
const getusers=state=>state.userdata.users;
let users=[...getusers(state)];
const dispatch=useDispatch();

const [rowdata,setrow]=useState();
const [columns,setcolumns]=useState([
    {field:"username"},
    {field:"dob"},
    {field:"email"},
    {field:"mobile"}
]);
const defaultColDef=({
    flex:1,
    sortable:true
});

return(
    <div>
        <div className="ag-theme-alpine" style={{height:300}}>
        <AgGridReact
        rowData={rowdata}
        columnDefs={columns}
        defaultColDef={defaultColDef}
        />
        </div>
    </div>
)
}
export default View_user;