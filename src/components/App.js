import React, { Component } from 'react';
import NewsList from '../containers/news_list';
import NewsPanel from '../containers/news_panel';
import { Input } from 'antd';
import './App.css';
import actions from '../redux/data/actions';
import { connect } from 'react-redux';
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 50 }} spin />;
const { search, fetchNewsData } = actions;
const Search = Input.Search;



class App extends Component {
	constructor() {
		super();
		this.state = {loaded: false, activeArticle: {}}
	}

	componentWillMount() {
		this.props.fetchNewsData(() => this.setState({loaded:true}));
	}

    render() {
	    return (
	        <div>
			    <div className="main-search-bar">
			        <Search placeholder="Enter A News Search Keyword" enterButton="Search" size="large" onSearch={value => this.searchNews(value)}/>
			    </div>
		        {(this.state.loaded)?<div className="App">
					    <NewsList />
					    <NewsPanel />
		        </div>:<div className="load-spin">
			        <Spin indicator={antIcon}/>
			        </div>}
		    </div>
	    );
    }


    searchNews(keyword) {
		if(keyword !== '') {
			this.setState({loaded: false});
			this.props.search(keyword, () => {
				this.setState({loaded: true});
			})
		}
    }


}


export default connect(undefined, { search, fetchNewsData })(App);
