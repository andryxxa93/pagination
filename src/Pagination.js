import React from 'react';

class Pagination extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
        };
    }

    handleClick(pageNumber) {
        this.setState({
            currentPage: pageNumber
        });
        this.props.onPageChange(pageNumber)
    }

    render() {
        const self = this;
        const {currentPage} = this.state;
        const {itemsPerPage, totalItems} = this.props;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        return (
            <div className="pagination">
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        onClick={function() {
                            self.handleClick(number)
                        }}
                        className={number === currentPage ? 'active' : ''}>
                        {number}
                    </button>
                ))}
            </div>
        );
    }
}


export default Pagination;
