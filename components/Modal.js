import {useState} from 'react'


export default function Modal({isOpen}) {
    const [deactivateModal, setDeactivateModal] = useState(false)
    return (
        <div className={isOpen && !deactivateModal ? "modal is-active mb-5" : "modal mb-5"}>
            <div className="modal-background has-background-dark"></div>
            <div className="modal-content has-background-white">
                <div className="container">
                    <div className="columns is-centered mt-5">
                        <div style={{"textAlign" : "center"}} className="column">
                        <img src="2020 EZPix_Logo.png" width="180"></img>
                        </div>
                    </div>
                        <div className="column">
                            <div className="container ml-5 mr-5">
                            <div className="field">
                                <label className="label">School Project #</label>
                                <div className="control">
                                    <input className="input" type="text" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Last Name</label>
                                <div className="control">
                                    <input className="input" type="email" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input className="input" type="email" /> 
                                </div>
                            </div>
                             <div className="field">
                            <label className="label">Password</label>
                            <div className="control">
                                <input className="input" type="password"  />
                            </div>
                            </div>
                            </div>
                        </div>
                </div>
                <div className="column is-fullwidth ml-5 mr-5 is-pulled-right mb-5">
                    <div class="field is-grouped">
                        <p class="control">
                            <button onClick={() => setDeactivateModal(true)} class="button is-link">
                                Start Uploading!
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
