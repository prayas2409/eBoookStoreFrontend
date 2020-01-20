import React from 'react';
import ToolBar from '../headerBarComponent/headerbar';
import Footer from "../footerComponent/Footer";
import GridView from '../gridViewComponent/GridView';
import CustomPaginationActionsTable from '../paginationComponent/Pagination';
import LowerBar from '../lowerBarComponent/LowerBar';
import { getMethod } from '../../service/httpService.js';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
        this.setbooks = this.setbooks.bind(this)
    }

    componentDidMount() {
        this.getAllBooks ();
    }

    setbooks(newbooks) {
        console.log("dasg",newbooks.data);
        this.setState({
            books:newbooks.data
        })
    }

    getAllBooks = () => {
        let path = {
            path: "books?pageNo=1"
        }
        getMethod(path).then((res) => {
            this.setState({ books: res.data.data });
            console.log("books", this.state.books);
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <ToolBar function={this.setbooks}/>
                <div style={{ width: '74%', margin: 'auto' }}>
                    <LowerBar data={this.state.books.length}/>
                    <GridView data={this.state.books}/>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3%', marginTop: '2%' }}>
                    <CustomPaginationActionsTable />
                </div>
                <Footer />
            </div>
        );
    }

}

export default Home;