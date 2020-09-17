import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router';
import axios from '../../axios'
import './Layout.module.css'
import Navigation from '../Navigation/Navigation'
import Content from '../../components/Content/Content'
import AboutUs from '../../containers/AboutUs/AboutUs';
import Contact from '../../containers/Contact/Contact';
import Cart from '../../containers/Cart/Cart';
import Modal from '../UI/Modal/Modal';
import LoginForm from '../UI/LoginForm/LoginForm';
import productsData from '../../containers/data'
import { Switch } from '@material-ui/core';
import SignIn from '../../containers/SignIn/SignIn';

function Layout(props) {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    //HIDES BODY SCROLLING ON WHEN SIDEBAR OR MODAL IS SHOWN
    props.isSidebarOpen || props.showingLogin ? document.getElementsByTagName('html')[0].style.overflow = "hidden" : 
    document.getElementsByTagName('html')[0].style.overflow = "scroll";


    useEffect(() => {
        setLoading(true)
        axios.get('/products.json')
            .then(res => {
                setLoading(false)
                setProducts(dataToArray(res.data))
            })
            .catch(err => {
                setLoading(false)
                setError(err)
            })
    }, [])
    
    useEffect(() => {
        searchClicked()
    }, [products, props.config])

    
    // POSTING PRODUCTS TO FIREBASE DB (REPEATS PRODUCTS)
    // useEffect(() => {
    //     setLoading(true)
    //     const productsArray = [];
    //     productsData.products.map(product => {
    //         axios.post('/products.json', product)
    //             .then(res => {
    //                 setLoading(false)
    //                 setProducts(res.data)
    //             })
    //             .catch(err => {
    //                 setLoading(false)
    //                 setError(err)
    //             })
    //     })
    // }, [])

    const dataToArray = (data) => {
        const keys = Object.keys(data);
        return keys.map((key, index) => {
            const k = keys[index]
            const initials = data[k]
            return keys[index] = initials
        })
    }

    const addedToCart = (e, itemId, itemPrice) => {
        props.isLoggedIn ? 
        props.onAddedToCart(e, itemId, itemPrice) :
        props.onShowingLogin()
        // props.isLoggedIn ? props.onAddedToCart(e) : ;
    }

    const filterItem = (productToCheck) => {
        return (
            productToCheck.category.includes(props.config.selectedCategory) &&
            (productToCheck.talles.includes(` ${props.config.talle}` || `${props.config.talle} `) ||
            props.config.talle === 'todos') &&
            (productToCheck.price >= props.config.minPrice &&
            productToCheck.price <= props.config.maxPrice)
        )
    }

    const searchClicked = () => {
        const newFilteredProducts = [];
        // console.log(products)
        products.map((productObj) => {
            if (filterItem(productObj)) {
                newFilteredProducts.push(productObj)
            };
        })
        console.log(newFilteredProducts)
        setFilteredProducts(newFilteredProducts)
        
    }

    let modal = null
    if (props.showingLogin) {
        modal = <Modal>
                    <LoginForm showText />
                </Modal>
    }
    

    return (
        <React.Fragment>
            {modal}
            <Navigation
                categorySelected={(e) => props.onCategorySelect(e.target.innerText.toLowerCase())}
                showing={props.config.selectedCategory}
                searchClicked={() => searchClicked()}
            />
            {/* <Switch> */}
                <Route path="/about-us" exact component={AboutUs}/>
                <Route path="/contact" exact component={Contact}/>
                <Route path="/cart" exact component={Cart}/>
                <Route path="/signin" exact component={SignIn}/>
                <Route path="/ecommerce" exact render={() =>
                    <Content
                        loading={loading}
                        showing={props.config.selectedCategory}
                        isSidebarOpen={props.isSidebarOpen}
                        // addedToCart={(e) => addedToCart(e)}
                        itemsShown={filteredProducts}
                    />}
                />
                <Route path="/" exact render={() =>
                    <Content
                        loading={loading}
                        showing={props.config.selectedCategory}
                        isSidebarOpen={props.isSidebarOpen}
                        // addedToCart={(e) => addedToCart(e)}
                        itemsShown={filteredProducts}
                    />}
                />
            {/* </Switch> */}
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn,
        showingLogin: state.showingLogin,
        config: {...state.onSearchOptions},
        cart: {
            ...state.cart
        },
        isSidebarOpen: state.sidebarIsOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // onShowingLogin: () => dispatch({type: 'LOGIN_OPENED'}),
        onCategorySelect: (category) => dispatch({type: 'CATEGORY_SELECTED', payload: category}),
        onAddedToCart: (e, itemId, itemPrice) => {console.log(itemPrice); return dispatch({type: 'PRODUCT_ADDED', payload: {item: itemId, price: itemPrice, quantity: 1}})},
        onRemovedFromCart: () => dispatch({type: 'PRODUCT_REMOVED', payload: 1})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);