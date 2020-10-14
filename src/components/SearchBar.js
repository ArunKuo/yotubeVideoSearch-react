import React from 'react';

class SearchBar extends React.Component {

    state= {term: ""};

    // 自定義Function
    onInputChange = (event) =>{
      this.setState({term: event.target.value});
    };

    onFormSubmit = (event)=>{
        event.preventDefault();
        
        // TOD: 確認 從parent元件呼叫callback 
        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return (
        <div className="search-bar ui segment">
           <form onSubmit={this.onFormSubmit}  className="ui form">
                <div className="field">
                    <label>影片搜尋</label>
                    <input 
                    type="text"  
                    value={this.state.term} 
                    onChange={this.onInputChange}     
                    placeholder="搜尋"               
                    />
                </div>
           </form>
        </div>
        )
    }
}

export default SearchBar;