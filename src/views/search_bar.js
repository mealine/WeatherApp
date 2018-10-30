import React from 'react';

export default(props) => {
    return (
        <form onSubmit={ this.onFormSubmit } className="form-horizontal">
            <div className="row">
                <div className="col-md-10">
                    <div className="form-group">
                        <input type="text" value={ this.state.term } onChange={ this.onInputChange } className="form-control" placeholder="Type a city name"></input>
                    </div>
                </div>
                <div className="col-md-2">
                    <button type="submit" className="btn btn-primary btn-block float-right">Search</button>
                </div>
            </div>
        </form>
    )
}