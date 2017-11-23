const {bind} = _;

class Like extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {count: props.count,
								  animate: props.animate}
		
		this.handleClick = _.bind(this.handleClick, this)	
	}
	
	handleClick(e){
			const step = e.shiftKey ? 10 : 1
			this.setState({count: this.state.count + step, animate: 'fa fa-heart-o animated bounceIn'})
			setTimeout(()=>{
				this.setState({animate:'fa fa-heart-o'})
			},200)
			
		}
	
	render(){
		return React.createElement('div',{className:'like'},
			React.createElement('i',{onClick: this.handleClick,
				 className: `${this.state.animate}`,
				 areahidden:'true'
					}
				),
			React.createElement('span',{className:'count'},`${this.state.count}`))
	}
}

Like.defaultProps={
	animate:'fa fa-heart-o',
	count:1
}

Like.propTypes = {
	count: PropTypes.number,
	animate: PropTypes.string
}