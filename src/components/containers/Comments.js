import React, {Component} from 'react'
import Comment from '../presentation/Comment'

class Comments extends Component {
	constructor() {
		super()
		this.state = {
				comment: {
					username: '',
					body: ''
				},
				list: [
					// {body: 'Comment 1', username: 'dtrump'},
					// {body: 'Comment 2', username: 'gbush'},
					// {body: 'Comment 3', username: 'bobama'},
					// {body: 'Comment 4', username: 'ahitler'}
				]
		}
	}
	submitComment() {
		// let updatedComment = Object.assign({}, this.state.comment)
		// updatedComment['timestamp'] = new Date()

		// this.setState({
		// 	comment: updatedComment
		// })
		console.log('comment submitted:' + JSON.stringify(this.state.comment))

		let updatedList = Object.assign([], this.state.list)
		updatedList.push(this.state.comment)
		this.setState({
			list: updatedList
		})

	}
	updateUsername(event) {
		console.log('updateUsername:' + event.target.value)
		// this.state.comment['username'] = event.target.value  //Wrong way
		let updatedComment = Object.assign({}, this.state.comment)
		updatedComment['username'] = event.target.value

		this.setState({
			comment: updatedComment
		})

	}
	updateBody(event) {
		console.log('updateBody:' + event.target.value)
		let updatedComment = Object.assign({}, this.state.comment)
		updatedComment['body'] = event.target.value

		this.setState({
			comment: updatedComment
		})

	}
	render() {
		const listItems = this.state.list.map((comment, index) => {
			return (
					<li key={index}><Comment currentComment={comment} /></li>
				)
		})
		return (
			<div>
			    <div style={{padding:12, background:"#f9f9f9", border:"1px solid #ddd"}}>
				    <ol>
						{listItems}
					</ol>
					<input onChange= {this.updateUsername.bind(this)} className="form-control" type="text" placeholder="Username"/>
					<input onChange= {this.updateBody.bind(this)} className="form-control" type="text" placeholder="Comment"/>
					<button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
			    </div>				
			</div>
		)
	}
}

export default Comments