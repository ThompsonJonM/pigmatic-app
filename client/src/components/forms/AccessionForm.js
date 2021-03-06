import React from 'react';
import axios from 'axios';
import Helper from '../utilities/Helper';

export default class AccessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            acqNumber: '',
            acqMethod: '',
            acqName: '',
            acqCollection: '',
            acqProv: '',
            acqDonor: '',
            acqDescribe: ''
        };

        this.addHelper = new Helper();

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:3000/collections/add-accession/'+this.props.match.params.id)
          .then(response => {
            console.log(response);
          })
    
          .catch(function (error) {
            console.log(error);
          })
      }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        let accessionData = {
            acqNumber: this.state.acqNumber,
            acqMethod: this.state.acqMethod,
            acqName: this.state.acqName,
            acqCollection: this.state.acqCollection,
            acqProv: this.state.acqProv,
            acqDonor: this.state.acqDonor,
            acqDescribe: this.state.acqDescribe
        }

        console.log(accessionData);

        this.addHelper.sendAccessionData(accessionData, this.props.match.params.id);
        this.props.history.push('/view-collections');
    }

    render() {
        return (
            <div className='container acqContainer'>
                <div className='row'>
                    <form className='col-10 ml-auto mr-auto' id='acqForm' onSubmit={ this.handleSubmit }>
                        <div className='row formRow'>
                            <div className='col-6 form-group'>
                                <label className='h5'> Acquisition Number </ label>
                                <input className='form-control' value={this.state.acqNumber} onChange={this.handleInputChange} type='text' name='acqNumber' placeholder='YYYY.AccessionID.ItemID' required />
                            </ div>

                            <div className='col-6 form-group'>
                                <label className='h5'> Acquisition Method </ label>
                                <input className='form-control' value={this.state.acqMethod} onChange={this.handleInputChange} type='text' name='acqMethod' placeholder='Enter an acquisition method.' required />
                            </ div>
                        </ div>

                        <div className='row formRow'>
                            <div className='col-6 form-group'>
                                <label className='h5'> Acquisition Name </ label>
                                <input className='form-control' value={this.state.acqName} onChange={this.handleInputChange} type='text' name='acqName' placeholder='Enter an object name.' required />
                            </ div>

                            <div className='col-6 form-group'>
                                <label className='h5'> Acquisition Collection </ label>
                                <input className='form-control' value={this.state.acqCollection} onChange={this.handleInputChange} type='text' name='acqCollection' placeholder='Enter the collection.' required />
                            </ div>
                        </ div>

                        <div className='row formRow'>
                            <div className='col-6 form-group'>
                                <label className='h5'> Acquisition Provenance </ label>
                                <input className='form-control' value={this.state.acqProv} onChange={this.handleInputChange} type='text' name='acqProv' placeholder='Enter the provenance of the object.' required />
                            </ div>

                            <div className='col-6 form-group'>
                                <label className='h5'> Acquisition Donor Contact </ label>
                                <input className='form-control' value={this.state.acqDonor} onChange={this.handleInputChange} type='text' name='acqDonor' placeholder="Enter donor's name." required />
                            </ div>
                        </ div>

                        <div className='row formRow'>
                            <div className='col-12 form-group'>
                                <label className='h5'> Acquisition Description </ label>
                                <textarea className='form-control' value={this.state.acqDescribe} onChange={this.handleInputChange} type='text' name='acqDescribe' rows='5' placeholder='Enter an object description.' required />
                            </ div>
                        </ div>

                        <input type='submit' value='Submit' className='col-12 ml-auto mr-auto btn btn-dark btn-lg' />
                    </ form>
                </ div>
            </ div>
        );
    }
}