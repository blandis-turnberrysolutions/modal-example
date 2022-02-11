import PropTypes from 'prop-types';

export function MyContent({ testProp }) {
    return (<h1>{testProp}</h1>)
}

MyContent.propTypes = {
    testProp: PropTypes.number.isRequired
}