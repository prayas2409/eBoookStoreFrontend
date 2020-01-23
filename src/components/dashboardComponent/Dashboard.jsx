import React from 'react';
import ToolBar from '../headerBarComponent/headerbar';
import Footer from "../footerComponent/Footer";
import GridView from '../gridViewComponent/GridView';
import CustomPaginationActionsTable from '../paginationComponent/Pagination';
import LowerBar from '../lowerBarComponent/LowerBar';
import { getMethod } from '../../service/httpService.js';
import User from "../userComponent/user";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            currentPage: 1,
            todosPerPage: 12
        }
        this.setbooks = this.setbooks.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.setPageNumber = this.setPageNumber.bind(this);

    }

    componentDidMount() {
        this.getAllBooks();
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    setbooks(newbooks) {
        console.log("book from child", newbooks);
        this.setState({
            books: newbooks.data,
        })
    }

    setPageNumber(pageNumber) {
        this.setState({
            currentPage: pageNumber
        })
    }

    getAllBooks = () => {
        let path = {
            path: "books"
        }
        getMethod(path).then((res) => {
            console.log("res", res.data.data)
            this.setState({ books: res.data.data });
            console.log("books=>", this.state.books);
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        const { currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = this.state.books.slice(indexOfFirstTodo, indexOfLastTodo);
        console.log(currentTodos);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <ToolBar function={this.setbooks} />
                <div style={{ width: '74%', margin: 'auto', marginTop: '6%' }}>
                    <LowerBar data={this.state.books.length} function={this.setbooks} />
                    <GridView data={currentTodos} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3%', marginTop: '2%' }}>
                    <CustomPaginationActionsTable perPage={this.state} function={this.setPageNumber} />
                </div>
                <User />
                <Footer />
            </div>
        );
    }

}

export default Home;