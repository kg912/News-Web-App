import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import './news_panel.css';
import moment from "moment/moment";



class NewsPanel extends Component {
	constructor() {
		super();
	}


	render() {
		const { activeArticle: { title, url, urlToImage, description, source, publishedAt } } = this.props;

		if(title) {
			return (
				<div className="news-panel w3-center w3-animate-right">
					<Card title={<span style={{fontSize: '1.5em'}}>{title}</span>} bordered={false}>
						<img className="img" src={urlToImage}/>
						<div className="desc">{description}</div>
						<div className="parent">
							{this.renderTime(publishedAt)}
							<a className="right" href={url} target="_blank">Read Full Article on {source.name}></a>
						</div>
					</Card>
				</div>
			);
		}
		else {
			return (
				<div className="news-panel no-article-selected">
					<h2 style={{color: '#069'}}>Select a News Article</h2>
				</div>
			)
		}
	}

	renderTime(time) {
		return (
				<div className="left">{moment(time).fromNow()}</div>
		)
	}
}

function mapStateToProps({ activeArticle }) {
	return {
		activeArticle
	}
}
export default connect(mapStateToProps)(NewsPanel);
