const BlogList = ({blogData})=>(
		React.createElement(
			'div',
			{className:'blogList'},
				_.map(blogData,(item, key)=>(
					React.createElement(BlogItem,{key,
						imgLink:`${item.link}`, 
						blogText:`${item.text}`,
						meta:{
							name:`${item.meta.name}`,
							date:`${item.meta.date}`,
							changeDate:`${item.meta.changeDate}`,
							count:item.meta.count
							},

						}
					)
				)
			)
		)
	) 


BlogList.propTypes={
	blogData: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			text: PropTypes.string,
			meta: PropTypes.shape({
				name: PropTypes.string,
				date: PropTypes.string,
				changeDate: PropTypes.string,
				count: PropTypes.number
			})
		})
	)
}

