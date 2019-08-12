import React from "react";
// This file exports the Input, TextArea, and FormBtn components
export function Input(props) {
 return (
   <div className="form-group">
     <input className="form-control" {...props} />
   </div>
 );
}
export function TextArea(props) {
 return (
   <div className="form-group">
     <textarea className="form-control" rows="15" {...props} />
   </div>
 );
}
export function FormBtn(props) {
 return (
   <button {...props} style={{ marginTop: 300, marginLeft: 125 }} className="btn btn-primary btn-sm">
     {props.children}
   </button>
 );
}