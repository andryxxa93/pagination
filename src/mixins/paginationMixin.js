const paginationMixin = {
    paginate: function () {
        const activeCurrentPage = this.getActiveCurrentPage() - 1;
        const start = (this.state.itemsPerPage * activeCurrentPage);
        const end = (activeCurrentPage + 1) * this.state.itemsPerPage;
        return this.state.universities.slice(start, end);
    },
    getActiveCurrentPage() {
        return typeof this.state.activePage === 'boolean' ?
            this.state.totalItems =
                Math.ceil(Number(this.state.activePage
                        * this.state.itemsPerPage)
                    + (this.state.universities
                        - this.state.totalItems
                        * this.state.itemsPerPage * this.state.activePage)) :
            this.state.activePage
    }
}

export { paginationMixin }
