'use strict';

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

// };  Версия,где объект с данными получается через свойства. 


var BlogList = function BlogList(_ref) {
	var blogData = _ref.blogData;
	return React.createElement('div', { className: 'blogList' }, _.map(blogData, function (item, key) {
		return React.createElement(BlogItem, { key: key, imgLink: '' + item.link, blogText: '' + item.text });
	}));
};