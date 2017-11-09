
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

// };  Версия,где объект с данными получается через свойства.. 


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

