import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Cart from "./components/Cart/Cart";
import Main from "./components/Main/Main";
import {Provider} from "react-redux";
import {store} from "./redux-state/store";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
