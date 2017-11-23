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

