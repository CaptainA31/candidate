import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/candidateRegister.css';

const CandidateRegistration = () => {
    const navigate = useNavigate();

    const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    gender: ''
    });

    const [contactInfo, setContactInfo] = useState({
    address: '',
    email: '',
    phoneNumber: ''
    });

    const [identificationInfo, setIdentificationInfo] = useState({
    passportNo: '',
    licenseNo: '',
    idCardNo: ''
    })

    // Campaign Information state
    const [campaignInfo, setCampaignInfo] = useState({
    position: '',
    slogan: '',
    platform: '',
    campaignMaterials: null
    });

    // Biographical Information state
    const [biographicalInfo, setBiographicalInfo] = useState({
    biography: '',
    education: '',
    workExperience: ''
    });

    // Nomination Papers state
    const [nominationPapers, setNominationPapers] = useState({
    nominationForm: null
    });

    // Security Information state
    const [securityInfo, setSecurityInfo] = useState({
    username: '',
    password: ''
    });

    // Additional Information state
    const [additionalInfo, setAdditionalInfo] = useState({
    socialMediaProfiles: '',
    websiteURL: ''
    });

    const handlePersonalInfoChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleContactInfoChange = (e) => {
        const { name, value } = e.target;
        setContactInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleIdentificationInfoChange = (e) => {
        const { name, value } = e.target;
        setContactInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Event handlers for campaign info
    const handleCampaignInfoChange = (e) => {
        const { name, value } = e.target;
        setCampaignInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Event handlers for biographical info
    const handleBiographicalInfoChange = (e) => {
        const { name, value } = e.target;
        setBiographicalInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Event handlers for nomination papers
    //   const handleNominationPapersChange = (e) => {
    //     // Handle file upload
    //     const file = e.target.files[0];
    //     setNominationPapers({ nominationForm: file });
    //   };

    // Event handlers for security info
    const handleSecurityInfoChange = (e) => {
        const { name, value } = e.target;
        setSecurityInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Event handlers for additional info
    const handleAdditionalInfoChange = (e) => {
        const { name, value } = e.target;
        setAdditionalInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleSubmit = () => {
        navigate('/Candidate/login')
        console.log('Form submitted!');
    };

    return (
    <div className='mainContainer'>
        <div className="registration-header">
            <h1>Registration</h1>
        </div>
        <div className="registration-container">
            <div className="registration-section personal-information">
                <h2>Personal Information</h2>
                <div className="form-group input-group">
                    <input type="text" className="input" name="firstName" value={personalInfo.firstName} onChange={handlePersonalInfoChange} required />
                    <label className="user-label">First Name*</label>
                </div>
                <div className="form-group input-group">
                    <input type="text" className="input" name="lastName" value={personalInfo.lastName} onChange={handlePersonalInfoChange} required />
                    <label className="user-label">Last Name*</label>
                </div>
                <div className="form-group input-group">
                    <input type="date" className="input" name="dateOfBirth" value={personalInfo.dateOfBirth} onChange={handlePersonalInfoChange} required />
                    <label className="user-label"></label>
                </div>
                <div className="form-group input-group">
                <label>Gender*:</label>
                    <div className="radio-buttons-container">
                    <label>
                        <input type="radio" className="inputt" name="gender" value="male" checked={personalInfo.gender === 'male'} onChange={handlePersonalInfoChange} />
                        Male
                    </label>
                    <label>
                        <input type="radio" className="inputt" name="gender" value="female" checked={personalInfo.gender === 'female'} onChange={handlePersonalInfoChange} />
                        Female
                    </label>
                    <label>
                        <input type="radio" className="inputt" name="gender" value="other" checked={personalInfo.gender === 'other'} onChange={handlePersonalInfoChange} />
                        Other
                    </label>
                    </div>
                </div>
            </div>

            <div className="registration-section contact-information">
                <h2>Contact Information</h2>
                <div className="form-group input-group">
                    <input type="text" className="input" name="address" value={contactInfo.address} onChange={handleContactInfoChange} required />
                    <label className="user-label">Address*</label>
                </div>
                <div className="form-group input-group">
                    <input type="email" className="input" name="email" value={contactInfo.email} onChange={handleContactInfoChange} required />
                    <label className="user-label">Email Address*</label>
                </div>
                <div className="form-group input-group">
                    <input type="tel" className="input" name="phoneNumber" value={contactInfo.phoneNumber} onChange={handleContactInfoChange} required />
                    <label className="user-label">Phone Number*</label>
                </div>
            </div>

            <div className="registration-section identification-information">
                <h2>Idenification Information</h2>
                <div className="form-group input-group">
                    <input type="text" className="input" name="address" value={identificationInfo.idCardNo} onChange={handleIdentificationInfoChange} required />
                    <label className="user-label">Id Card Number*</label>
                </div>
                <div className="form-group input-group">
                    <input type="text" className="input" name="email" value={identificationInfo.passportNo} onChange={handleIdentificationInfoChange} required />
                    <label className="user-label">Passport Number*</label>
                </div>
                <div className="form-group input-group">
                    <input type="text" className="input" name="phoneNumber" value={identificationInfo.licenseNo} onChange={handleIdentificationInfoChange} required />
                    <label className="user-label">License Number*</label>
                </div>
            </div>
        </div>



        <div className='registration-container-s2'>
            <div className="registration-section campaign-information">
                <h2>Campaign Information</h2>
                <div className="form-group input-group">
                    <input type="text" className="input" name="position" value={campaignInfo.position} onChange={handleCampaignInfoChange} required />
                    <label className="user-label">Position*</label>
                </div>
                <div className="form-group input-group">
                    <input type="text" className="input" name="slogan" value={campaignInfo.slogan} onChange={handleCampaignInfoChange} required />
                    <label className="user-label">Campaign Slogan*</label>
                </div>
                <div className="form-group input-group">
                    <textarea className="input" name="platform" value={campaignInfo.platform} onChange={handleCampaignInfoChange} required />
                    <label className="user-label">Campaign Platform*</label>
                </div>
                </div>

                <div className="registration-section biographical-information">
                <h2>Biographical Information</h2>
                <div className="form-group input-group">
                    <textarea className="input" name="biography" value={biographicalInfo.biography} onChange={handleBiographicalInfoChange} required />
                    <label className="user-label">Biography*</label>
                </div>
                <div className="form-group input-group">
                    <textarea className="input" name="education" value={biographicalInfo.education} onChange={handleBiographicalInfoChange} required />
                    <label className="user-label">Education*</label>
                </div>
                <div className="form-group input-group">
                    <textarea className="input" name="workExperience" value={biographicalInfo.workExperience} onChange={handleBiographicalInfoChange} required />
                    <label className="user-label">Work Experience*</label>
                </div>
                </div>

                <div className="registration-section security-information">
                <h2>Security Information</h2>
                <div className="form-group input-group">
                    <input type="text" className="input" name="username" value={securityInfo.username} onChange={handleSecurityInfoChange} required />
                    <label className="user-label">Username*</label>
                </div>
                <div className="form-group input-group">
                    <input type="password" className="input" name="password" value={securityInfo.password} onChange={handleSecurityInfoChange} required />
                    <label className="user-label">Password*</label>
                </div>
                </div>

                <div className="registration-section additional-information">
                <h2>Additional Information</h2>
                <div className="form-group input-group">
                    <input type="text" className="input" name="socialMediaProfiles" value={additionalInfo.socialMediaProfiles} onChange={handleAdditionalInfoChange} required/>
                    <label className="user-label">Social Media Profiles</label>
                </div>
                <div className="form-group input-group">
                    <input type="url" className="input" name="websiteURL" value={additionalInfo.websiteURL} onChange={handleAdditionalInfoChange} required/>
                    <label className="user-label">Website URL</label>
                </div>
                </div>
        </div>




        <div className="container">
            <div className="button-container">
                <button className="button animated-button" onClick={handleSubmit}>
                <div className="box">SUBMIT</div>
                </button>
            </div>
            <p>If you already have an account, <a href="" onClick={() => navigate('/Candidate/login')}>login here</a>.</p>
        </div>
    </div>
  );
};

export default CandidateRegistration;
