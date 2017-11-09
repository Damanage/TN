import React from 'react';
import BlogList from '../ui/blogList'

const blogData =[

	{
		link: 'https://avatars2.githubusercontent.com/u/1045011?s=460&v=4',
		 text: 'TThis is the worst kind of discrimination there is: the kind against me!'
	},
	{
		link: 'https://vignette.wikia.nocookie.net/en.futurama/images/8/87/Bender_chasing_Tanya.jpg/revision/latest/zoom-crop/width/240/height/240?cb=20170828195903',
		 text: 'Afterlife? If I thought I had to live another life, I’d kill myself right now!'
	},
	{
		link: 'https://vignette.wikia.nocookie.net/villains/images/8/8f/The_Bender.jpg/revision/latest/scale-to-width-down/250?cb=20150929221610',
		 text: 'I’m Bender, baby! Oh god, please insert liquor!'
	},


];


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

export default BlogPage