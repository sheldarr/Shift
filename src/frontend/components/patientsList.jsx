'use string';

import {Button, Table} from 'react-bootstrap';

import React from 'react';
import RemovePatient from './../../../components/removePatient.jsx';

const PatientsList = React.createClass({
    propTypes: {
        onChange: React.PropTypes.func.isRequired,
        patients: React.PropTypes.array.isRequired
    },

    debug () {
        console.log(RemovePatient);
    },

    render () {
        return (
            <Table hover striped>
                <thead>
                    <tr>
                        <td onClick={this.debug}>{'Id'}</td>
                        <td>{'Name'}</td>
                        <td>{'Surname'}</td>
                        <td>{'Date of birth'}</td>
                        <td>{'Telephone'}</td>
                        <td>{'Email'}</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {this.props.patients.map((patient) =>
                        <tr key={patient.id}>
                            <td>
                                {patient.id}
                            </td>
                            <td>
                                {patient.name}
                            </td>
                            <td>
                                {patient.surname}
                            </td>
                            <td>
                                {patient.dateOfBirth}
                            </td>
                            <td>
                                {patient.telephone}
                            </td>
                            <td>
                                {patient.email}
                            </td>
                            <td>
                                <div className="pull-right">
                                    <Button bsStyle="primary" href={`#/patient/${patient.id}`} style={{marginRight: 10}}>
                                        {'Details'}
                                    </Button>
                                    <RemovePatient onRemove={this.props.onChange} patient={patient}/>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        );
    }
});

export default PatientsList;
