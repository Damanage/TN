

class Like extends React.Component{
	constructor(props){
		super(props);
		this.state = {count: this.props.meta.count, animate: this.props.animate}
		
		this.handleClick = _.bind(this.handleClick, this)	
	}
	
	handleClick(){
			this.setState({count: this.state.count+1,animate: 'fa fa-heart-o animated bounceIn'})
	
			setTimeout(()=>{
				this.setState({animate:'fa fa-heart-o'})
			},500)
			
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
	this.state.count:1
}

Like.propTypes = {
	count: PropTypes.number,
	animate: PropTypes.string
}