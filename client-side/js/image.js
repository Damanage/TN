
 class BlogImage extends React.Component{
	 render(){
		 return this.props.link ==='undefined' || React.createElement(
				'img',
				{
					src: `${this.props.link}` ,              
					width:'250px',
					height: '250px',
					alt:'rodriguez'
				}
			 			 
			 )
	 }
 };
BlogImage.defaultProps = {
	link: 'https://vignette.wikia.nocookie.net/en.futurama/images/7/70/BenderTheOffender.jpg/revision/latest/scale-to-width-down/250?cb=20110614181253'
}
BlogImage.propTypes = {
	link: PropTypes.string
}