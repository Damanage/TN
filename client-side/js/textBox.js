
class TextBox extends React.Component{
	render(){
		return this.props.text==='undefined' ||  React.createElement('span',{},`${this.props.text}`)
	}
};

TextBox.propTypes = {
	text: PropTypes.string
}
TextBox.defaultProps = {
	text: "Lorem Ipsum"
}