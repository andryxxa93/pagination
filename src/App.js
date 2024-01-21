import React from 'react';
import ApiMixinFactory from './mixins/apiMixin'
import tableMixin from "./mixins/tableMixin";
import { paginationMixin } from "./mixins/paginationMixin";
import Pagination from "./Pagination";
import createClass from 'create-react-class';
import * as $ from 'jquery';

const apiMixin =  new ApiMixinFactory().getApiMixin($.ajax)
const App = createClass({
    mixins: [
        tableMixin,
        paginationMixin,
        apiMixin
    ],
    render() {
            const self = this;
            const table = self.renderTable(self.paginate());
        return (
                <div>
                    <label htmlFor="#search">Поиск</label>
                    <br/>
                    <input id="search" onChange={self.handleSearchChange} type="string" value={this.state.value}/>
                    <div>
                        {table}
                    </div>
                    <Pagination
                        itemsPerPage={10}
                        totalItems={this.state.universities.length}
                        onPageChange={(page) => {
                            self.handleClick(page)
                        }}
                    />
                    <div>{this.state.color}</div>
                </div>
            )
        }
});

export {App}
