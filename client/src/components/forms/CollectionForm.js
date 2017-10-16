import React from 'react';
import Helper from '../utilities/Helper';

export default class CollectionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collectionName: ''
        }

        this.addHelper = new Helper();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        let collectionData = {
            name: this.state.collectionName
        }

        this.addHelper.sendCollectionData(collectionData);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <form className='col-12 ml-auto mr-auto' onSubmit={this.handleSubmit}>
                        <div className='row formRow'>
                            <div className='col-8 ml-auto mr-auto form-group'>
                                <label className='h5'> Collection Name </ label>
                                <input className='form-control' value={this.state.collectionName} onChange={this.handleInputChange} type='text' name='collectionName' placeholder='Enter a collection name.' required />
                            </ div>
                        </ div>
                    </ form>

                    <input type='submit' value='submit' className='col-2 ml-auto mr-auto btn btn-dark' />
                </ div>
            </ div>
        )
    }
}