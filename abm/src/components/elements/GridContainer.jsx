import PropTypes from 'prop-types';

const GridContainer = ({ items }) => {

  const maxRow = Math.max(...items.map((item) => item.row));
  const maxCol = Math.max(...items.map((item) => item.col));

  const gridStyle = {
    display: 'grid',
    gridTemplateRows: `repeat(${maxRow + 1}, auto)`,
    gridTemplateColumns: `repeat(${maxCol + 1}, 1fr)`,
    gap: '2rem',
  };

  const aux = {};
  for (const { col, row } of items) {
    if (!(row in aux)) {
      aux[row] = col;
    } else if (col > aux[row]) {
      aux[row] = col;
    }
  }

  return (
    <div style={gridStyle}>
        {
            items.map(({ content, row, col }, index) => (
                    <div
                        key={index}
                        style={
                            {
                                gridRow: row + 1,
                                gridColumn: col + 1,
                                gridColumnEnd: col === aux[row] && col < maxCol ? `span ${maxCol + 1}` : 'auto',
                                border: "solid",
                            }
                        }
                        >
                        {content}
                    </div>
                ),
            )
        }
    </div>
  );
};

// Define las props esperadas
GridContainer.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node.isRequired,
      row: PropTypes.number.isRequired,
      col: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default GridContainer;
