
export default function landing() {
    return (
        <div className="__container">
            <div className="__wrapper">
                <div className="__logo">
                    <img className="__logo_balfour" src="logo.png" alt="balfour logo" />
                </div>
            </div>
                <div className="__nav">
                </div>
            <div className="__wrapper">
                <div className="__row">
                    <div className="__column_50 __hero-image">
                        <img src="233081.jpeg" height="400"/>
                    </div>
                    <div className="__column_50 __form_col">
                        <img className="__logo_ezpix" src="2020 EZPix_Logo.png" />
                    <p className="__landing_text">Welcome to EZpix. The easy way to get your student photos to your school's yearbook staff.</p><br/>
                        <p className="__landing_text">Enter the Yearbook Project and Password below to get started.</p>
                        <p className="__landing_text">If you need assistance, contact you school's yearbook adviser.</p>
                    <form className="__form">
                        <div className="field">
                                <label className="__label">Yearbook Project:</label>
                            <div className="control">
                                <input className="__ez_input " type="text" />
                            </div>
                        </div>
                        <div className="field">
                                <label className="__label">Password: </label>
                            <div className="control">
                                <input className="__ez_input " type="text" />
                            </div>
                        </div>
                        <div className="__button">Login</div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


<div className="content-panel">
    <label>Yearbook Project:</label>
    <input className="ez_input" type="text" autoFocus value={state.project} onChange={e => { this.ybChanged(e.target.value); }} />
    <label>Password:</label>
    <input className="ez_input" type="password" value={state.passwd} onChange={e => { this.pwChanged(e.target.value); }} />
    <button className="img-label img-label-submit loginBtn" onClick={e => { this.validateLogin(); }}>Submit</button>
    {!state.validated ? <label className="invalid-login">Validation failed</label> : ""}
</div>