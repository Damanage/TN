
class BlogItem extends React.Component{
	render(){
		return React.createElement(

			 'div',
			 {className:'blogItem'},
			 React.createElement(BlogImage, {link:`${this.props.imgLink}`}),
			 React.createElement(TextBox, {text: `${this.props.blogText}`})
		)
	}
};


