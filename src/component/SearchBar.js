import React from 'react';

class SearchBar extends React.Component{
    state = {term: ''};

    onInputChange=(event)=>{
        this.setState({term: event.target.value});
    };

    onFormSubmit = (event) =>{
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return (
            <div className="search-bar ui segment" style={{ marginTop: '20px' }}>
                <div className="ui grid container">
                    <div className="ui row">
                        <div className="ui fourteen wide column">
                            <form onSubmit={this.onFormSubmit} className="ui form">
                                <div className="field">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        value={this.state.term}
                                        onChange={this.onInputChange}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="ui two wide column">
                            <button onClick={this.onFormSubmit} className="ui blue button"><i class="search icon"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }
}

export default SearchBar;