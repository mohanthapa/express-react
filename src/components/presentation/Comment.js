import React, {Component} from 'react'

class Comment extends Component {

	render() {
		return (
			<div>
				<h2>
					<a href="#">{this.props.currentComment.username} </a>
				</h2>
				<span>{this.props.currentComment.body}</span>
			</div>
		)
	}
}

export default Comment