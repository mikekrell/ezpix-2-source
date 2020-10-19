import { useState } from 'react'

export default function Login({ isOpen }) {
return (
    <>
    <div className="container ml-5 mr-5">
        <div className="field">
            <label className="label">School Project #</label>
            <div className="control">
                <input className="input" type="text" />
            </div>
        </div>
        <div className="field">
            <label className="label">Password</label>
            <div className="control">
                <input className="input" type="password" />
            </div>
        </div>
        <div className="field">
            <label className="label">First Name</label>
            <div className="control">
                <input className="input" type="text" />
            </div>
        </div>
        <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
                <input className="input" type="text" />
            </div>
        </div>
        <div className="field">
            <label className="label">Email</label>
            <div className="control">
                <input className="input" type="email" />
            </div>
        </div>
    </div>
        <div className="column is-fullwidth ml-5 mr-5 mt-5 is-pulled-right mb-5">
            <div className="field is-grouped">
                <p className="control">
                    <button className="button is-link">
                        Start Uploading
                    </button>
                </p>
            </div>
        </div>
    </>
)
}
