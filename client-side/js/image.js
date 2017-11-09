const DOM = React.DOM;

 class BlogImage extends React.Component{
	 render(){
		 return React.createElement(

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
