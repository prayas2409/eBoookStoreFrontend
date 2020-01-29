import React from 'react';
import ToolBar from '../headerBarComponent/headerbar';
import Footer from "../footerComponent/Footer";
import GridView from '../gridViewComponent/GridView';
import CustomPaginationActionsTable from '../paginationComponent/Pagination';
import LowerBar from '../lowerBarComponent/LowerBar';
import { getMethod } from '../../service/httpService.js';
import User from "../userComponent/User";
import OrderPlaced from '../orderPlacedComponent/OderPlaced'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            currentPage: 1,
            todosPerPage: 12,
            bookState: true,
            orderState: false,
            finalPage: false,
            selectedbook: {},
            maxNumOfPage: 1,
            orderId: 0
        }
        this.setbooks = this.setbooks.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.setPageNumber = this.setPageNumber.bind(this);
        this.getPurchesedbook = this.getPurchesedbook.bind(this);
        this.decrementCurrentPageNumber = this.decrementCurrentPageNumber.bind(this);
        this.incrementCurrentPageNumber = this.incrementCurrentPageNumber.bind(this);
        this.conformOrder = this.conformOrder.bind(this);
        this.continueShopping = this.continueShopping.bind(this);
    }

    componentDidMount() {
        this.getAllBooks();
    }

    incrementCurrentPageNumber() {
        let variable = this.state.currentPage + 1
        if (variable <= this.state.maxNumOfPage) {
            this.setPageNumber(variable)
        }
    }

    decrementCurrentPageNumber() {
        let variable = this.state.currentPage - 1
        if (variable > 0) {
            this.setPageNumber(variable)
        }
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    setbooks(newbooks) {
        this.setState({
            books: newbooks.data,
        })
    }

    setPageNumber(pageNumber) {
        this.setState({
            currentPage: pageNumber,
        })
    }

    getPurchesedbook(bookDetail) {
        this.setState({
            selectedbook: bookDetail,
            bookState: !this.state.bookState,
            orderState: !this.state.orderState,
        })
    }

    conformOrder(orderId) {
        this.setState({
            orderState: !this.state.orderState,
            finalPage: !this.state.finalPage,
            orderId: orderId
        })
    }

    continueShopping(orderId) {

        this.setState({
            finalPage: !this.state.finalPage,
            bookState: !this.state.bookState,
        })
    }


    getAllBooks = () => {
        let path = {
            path: "books"
        }
        getMethod(path).then((res) => {
            this.setState({ books: res.data.data });
            this.setState({
                maxNumOfPage: Math.ceil(this.state.books.length / this.state.todosPerPage)
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        const { currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = this.state.books.slice(indexOfFirstTodo, indexOfLastTodo);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <ToolBar function={this.setbooks} />
                <div style={{ minHeight: '573px' }}>
                    <div style={this.state.bookState ? { display: 'block' } : { display: 'none' }}>
                        <div style={{ width: '74%', margin: 'auto', marginTop: '6%' }}>
                            <LowerBar data={this.state.books.length} function={this.setbooks} />
                            <GridView data={currentTodos} function={this.getPurchesedbook} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3%', marginTop: '2%' }}>
                            <CustomPaginationActionsTable perPage={this.state} function={this.setPageNumber}
                                incfunction={this.incrementCurrentPageNumber}
                                decfunction={this.decrementCurrentPageNumber}
                            />
                        </div>
                    </div>
                    <div style={this.state.orderState ? { display: 'block' } : { display: 'none' }}>
                        <User data={this.state.selectedbook} function={this.conformOrder} />
                    </div>
                    <div style={this.state.finalPage ? { display: 'block' } : { display: 'none' }}>
                        <OrderPlaced function={this.continueShopping} data={this.state.orderId} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

}
    
export default Home;