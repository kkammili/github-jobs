import React from 'react'
import axios from './axios'
import './App.css'
import MakeField from './MakeField'
import { MultiSelect } from 'react-multi-select-component';
import { toast } from 'toast-notification-alert'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      prime_vendor: '',
      end_client: '',
      interview_pipeline: [],
      disabled: true
    }
    this.fielValues = [
      { id: 'first_name', value: 'First Name' },
      { id: 'last_name', value: 'Last Name' },
      { id: 'email', value: 'Email' },
      { id: 'phone', value: 'Phone' },
      { id: 'prime_vendor', value: 'Prime Vendor' },
      { id: 'end_client', value: 'End Client' },
    ]

    this.options = [
      { label: "introduction 🍎", value: "Introduction" },
      { label: "phone screening 🍇", value: "PhoneScreening" },
      { label: "coding/zoom 🥭", value: "Coding/Zoom" },
      { label: "other 🍉", value: "Other" },
    ]
  }

  sendResume = () => {
    let body = this.state
    let int_pipe = ''
    if (body.interview_pipeline.length) {
      int_pipe = body.interview_pipeline.map(eachObj => {
        return eachObj.value
      }).join(', ')
    }

    body.interview_pipeline = int_pipe
    delete body.disabled

    axios.post('recruiters/add', body).then(res => {
      if (res.status === 200) {
        toast.show({ title: 'Successfully add job details', position: 'topright', type: 'success' })
      }
    }).catch((err) => {
      toast.show({ title: 'Something went wrong!!', position: 'topright', type: 'error' })
    })
  }

  setInterviewPipeline = (currOption) => {
    this.setState({
      interview_pipeline: currOption
    })
  }


  disabledCheck = () => {
    let { first_name, last_name, email, phone, prime_vendor, end_client } = this.state
    return !(first_name && last_name && email && phone && prime_vendor && end_client)
  }

  setFieldValue = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  render() {
    return (
      <div>
        <div className="cr cr-top cr-left cr-sticky cr-red"></div>
        <div className="cr cr-top cr-right cr-sticky cr-blue"></div>
        <div className="cr cr-bottom cr-left cr-sticky cr-orange"></div>
        <div className="cr cr-bottom cr-right cr-sticky cr-green"></div>


        <div style={{ display: 'flex', justifyContent: 'center', padding: '3vh 0 2vh 0' }}>
          <h3 className='text-success'>Enter Job Details here to download my resume</h3>
        </div>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '50vw' }}>
            <div className="container">


              <div>
                <label htmlFor={'number_of_round'}>Interview Pipeline:</label>
                <MultiSelect
                  options={this.options}
                  value={this.state.interview_pipeline}
                  onChange={this.setInterviewPipeline}
                  labelledBy="Select"
                />
              </div>

              <br />
              {this.fielValues.map(eachField => (
                <MakeField key={eachField.id} id={eachField.id} placeholder={eachField.value} setFieldValue={this.setFieldValue} />
              ))}
            </div>
          </div>


          <div style={{ width: 400, maxWidth: '100%', height: 'auto' }}>
            <div id="bgImage" className="box bounce-1">
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '35vh' }}>
              <a href={"./my_resume_n_details.zip"} download>
                <button disabled={this.disabledCheck() ? 1 : 0} onClick={this.sendResume} className="glossy-button glossy-button--green">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
