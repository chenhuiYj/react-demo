import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import './../../sass/reset.scss'
import './../../sass/shoppingCart.scss'

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shoppingList: [
                {
                    'pro_id': '',
                    'pro_name': '【斯文】甘油 | 丙三醇',//产品名称
                    'pro_brand': 'skc',//品牌名称
                    'pro_place': '韩国',//产地
                    'pro_purity': '99.7%',//规格
                    'pro_min': "215千克",//最小起订量
                    'pro_depot': '上海仓海仓储',//所在仓库
                    'pro_num': 3,//数量
                    'pro_img': '../../images/testimg.jpg',//图片链接
                    'pro_price': 800//单价
                },
                {
                    'pro_id': '',
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

    render() {
        return (
            <div className="m-shopping-cart">
                <table>
                    <tbody>
                    {
                        this.state.shoppingList.map((item, index) => {
                            return (
                                <tr key={item.pro_id}>
                                    <td className="td-check"><span className="check-span"></span></td>
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
                                            <input type="text" className="num-input" v-model="item.pro_num"/>
                                            <a href="javascript:;" className="num-add num-do fr" onClick={() => {
                                            }}><span></span></a>
                                        </div>
                                    </td>
                                    <td className="td-price">
                                        <p className="red-text">￥<span className="price-text">{item.pro_price}</span>
                                        </p>
                                    </td>
                                    <td className="td-total">
                                        <p className="red-text">￥<span
                                            className="total-text">{item.pro_price * item.pro_num}</span>.00</p>
                                    </td>
                                    <td className="td-do"><a href="javascript:;" className="product-delect">删除</a></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
ReactDOM.render(
    <ShoppingCart/>,
    document.getElementById('root')
);
