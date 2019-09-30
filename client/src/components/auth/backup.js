<form className="form-box" noValidate onSubmit={this.onSubmit}>
  <div class="cols">
    <div className="input-field">
      <label htmlFor="name">Name</label>
      <input
        onChange={this.onChange}
        value={this.state.name}
        id="name"
        type="text"
      />
    </div>
    <div className="input-field">
      <label htmlFor="company">Company</label>
      <input
        onChange={this.onChange}
        value={this.state.company}
        id="company"
        type="text"
      />
    </div>
    <div className="input-field">
      <label htmlFor="jobTitle">Job Title</label>
      <input
        onChange={this.onChange}
        value={this.state.jobTitle}
        id="jobTitle"
        type="text"
      />
    </div>
    <div className="input-field">
      <label htmlFor="address">address</label>
      <input
        onChange={this.onChange}
        value={this.state.address}
        id="address"
        type="text"
      />
    </div>
    <div className="input-field">
      <label htmlFor="mobileNo">Mobile Number</label>
      <input
        onChange={this.onChange}
        value={this.state.mobileNo}
        id="mobileNo"
        type="text"
      />
    </div>
    <div className="input-field">
      <label htmlFor="officeNo">Office Number</label>
      <input
        onChange={this.onChange}
        value={this.state.officeNo}
        id="officeNo"
        type="text"
      />
    </div>
    <div className="input-field">
      <label htmlFor="faxNo">Fax Number</label>
      <input
        onChange={this.onChange}
        value={this.state.faxNo}
        id="faxNo"
        type="text"
      />
    </div>
  </div>
  <div class="cols">
    <div className="input-field">
      <label htmlFor="email">Email</label>
      <input
        autocomplete="off"
        onChange={this.onChange}
        value={this.state.email}
        id="email"
        type="email"
      />
    </div>
    <div className="input-field">
      <label htmlFor="password">Password</label>
      <input
        autocomplete="new-password"
        onChange={this.onChange}
        value={this.state.password}
        id="password"
        type="password"
      />
    </div>
    <div className="input-field">
      <label htmlFor="password2">Confirm Password</label>
      <input
        onChange={this.onChange}
        value={this.state.password2}
        id="password2"
        type="password"
      />
    </div>
    <button className="submit-btn" type="submit" onClick={this.onSubmit}>
      Register
    </button>
  </div>
</form>;
