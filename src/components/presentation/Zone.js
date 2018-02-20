import React, {Component} from 'react'
import styles from './styles'

class Zone extends Component {
	
	render() {
		const styleZone = styles.zone
		const zipCode = this.props.currentZone.zipCodes[0]
		return (

             <div style= {styleZone.container} >
				<h2 style={{marginBottom: 0, marginTop:0}}>
					<a style={{textDecoration: 'none', color: 'red'}} href="#">{this.props.currentZone.name} </a>
				</h2>
				<span className="detail">{zipCode}</span><br/>
				<span className="detail">{this.props.currentZone.numComments} comments</span>
			</div>

			)
			
		
	}
}

export default Zone