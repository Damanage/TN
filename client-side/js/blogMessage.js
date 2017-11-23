class BlogMessage extends React.Component{
	render(){
		const {imgLink, blogText} = this.props;

		return React.createElement('div',{className:'blogMessage'},
			React.createElement(BlogImage, {link:imgLink}),
			React.createElement(TextBox, {text:blogText})
		)

	}
}
BlogMessage.propTypes = {
	blogText: PropTypes.string,
	imgLink: PropTypes.string
}