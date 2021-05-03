import React, { Fragment } from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from './axios'
import UpdateDelete from './UpdateDelete'
import DelBtnCellRenderer from './DelBtnCellRenderer'
import { toast } from 'toast-notification-alert'

class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rowData: [],
            rowDataKeys: []
        }
    }

    onGridReady = (params) => {
        this.gridApi = params.api
        setTimeout(() => {
            this.gridApi.sizeColumnsToFit();
        }, 600)
    }

    fetchRecruiters = () => {
        axios.get('recruiters').then(res => {
            this.setState({
                rowData: res.data
            })
            if (!this.state.rowDataKeys.length) {
                let keys = res.data.length ? Object.keys(res.data[0]) : []
                this.setState({
                    rowDataKeys: keys
                })
            }
        })
    }

    deleteRecruiter = (id) => {
        axios.delete(`recruiters/recruiter/${id}`).then(res => {
            if (res.status === 200) {
                this.fetchRecruiters()
                toast.show({ title: 'Successfully deleted job details', position: 'topright', type: 'success' })
            }
        }).catch((err) => {
            toast.show({ title: 'Something went wrong!!', position: 'topright', type: 'error' })
        })
    }

    componentDidMount() {
        this.fetchRecruiters()
        setInterval(() => {
            this.fetchRecruiters()
        }, 20000)
    }
    render() {
        return (
            <Fragment>
                <div className='container-fluid'>
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '3vh 0 2vh 0' }}>
                        <h3 className='text-success'>View and Edit interview status</h3>
                    </div>
                    <div className='row'>
                        <div className="ag-theme-alpine col-9" style={{ height: '85vh' }}>
                            <AgGridReact
                                rowData={this.state.rowData}
                                defaultColDef={{ resizable: true }}
                                onGridReady={this.onGridReady}
                                frameworkComponents={{ 'delBtnCellRenderer': DelBtnCellRenderer }}
                            >
                                {this.state.rowDataKeys.map(eachKey => {
                                    return (
                                        <AgGridColumn key={eachKey} field={eachKey}></AgGridColumn>
                                    )
                                })}
                                <AgGridColumn
                                    key={'Delete'}
                                    maxWidth={'60'}
                                    cellRenderer={'delBtnCellRenderer'}
                                    field={'Delete'}
                                    cellRendererParams={{ deleteRecruiter: this.deleteRecruiter }}
                                ></AgGridColumn>
                            </AgGridReact>
                        </div>
                        <div className='col-3'>
                            <UpdateDelete fetchRecruiters={this.fetchRecruiters} gridApi={this.gridApi} />
                        </div>
                    </div>
                </div>

            </Fragment>

        )
    }
}

export default Admin