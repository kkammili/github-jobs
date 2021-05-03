import axios from './axios'
import { useState } from 'react'
import { toast } from 'toast-notification-alert'
import { FaSyncAlt } from "react-icons/fa";


function UpdateDelete({ fetchRecruiters, gridApi }) {
    let [status, setStatus] = useState('')
    let [id, setId] = useState('')
    const updateStatus = () => {
        axios.put('recruiters/statUpdate', { id, status }).then(res => {
            if (res.status === 200) {
                toast.show({ title: 'Successfully updated job details', position: 'topright', type: 'success' })
                fetchRecruiters()
            }
        }).catch((err) => {
            toast.show({ title: 'Something went wrong!!', position: 'topright', type: 'error' })
        })
    }
    return (
        <div className='row'>
            <h3>Update</h3>
            <FaSyncAlt style={{ display: 'block', 'position': 'relative', top: '10px', left: '10px' }} onClick={() => { gridApi.sizeColumnsToFit() }} size={'1em'} />
            <div className='row'>
                <div className='col-12'>
                    Update Id:
               </div>
                <br></br>
                <div className='col-12'>
                    <input id='id' type='text' onChange={(e) => setId(e.target.value)} value={id} />
                </div>

                <br></br>
                <div className='col-12'>
                    Status:
               </div>

                <div className='col-12'>
                    <input id='status' type='text' onChange={(e) => setStatus(e.target.value)} value={status} />
                </div>
                <br></br>
                <div className='col-12'>
                    <button className='btn btn-primary' onClick={updateStatus}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateDelete