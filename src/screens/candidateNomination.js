import React, { useState } from 'react';
import '../styles/candidateRegister.css';
import { useNavigate } from 'react-router-dom';

const NominationForm = () => {

    const navigate = useNavigate()

    // State for form fields
    const [formData, setFormData] = useState({
    nominee: {
    familyName: '',
    otherNames: '',
    dateOfBirth: '',
    nameOnBallotPaper: ''
    },
    postalAddress: {
    streetNumber: '',
    streetName: '',
    postcode: '',
    suburb: ''
    },
    phoneNumbers: {
    primary: '',
    secondary: '',
    fax: ''
    },
    email: '',
    propertyDetails: {
    streetNumber: '',
    streetName: '',
    suburb: '',
    postcode: '',
    lotLocationNo: ''
    },
    office: {
    localGovernmentDistrict: '',
    ward: '',
    officeType: '',
    vacancyType: ''
    }
    });

    // Event handler for form field changes
    const handleChange = (e, section, field) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [section]: {
            ...prevState[section],
            [field]: value
        }
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
    e.preventDefault();
        navigate('/Candidate/home')
    // Handle form submission logic here
    console.log(formData);
    };

    return (
        <div className='mainContainer'>
            <div className="registration-header">
                <h1>Nomination Form</h1>
            </div>
            <div className="registration-container">
                <div className="registration-section personal-information">
                    <h2>Nominee</h2>
                    <div className="form-group input-group">
                        <input type="text" className="input" name="familyName" value={formData.nominee.familyName} onChange={(e) => handleChange(e, 'nominee', 'familyName')} required />
                        <label className="user-label">Family Name</label>
                    </div>
                    <div className="form-group input-group">
                        <input type="text" className="input" name="otherNames" value={formData.nominee.otherNames} onChange={(e) => handleChange(e, 'nominee', 'otherNames')} required />
                        <label className="user-label">Other Names</label>
                    </div>
                    <div className="form-group input-group">
                        <input type="date" className="input" name="dateOfBirth" value={formData.nominee.dateOfBirth} onChange={(e) => handleChange(e, 'nominee', 'dateOfBirth')} required />
                        <label className="user-label">Date of Birth</label>
                    </div>
                    <div className="form-group input-group">
                        <input type="text" className="input" name="nameOnBallotPaper" value={formData.nominee.nameOnBallotPaper} onChange={(e) => handleChange(e, 'nominee', 'nameOnBallotPaper')} required />
                        <label className="user-label">Name on Ballot Paper</label>
                    </div>
                    </div>

                    <div className="registration-section postal-address">
                    <h2>Postal Address</h2>
                    <div className="form-group input-group">
                        <input type="text" className="input" name="streetNumber" value={formData.postalAddress.streetNumber} onChange={(e) => handleChange(e, 'postalAddress', 'streetNumber')} required />
                        <label className="user-label">Street Number</label>
                    </div>
                    <div className="form-group input-group">
                        <input type="text" className="input" name="streetName" value={formData.postalAddress.streetName} onChange={(e) => handleChange(e, 'postalAddress', 'streetname')} required />
                        <label className="user-label">Street Name</label>
                    </div>
                    <div className="form-group input-group">
                        <input type="text" className="input" name="postcode" value={formData.postalAddress.postcode} onChange={(e) => handleChange(e, 'postalAddress', 'postcode')} required />
                        <label className="user-label">Postcode</label>
                    </div>
                    <div className="form-group input-group">
                        <input type="text" className="input" name="suburb" value={formData.postalAddress.suburb} onChange={(e) => handleChange(e, 'postalAddress', 'suburb')} required />
                        <label className="user-label">Suburb</label>
                    </div>
                    </div>

                    <div className="registration-section phone-numbers">
                    <h2>Phone Numbers</h2>
                    <div className="form-group input-group">
                        <input type="tel" className="input" name="primary" value={formData.phoneNumbers.primary} onChange={(e) => handleChange(e, 'phoneNumbers', 'primary')} required />
                        <label className="user-label">Primary Phone Number</label>
                    </div>
                    <div className="form-group input-group">
                        <input type="tel" className="input" name="primary" value={formData.phoneNumbers.secondary} onChange={(e) => handleChange(e, 'phoneNumbers', 'secondary')} required />
                        <label className="user-label">Secondary Phone Number</label>
                    </div>
                    <div className="form-group input-group">
                        <input type="tel" className="input" name="fax" value={formData.phoneNumbers.fax} onChange={(e) => handleChange(e, 'phoneNumbers', 'fax')} required />
                        <label className="user-label">Fax Number</label>
                    </div>
                    </div>
            </div>







                    <div className='registration-container-s2'>
                        <div className="registration-section email">
                            <h2>Email</h2>
                            <div className="form-group input-group">
                                <input type="email" className="input" name="email" value={formData.email} onChange={(e) => handleChange(e, 'email', 'email')} required />
                                <label className="user-label">Email</label>
                            </div>
                        </div>

                        <div className="registration-section property-details">
                            <h2>Property Details</h2>
                            <div className="form-group input-group">
                                <input type="text" className="input" name="streetNumber" value={formData.propertyDetails.streetNumber} onChange={(e) => handleChange(e, 'propertyDetails', 'streetNumber')} required />
                                <label className="user-label">Street Number</label>
                            </div>
                            <div className="form-group input-group">
                                <input type="text" className="input" name="streetNumber" value={formData.propertyDetails.streetName} onChange={(e) => handleChange(e, 'propertyDetails', 'streetName')} required />
                                <label className="user-label">Street Name</label>
                            </div>
                            <div className="form-group input-group">
                                <input type="text" className="input" name="streetNumber" value={formData.propertyDetails.postcode} onChange={(e) => handleChange(e, 'propertyDetails', 'postcode')} required />
                                <label className="user-label">Postcode</label>
                            </div>
                            <div className="form-group input-group">
                                <input type="text" className="input" name="streetNumber" value={formData.propertyDetails.suburb} onChange={(e) => handleChange(e, 'propertyDetails', 'suburb')} required />
                                <label className="user-label">Suburb</label>
                            </div>
                            <div className="form-group input-group">
                                <input type="text" className="input" name="streetNumber" value={formData.propertyDetails.lotLocationNo} onChange={(e) => handleChange(e, 'propertyDetails', 'lotLocationNo')} required />
                                <label className="user-label">Lot/Location Number</label>
                            </div>
                        </div>

                        <div className="registration-section office">
                            <h2>Office</h2>
                            <div className="form-group input-group">
                                <input type="text" className="input" name="localGovernmentDistrict" value={formData.office.localGovernmentDistrict} onChange={(e) => handleChange(e, 'office', 'localGovernmentDistrict')} required />
                                <label className="user-label">Local Government District</label>
                            </div>
                            <div className="form-group input-group">
                                <input type="text" className="input" name="ward" value={formData.office.ward} onChange={(e) => handleChange(e, 'office', 'ward')} required />
                                <label className="user-label">Ward</label>
                            </div>
                            <div className="form-group input-group">
                                <input type="text" className="input" name="officeType" value={formData.office.officeType} onChange={(e) => handleChange(e, 'office', 'officeType')} required />
                                <label className="user-label">Office Type</label>
                            </div>
                            <div className="form-group input-group">
                                <input type="text" className="input" name="vaccancyType" value={formData.office.vacancyType} onChange={(e) => handleChange(e, 'office', 'vacancyType')} required />
                                <label className="user-label">Vaccancy Type</label>
                            </div>
                        </div>

                    </div>

                    <div className="container">
                        <div className="button-container">
                            <button className="Cbutton animated-button" onClick={handleSubmit}>
                            <div className="box">SUBMIT</div>
                            </button>
                        </div>
                    </div>
            </div>
    );
};

export default NominationForm;
