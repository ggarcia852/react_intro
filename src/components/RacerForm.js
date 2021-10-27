import React from "react";

export const RacerForm = (props) => {
    return(
        <div>
            <form onSubmit={props.handleForm}>
                <div className="form-group">
                    <label htmlFor="season" className="form-label">Enter a Season:</label>
                    <input type="text" className="form-control" id="season" placeholder="Season" />
                    <label htmlFor="round" className="form-label">Enter a Round:</label>
                    <input type="text" className="form-control" id="round" placeholder="Round" />
                    <input type="submit" className="btn btn-primary" />
                </div>
            
            </form>
            <br></br>
        </div>
    )
}