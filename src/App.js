import './App.css';
import {variables} from "./variables";
import { CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, Legend, AreaChart, Area } from 'recharts';
import React, { Component }  from 'react';


export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfos: [],
            rollingRetention: 0,
            resultData: 0,
            histogramData: [],
            modalTitle: "",
            userID: 0,
            days: 0,
            dataReg: "",
            dataLast: ""
        };
    }


    componentDidMount() {
        this.refreshList();
    }

    refreshList() {
        fetch(variables.API_URL + 'UserInfo')
            .then(response => response.json())
            .then(data => {
                this.setState({userInfos: data});
            });
    }

    GetRollingRetention() {
        fetch(variables.API_URL + 'RollingRetention/' + this.state.days)
            .then(response => response.json())
            .then(data => {
                this.setState({resultData: data});
            })
    }

    GetHistogramData() {
        fetch(variables.API_URL + 'Histogram')
            .then(response => response.json())
            .then(data => {
                this.setState({histogramData: data});
            });
    }

    changeUserID = (e) => {
        this.setState({userID: e.target.value})
    }

    changeDays = (e) => {
        this.setState({days: e.target.value})
    }

    changeDateRegistration = (e) => {
        this.setState({dataReg: e.target.value});
    }

    changeDateLastActivity = (e) => {
        this.setState({dataLast: e.target.value});
    }

    addClick() {
        this.setState({
            modalTitle: "Добавить данные",
            userID: 0,
            dataReg: "",
            dataLast: ""
        })
    }

    createClick() {
        console.log(this.state)
        fetch(variables.API_URL + 'UserInfo', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userID: this.state.userID,
                dateRegistration: this.state.dataReg,
                dateLastActivity: this.state.dataLast
            })
        })
            .then(res => res.json())
            .then(() => {
                this.refreshList();
            }, (error) => {
                alert(error);
            })
    }

    render() {
        const {
            userInfos,
            resultData,
            modalTitle,
            histogramData,
            days,
            userID,
            dataReg,
            dataLast
        } = this.state

        return (
            <div>
                <button type="button" className="btn btn-primary m-2 float-end"
                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                        onClick={() => this.addClick()}>
                    Добавить данные
                </button>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>
                            User ID
                        </th>
                        <th>
                            Date Registration
                        </th>
                        <th>
                            Date Last Activity
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {userInfos.map(user =>
                        <tr key={user.Uid}>
                            <td>{user.userID}</td>
                            <td>{user.dateregistration}</td>
                            <td>{user.datelastactivity}</td>
                        </tr>)}
                    </tbody>
                </table>

                <button type="button" className="btn btn-primary m-2 float-end"
                        onClick={() => this.GetHistogramData()}>
                    Нарисовать гистограмму
                </button>

                <BarChart
                    width={900}
                    height={400}
                    data={histogramData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="userID" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="razn" fill="#8884d8" />
                </BarChart>

                <div className="input-group mb-3">
                    <span className="input-group-text">Дней для расчета</span>
                    <input type="text" className="form-control" value={days}
                           onChange={this.changeDays}/>
                    <button type="button" className="btn btn-primary m-2 float-end"
                            onClick={() => this.GetRollingRetention()}>
                        Посчитать
                    </button>
                </div>
                    <AreaChart
                        width={900}
                        height={400}
                        data={resultData}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="Item2" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{modalTitle}</h5>
                                <button type="button" className="btn-close"
                                        data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">User ID</span>
                                    <input type="text" className="form-control" value={userID}
                                           onChange={this.changeUserID}/>
                                </div>
                            </div>
                            <div className="modal-body">
                                <div className="input-group date" id="datetimepicker1">
                                    <span className="input-group-text">Date Registration</span>
                                    <input type="date" className="form-control" value={dataReg}
                                           onChange={this.changeDateRegistration}/>
                                </div>
                            </div>
                            <div className="modal-body">
                                <div className="input-group date" id="datetimepicker1">
                                    <span className="input-group-text">Date Last Activity</span>
                                    <input type="date" className="form-control" value={dataLast}
                                           onChange={this.changeDateLastActivity}/>
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary float-start"
                                    onClick={() => this.createClick()}>Добавить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
