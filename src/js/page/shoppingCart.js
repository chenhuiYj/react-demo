import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import './../../sass/reset.scss'
import './../../sass/shoppingCart.scss'

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sumPrice: 0,
            countProduct: 0,
            shoppingList: [
                {
                    'pro_id': 1,
                    'pro_name': '【斯文】甘油 | 丙三醇',//产品名称
                    'pro_brand': 'skc',//品牌名称
                    'pro_place': '韩国',//产地
                    'pro_purity': '99.7%',//规格
                    'pro_min': "215千克",//最小起订量
                    'pro_depot': '上海仓海仓储',//所在仓库
                    'pro_num': 2,//数量
                    'pro_img': '../../images/testimg.jpg',//图片链接
                    'pro_price': 800//单价
                },
                {
                    'pro_id': 2,
                    'pro_name': '【斯文】甘油 | 丙三醇',
                    'pro_brand': 'skc',
                    'pro_place': '韩国',
                    'pro_purity': '99.7%',
                    'pro_min': "215千克",
                    'pro_depot': '上海仓海仓储',
                    'pro_num': 3,
                    'pro_img': '../../images/testimg.jpg',
                    'pro_price': 800
                }
            ]
        };
    }

    countProduct() {
        this.state.sumPrice = 0;
        this.state.countProduct = 0;
        let _sumPrice=0,_countProduct=0;
        this.state.shoppingList.forEach(item=>{
            if(item.select){
                _countProduct++;
                _sumPrice+=item.pro_num*item.pro_price;
            }
        });
        this.setState({
            sumPrice: _sumPrice,
            countProduct: _countProduct
        });
    }

    changeSelect(index){
        let _list=JSON.parse(JSON.stringify(this.state.shoppingList));
        _list[index].select=!_list[index].select;
        this.setState({
            shoppingList: _list
        },()=>{this.countProduct();});
    }

    deleteProduct(index) {
        let _list =[];
        if(index.constructor===Number){
            _list=JSON.parse(JSON.stringify(this.state.shoppingList));
            _list.splice(index, 1);
        }
        else{
            _list=this.state.shoppingList.filter(item=> !item.select);
        }
        this.setState({
            shoppingList: _list
        },()=>{this.countProduct();});
    }

    componentWillMount() {
        let _list = JSON.parse(JSON.stringify(this.state.shoppingList));
        _list.forEach(item=>{
            item.select=true;
        })
        this.setState({
            shoppingList: _list
        },()=>{this.countProduct();});
    }

    render() {
        return (
            <div className="m-shopping-cart">
                <table>
                    <tbody>
                    {
                        this.state.shoppingList.map((item, index) => {
                            return (
                                <tr key={item.pro_id}>
                                    <td className="td-check"><span className={`check-span ${item.select ? "check-true" : ""}`} onClick={()=>{this.changeSelect(index)}}></span></td>
                                    <td className="td-product"><img src={item.pro_img} width="98" height="98"/>
                                        <div className="product-info">
                                            <h6>{item.pro_name}</h6>
                                            <p>品牌：{item.pro_brand}&nbsp;&nbsp;产地：{item.pro_place}</p>
                                            <p>规格/纯度:{item.pro_purity}&nbsp;&nbsp;起定量：{item.pro_min}</p>
                                            <p>配送仓储：{item.pro_depot}</p>
                                        </div>
                                    </td>
                                    <td className="td-num">
                                        <div className="product-num">
                                            <a href="javascript:;" className="num-reduce num-do fl" onClick={() => {
                                            }}><span></span></a>
                                            <input type="text" className="num-input" value={item.pro_num}/>
                                            <a href="javascript:;" className="num-add num-do fr" onClick={() => {
                                            }}><span></span></a>
                                        </div>
                                    </td>
                                    <td className="td-price">
                                        <p className="red-text">￥<span
                                            className="price-text">{item.pro_price}</span>
                                        </p>
                                    </td>
                                    <td className="td-total">
                                        <p className="red-text">￥<span
                                            className="total-text">{item.pro_price * item.pro_num}</span>.00</p>
                                    </td>
                                    <td className="td-do" onClick={()=>{this.deleteProduct(index)}}><a href="javascript:;" className="product-delect">删除</a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <div className="cart-product-info">
                    <a className="delect-product" href="javascript:;" onClick={this.deleteProduct.bind(this)}><span></span>删除所选商品</a>
                    <a className="keep-shopping" href="#"><span></span>继续购物</a>
                    <a className="btn-buy fr" href="javascript:;">去结算</a>
                    <p className="fr product-total">￥<span>{this.state.sumPrice}</span></p>
                    <p className="fr check-num"><span>{this.state.countProduct}</span>件商品总计（不含运费）：</p>
                </div>
            </div>


        )
    }
}
ReactDOM.render(
    <ShoppingCart/>,
    document.getElementById('root')
);
