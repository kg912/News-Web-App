import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import './news_list.css';
import { connect } from 'react-redux';
import { Card } from 'antd';
import dataActions from '../redux/data/actions';
import articleActions from '../redux/article/actions';
import { Input } from 'antd';
import moment from 'moment';

const { selectArticle } = articleActions;
const { fetchNewsData, search } = dataActions;
const Search = Input.Search;



class NewsList extends Component {

	constructor() {
		super();
		this.state = {
			news: []
		}
	}

	onNewsClick(item) {
		this.props.selectArticle(item);
	}

	filterNews(value) {
		const news = this.props.news.filter(item => {
			if(item.title.toLowerCase().includes(value.toLowerCase())) {
				return item;
			}
		});
		this.setState({news});
		if(value === '') {
			this.setState({ news: this.props.news })
		}
	}

	componentWillMount() {
		const { news } = this.props;
		console.log(this.props.news);
		this.setState({ news });
	}


	render() {
			const { news } = this.state;
			return (
				<Card className='list'>
					<Search
						placeholder="Filter News Articles"
						onChange={(e) => this.filterNews(e.target.value)}
						style={{ width: '100%' }}
					/>
					<List
						itemLayout="horizontal"
						dataSource={news}
						renderItem={item => (
							<div className="parent">
								<List.Item
									extra={this.renderTime(item.publishedAt)}
									onClick={() => {this.onNewsClick(item)}}
								>
									<List.Item.Meta
										avatar={<Avatar src={item.urlToImage}/>}
										title={item.title}
										description={item.description}
										style={{ cursor: 'pointer'}}
									/>
								</List.Item>
							</div>
						)}
					/>
				</Card>
			);
		}

		renderTime(time) {
			return (
				<div className="right-time">{moment(time).fromNow()}</div>
			)
		}

}

function mapStateToProps({ news }) {
	return {
		news
	}
}


export default connect(mapStateToProps, { fetchNewsData, selectArticle, search })(NewsList);
