import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import "./App.css";

class App extends React.Component{

    state = {
        videos: [],
        selectedVido: null
    }

    componentDidMount(){
        this.onTermSubmit('Hololive');
    }

    onTermSubmit =async (term)=>{
     const response = await youtube.get('/search',{
            params: {
                q: term
            }
        });

        this.setState({videos: response.data.items,
            selectedVido: response.data.items[0]
        });

    };

    onVideoSelect = (video) =>{
        this.setState({selectedVido: video});
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>

                <div className="">
                    <div className="videos-container">
                        <div className="player">
                        <VideoDetail video={this.state.selectedVido}/>
                        </div>
                        <div className="lists">
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos }/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;