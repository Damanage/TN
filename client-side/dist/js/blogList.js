'use strict';

var BlogList = function BlogList(_ref) {
	var blogData = _ref.blogData;
	return React.createElement('div', { className: 'blogList' }, _.map(blogData, function (item, key) {
		return React.createElement(BlogItem, { key: key,
			imgLink: '' + item.link,
			blogText: '' + item.text,
			meta: {
				name: '' + item.meta.name,
				date: '' + item.meta.date,
				changeDate: '' + item.meta.changeDate
			}
		});
	}));
};

BlogList.propTypes = {
	blogData: PropTypes.arrayOf(PropTypes.shape({
		link: PropTypes.string,
		text: PropTypes.string,
		meta: PropTypes.shape({
			name: PropTypes.string,
			date: PropTypes.string,
			changeDate: PropTypes.string
		})
	}))
};