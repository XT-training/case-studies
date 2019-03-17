import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Pagination extends React.PureComponent {
  static propTypes = {
    fetchData: PropTypes.func,
    itemsperpage: PropTypes.number,
    count: PropTypes.number,
    startindex: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.currentPage = 1;
  }

  handlePageClick(index) {
    const { fetchData, itemsperpage } = this.props;
    fetchData({
      startindex: (index - 1) * itemsperpage,
      itemsperpage,
    });
  }

  handlePrev() {
    if (this.currentPage > 1) {
      this.handlePageClick(this.currentPage - 1);
    }
  }

  handleNext() {
    const { count, itemsperpage } = this.props;
    const totalPages = Math.ceil(count / itemsperpage);
    if (this.currentPage < totalPages) {
      this.handlePageClick(this.currentPage + 1);
    }
  }

  render() {
    const { count, itemsperpage, startindex } = this.props;

    this.currentPage = startindex / itemsperpage + 1;

    const totalPages = Math.ceil(count / itemsperpage);
    if (totalPages < 2) {
      return null;
    }
    let pagesArray = [];
    if (this.currentPage === 1) {
      pagesArray = [
        this.currentPage,
        this.currentPage + 1,
        this.currentPage + 2,
      ];
    } else if (this.currentPage === totalPages) {
      pagesArray = [
        this.currentPage - 2,
        this.currentPage - 1,
        this.currentPage,
      ];
    } else {
      pagesArray = [
        this.currentPage - 1,
        this.currentPage,
        this.currentPage + 1,
      ];
    }
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li
            key="previous-page"
            className={classNames('page-item', {
              disabled: this.currentPage === 1,
            })}
          >
            <button
              type="button"
              className="page-link"
              aria-label="Previous"
              onClick={() => this.handlePrev()}
            >
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </button>
          </li>
          {pagesArray.map(pageNumber => (
            <li
              key={`page_${pageNumber}`}
              className={classNames('page-item', {
                active: this.currentPage === pageNumber,
              })}
            >
              <button
                type="button"
                className="page-link"
                onClick={() => this.handlePageClick(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          ))}
          <li
            key="next-page"
            className={classNames('page-item', {
              disabled: this.currentPage === totalPages,
            })}
          >
            <button
              type="button"
              className="page-link"
              aria-label="Next"
              onClick={() => this.handleNext()}
            >
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
