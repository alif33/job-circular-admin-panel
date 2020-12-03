import React from 'react'
import fb from '../../../firebase'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CCollapse,
  CFade,
  CForm,
  CFormGroup,
  CTextarea,
  CInput,
  CInputGroup,
  CSelect,
  CInputGroupAppend,
  CInputFile,
  CLabel,
  CRow
} from '@coreui/react'


const BasicForms = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  const [info, setInfo] = React.useState({
    title: '',
    description: '',
    date: '',
    category: '',
  })
  const [files, setFiles] = React.useState({
    image: '',
    pdf: '',
  })


  const handleInfo = event =>{  
      setInfo({
        ...info,
        [event.target.name] : event.target.value
      })
  }
  const handleSubmit = ()=>{
    let file = files.image[0]
    let uploadTask = fb.storage().ref(`images/${file.name}`).put(file)
    uploadTask.on('state_changed', 
      (snapshot)=>{
        // console.log(snapshot);
      },
      (error)=>{
        // console.log(error);
      },
      ()=>{
        fb.storage().ref('images').child(files.image[0].name).getDownloadURL().then( url=>{
          const {title, description, date, category} = info
          fb.database().ref('/gov').push({title, description, date, category, image: url})
          console.log(url);
        })
      }
    )

    
  }
  const handleFile = event => {
      console.log(event.target.files);
      setFiles({
        ...files,
        [event.target.name] : event.target.files
      })
  }
  const handleClear = ()=>{
    setInfo({
      title: '',
      description: '',
      date: '',
      category: '',
    })
  }
  return (
    <>
      <CRow>
        <CCol xs="12">
          <CFade timeout={300} in={showElements} unmountOnExit={true}>
            <CCard>
              <CCardHeader>
                Add New job
                <div className="card-header-actions">
                  <CButton color="link" className="card-header-action btn-setting">
                  </CButton>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed} timeout={1000}>
                <CCardBody>
                  <CForm className="form-horizontal">
                    <CFormGroup>
                      <CLabel htmlFor="appendedInputButton">Job Title</CLabel>
                      <div className="controls">
                        <CInputGroup>
                          <CInput id="appendedInputButton" size="16" type="text" name="title" onChange={handleInfo} value={info.title}/>
                          <CInputGroupAppend>
                          </CInputGroupAppend>
                        </CInputGroup>
                      </div>
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel htmlFor="appendedInputButton">Job Description</CLabel>
                      <div className="controls">
                        <CInputGroup>
                          <CTextarea id="appendedInputButton" size="16" type="text" name="description" onChange={handleInfo} value={info.description}/>
                          <CInputGroupAppend>
                          </CInputGroupAppend>
                        </CInputGroup>
                      </div>
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel htmlFor="appendedInputButton">End of the Date</CLabel>
                      <div className="controls">
                        <CInputGroup>
                          <CInput id="appendedInputButton" size="16" type="date" name="date" onChange={handleInfo} value={info.date}/>
                          <CInputGroupAppend>
                          </CInputGroupAppend>
                        </CInputGroup>
                      </div>
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel htmlFor="appendedInputButton">Job Category</CLabel>
                        <CSelect name="category" id="cars" onChange={handleInfo} value={info.category}>
                          <option value="">Choose a category</option>
                          <option value="নোটিশ">নোটিশ</option>
                          <option value="চাকরির প্রস্তুতি">চাকরির প্রস্তুতি</option>
                        </CSelect>
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel htmlFor="appendedInputButton">Choose an Image</CLabel>
                      <div className="controls">
                        <CInputGroup>
                          <CInputFile 
                          id="appendedInputButton" 
                          name="image" 
                          onChange={handleFile} 
                          value={info.image}
                          accept="image/png, image/jpeg"
                          />
                          <CInputGroupAppend>
                          </CInputGroupAppend>
                        </CInputGroup>
                      </div>
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel htmlFor="appendedInputButton">Choose a pdf</CLabel>
                      <div className="controls">
                        <CInputGroup>
                          <CInputFile 
                          id="appendedInputButton" 
                          name="pdf" 
                          onChange={handleFile} 
                          value={info.pdf}
                          accept="application/pdf, application/vnd.ms-excel"
                          />
                          <CInputGroupAppend>
                          </CInputGroupAppend>
                        </CInputGroup>
                      </div>
                    </CFormGroup>
                    <div className="form-actions">
                      <CButton color="primary" onClick={handleSubmit}>Add Job</CButton>
                      <CButton color="secondary" onClick={handleClear}>Cancel</CButton>            
                    </div>
                  </CForm>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
      </CRow>
    </>
  )
}

export default BasicForms


