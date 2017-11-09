import React, {DOM} from 'react';
import _ from 'lodash';
import BlogItem from './blogItem';

const BlogList = ({blogData})=>(
		React.createElement(
			'div',
			{className:'blogList'},
				_.map(blogData,(item, key)=>(
						React.createElement(BlogItem,{key, imgLink:`${item.link}`, blogText:`${item.text}`})
						)
					)
		)
	) 

export default BlogList


// class BlogList extends React.Component{

// 	render(){
// 		return React.createElement(
// 			'div',
// 			{className:'blogList'},
// 				_.map(this.props.blogData,(item, key)=>(
// 						)
// 						React.createElement(BlogItem,{key, imgLink:item.link, blogText:item.text})
// 					)
// 		)
// 	};  

// };  Версия,где объект получает даенные  через свойства. 