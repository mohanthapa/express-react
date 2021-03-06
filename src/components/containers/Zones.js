import React, {Component} from 'react'
import Zone from '../presentation/Zone'
import superagent from 'superagent'
class Zones extends Component {

	constructor() {
		super()
		this.state = {
			zone: {
				name: '',
				zipCode: ''
			},
				list: [
					// {name: 'Zone 1', zipCode: '10012', numComments: 10},
					// {name: 'Zone 2', zipCode: '10013', numComments: 20},
					// {name: 'Zone 3', zipCode: '10014', numComments: 30},
					// {name: 'Zone 4', zipCode: '10015', numComments: 40},
					// {name: 'Zone 5', zipCode: '10016', numComments: 50}
				]
		}
	}

	componentDidMount() {
		console.log('componentDidMount')
		superagent
		.get('/api/zone')
		.query(null)
		.set('Accept', 'application/json')
		.end((err,response)=>{
			if(err){
				alert('ERROR: '+err)
			}

			console.log(JSON.stringify(response.body))
			let results = response.body.results
			this.setState({
				list: results
			})
		})
	}

    updateZone(event) {
    	console.log('updateZone:' + event.target.id + '==' + event.target.value)
    	let updatedZone = Object.assign({}, this.state.zone)
    	updatedZone[event.target.id] = event.target.value
    	this.setState({
			zone: updatedZone
		})

    }
    addZone() {
    	console.log('Add Zone:' + JSON.stringify(this.state.zone))
    	let updatedList = Object.assign([], this.state.list)
    	updatedList.push(this.state.zone)
    	this.setState ({
    		list: updatedList
    	})
    }

	render() {
		const listItems = this.state.list.map((zone, index) => {
			return (
					<li key={index}><Zone currentZone={zone} /></li>
				)
		})
		return (
             <div>
             	<ol>
                	{listItems}
             	</ol>
				<input id="name" onChange= {this.updateZone.bind(this)} className="form-control" type="text" placeholder="Name"/>
				<input id= "zipCode" onChange= {this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zipcode"/>
				<button onClick={this.addZone.bind(this)} className="btn btn-info">Add Zone</button>
			 </div>

			)
			
		
	}
}

export default Zones

