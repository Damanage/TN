'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogImage = function (_React$Component) {
	_inherits(BlogImage, _React$Component);

	function BlogImage() {
		_classCallCheck(this, BlogImage);

		return _possibleConstructorReturn(this, (BlogImage.__proto__ || Object.getPrototypeOf(BlogImage)).apply(this, arguments));
	}

	_createClass(BlogImage, [{
		key: 'render',
		value: function render() {
			return this.props.link === 'undefined' || React.createElement('img', {
				src: '' + this.props.link,
				width: '250px',
				height: '250px',
				alt: 'rodriguez'
			});
		}
	}]);

	return BlogImage;
}(React.Component);

;
BlogImage.defaultProps = {
	link: 'https://vignette.wikia.nocookie.net/en.futurama/images/7/70/BenderTheOffender.jpg/revision/latest/scale-to-width-down/250?cb=20110614181253'
};
BlogImage.propTypes = {
	link: PropTypes.string
};