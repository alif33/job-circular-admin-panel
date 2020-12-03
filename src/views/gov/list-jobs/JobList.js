import React, { useState, useEffect } from 'react';
import {
  CCard,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react';
import JobItem from './job-item/JobItem'
import { Digital } from 'react-activity';
import 'react-activity/dist/react-activity.css';
import fb from '../../../firebase'
import _ from 'lodash'


const ListGroups = (props) => {
  const [activeTab, setActiveTab] = useState()
  const [jobList, setJobList] = useState()

  useEffect(()=>{
    fb.database().ref('/gov').on('value', snapshot => {
      const Jobslist = _.map(snapshot.val(), (val, key)=>{
        return {
          ...val,
          key: key
        }
      })
      setJobList(Jobslist)
  })

  },[])

  let renderJobList = null
  if(jobList){
      console.log(jobList);
      renderJobList = jobList.map(data=>{
        console.log(data.title, data.description);
      return <JobItem title={data.title} description={data.description} category={data.category} date={data.date} key={data.key} keyExt={data.key} image={data.image} />
    })
  }
  if(!renderJobList){
    return (
      <CRow>
      <CCol>
        <Digital />
      </CCol>
    </CRow>
    )
  }
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              List group
              <small> tab Javascript plugin</small>
            </CCardHeader>
            {renderJobList}
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ListGroups
