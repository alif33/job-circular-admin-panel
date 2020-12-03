import React, { useState } from 'react';
import {
  CButton,
  CCardBody,
  CCol,
  CRow,
  CTabContent
} from '@coreui/react';
import fb from '../../../../firebase'


const JobItem = (props) => {

  const deleteHandler = key =>{
    alert('Are you want to sure delete ?')
    fb.database().ref(`/nongov/${key}`).remove()
  }
  return (
  <CCardBody>
    <CRow>
      <CCol xs="4">
        <img src={props.image} alt="Circular picture" height="200px" width="200px"/>
      </CCol>
      <CCol xs="8">
        <CTabContent>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
            <div><p>Date: {props.date}</p><p>Category: {props.category}</p></div>          
          <CButton color="danger" onClick={()=>{
            deleteHandler(props.keyExt)
          }}>Delete</CButton>
          <CButton color="primary">Edit</CButton>
        </CTabContent>
      </CCol>
    </CRow>
  </CCardBody>
  )
}

export default JobItem


