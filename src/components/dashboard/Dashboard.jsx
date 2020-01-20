import React from 'react';
import ToolBar from '../headerBarComponent/headerbar';
import Footer from "../footerComponent/Footer";
import GridView from '../gridViewComponent/GridView.jsx/index.js.js.js';
import CustomPaginationActionsTable from '../paginationComponent/Pagination';
import LowerBar from '../lowerBarComponent/LowerBar';

class home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
        }
    }

    render() {
        return (
            <div>
                <ToolBar />
                <div style={{ width: '74%', margin: 'auto' }}>
                    <LowerBar />
                    <GridView />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3%', marginTop: '2%' }}>
                    <CustomPaginationActionsTable />
                </div>
                <Footer />
            </div>
        );
    }

}

export default home;