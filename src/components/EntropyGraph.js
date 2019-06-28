import React from 'react';
import PropTypes from 'prop-types';

const avgColor = nodes =>
  nodes.reduce((sum, node) => sum += node.color, 0) / nodes.length

const EntropyGraph = ({width, height, relmodel: {maxEntropy, minEntropy, entropy, nodes}}) => <svg
  id="entropy"
  width={width}
  height={height}
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink">
  <rect
    style={{fill:`hsl(${avgColor(nodes)}, 100%, 50%)`}}
    x={0}
    y={0}
    width={(1 - (entropy - minEntropy) / (maxEntropy - minEntropy)) * width }
    height={20}
    />
</svg>

const {func, shape, object, string, number, arrayOf} = PropTypes;

EntropyGraph.propTypes = {
  width: number,
  height: number,
  nodes: arrayOf(number)
};

export default EntropyGraph;
