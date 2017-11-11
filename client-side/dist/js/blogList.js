'use strict';

var BlogList = function BlogList(_ref) {
	var blogData = _ref.blogData;
	return React.createElement('div', { className: 'blogList' }, _.map(blogData, function (item, key) {
		return React.createElement(BlogItem, { key: key, imgLink: '' + item.link, blogText: '' + item.text });
	}));
};