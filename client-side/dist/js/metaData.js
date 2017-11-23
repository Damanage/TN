'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MetaData = function (_React$Component) {
	_inherits(MetaData, _React$Component);

	function MetaData() {
		_classCallCheck(this, MetaData);

		return _possibleConstructorReturn(this, (MetaData.__proto__ || Object.getPrototypeOf(MetaData)).apply(this, arguments));
	}

	_createClass(MetaData, [{
		key: 'render',
		value: function render() {
			var _props$meta = this.props.meta,
			    date = _props$meta.date,
			    name = _props$meta.name,
			    changeDate = _props$meta.changeDate;

			return React.createElement('div', { className: 'metaData' }, React.createElement('span', { className: 'name' }, name), React.createElement('span', {}, date), React.createElement('span', {}, 'last change: ' + changeDate));
		}
	}]);

	return MetaData;
}(React.Component);

MetaData.propTypes = {
	meta: PropTypes.shape({
		name: PropTypes.string,
		date: PropTypes.string,
		changeDate: PropTypes.string
	})
};
MetaData.defaultProps = {
	meta: {
		name: 'place for name',
		date: 'place for date',
		changeDate: 'place for changing date'
	}
};