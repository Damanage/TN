

class BlogItem extends React.Component{
	

	render(){
		

		return React.createElement(
			'div',
			{className:'blogItem'},
			React.createElement(MetaData, _.assign({},this.props)),
			React.createElement(BlogMessage, _.assign({},this.props)),
			React.createElement(Like, _.assign({}, this.props))
		)
		
	}
};

BlogItem.propTypes = {
	meta: PropTypes.object,
	blogText: PropTypes.string,
	imgLink: PropTypes.string
}




