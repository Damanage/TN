'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Like = function (_React$Component) {
	_inherits(Like, _React$Component);

	function Like(props) {
		_classCallCheck(this, Like);

		var _this = _possibleConstructorReturn(this, (Like.__proto__ || Object.getPrototypeOf(Like)).call(this, props));

		_this.state = { count: _this.props.meta.count, animate: _this.props.animate };

		_this.handleClick = _.bind(_this.handleClick, _this);
		return _this;
	}

	_createClass(Like, [{
		key: 'handleClick',
		value: function handleClick() {
			var _this2 = this;

			this.setState({ count: this.state.count + 1, animate: 'fa fa-heart-o animated bounceIn' });

			setTimeout(function () {
				_this2.setState({ animate: 'fa fa-heart-o' });
			}, 500);
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement('div', { className: 'like' }, React.createElement('i', { onClick: this.handleClick,
				className: '' + this.state.animate,
				areahidden: 'true'
			}), React.createElement('span', { className: 'count' }, '' + this.state.count));
		}
	}]);

	return Like;
}(React.Component);

Like.defaultProps = {
	animate: 'fa fa-heart-o',
	count: 1
};

Like.propTypes = {
	count: PropTypes.number,
	animate: PropTypes.string
};