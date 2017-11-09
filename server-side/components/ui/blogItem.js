import React, {DOM} from 'react';
import TextBox from './textBox';
import BlogImage from './image';

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
export default BlogItem;

