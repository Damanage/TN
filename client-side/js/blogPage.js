class BlogPage extends React.Component{

	constructor(props){
		super(props);

		this.state = {blogData};

	};

	render(){
		const {blogData} = this.state;

		return React.createElement(BlogList, {blogData})
	}
}


ReactDOM.render(React.createElement(BlogPage), document.getElementById('app'))


