class MetaData extends React.Component{
	render(){
		const {date, name, changeDate} = this.props.meta;
		return React.createElement('div',{className:'metaData'},
			React.createElement('span',{className:'name'},name),
			React.createElement('span',{},date),
			React.createElement('span',{}, 'last change: ' + changeDate)
		)
	}
}

MetaData.propTypes = {
	meta: PropTypes.shape({
		name: PropTypes.string,
		date: PropTypes.string,
		changeDate: PropTypes.string
	})
}
MetaData.defaultProps = {
	meta:{
		name: 'place for name',
		date: 'place for date',
		changeDate: 'place for changing date'
	}
}