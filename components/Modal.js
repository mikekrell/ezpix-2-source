import {useState} from 'react'
import Login from '../components/Login'
import TermsConditions from '../components/TermsConditions'

export default function Modal({isOpen}) {
    const [deactivateModal, setDeactivateModal] = useState(false)
    return (
        <div className={isOpen && !deactivateModal ? "modal is-active mb-5" : "modal mb-5"}>
            <div className="modal-background has-background-dark"></div>
            <div className="modal-content has-background-white">
                <div className="container" >
                    <div className="columns is-centered mt-3 mb-0">
                        <div style={{"textAlign" : "center"}} className="column">
                        <img src="2020 EZPix_Logo.png" width="180"></img>
                        </div>
                    </div>
                        <div className="column">
                        {/* <Login isOpen={true}></Login> */}
                        <TermsConditions setDeactivateModal={setDeactivateModal} isOpen={true}></TermsConditions>
                        </div>
                </div>
            </div>
        </div>
    )
}
