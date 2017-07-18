import React, { Component } from 'react';
import './Contant.css';

class Contant extends Component {
  render() {
    return (
      <div className="Contant clear">
        <div className='add_list left'>
        	<div className='add_bar'>
        		<div className='add_title clear'>
        			<span className='add_button'>北京
        				<span className='trigon right'></span>
        			</span>
        		</div>
        		<div className='add_bar_more'>
        			<div className='address'>
        				<p>北京市东城区金宝街58号华丽大厦9楼<br/>9/F, Huali Building, 58 Jinbao Street,<br/>East City District, Beijing, China</p>
        				<p>+86 10 8520 6688</p>
        			</div>
        			<div className='map'>
        				<button><span>查看地图</span></button>
        			</div>
        		</div>
        	</div>
        	<div className='add_bar'>
        		<div className='add_title clear'>
        			<span className='add_button'>上海
        				<span className='trigon right'></span>
        			</span>
        		</div>
        		<div className='add_bar_more'>
        			<div className='address'>
        				<p>上海市静安区恒丰路399号达邦协作广场8楼<br/>8/F, WPP Campus, 399 Hengfeng Road,<br/>
Jing’an District, Shanghai, China</p>
        				<p>+86 21 2405 1888</p>
        			</div>
        			<div className='map'>
        				<button><span>查看地图</span></button>
        			</div>
        		</div>
        	</div>
        	<div className='add_bar'>
        		<div className='add_title clear'>
        			<span className='add_button'>广州
        				<span className='trigon right'></span>
        			</span>
        		</div>
        		<div className='add_bar_more'>
        			<div className='address'>
        				<p>广州市海珠区滨江东路191号，195号金海湾3楼<br/>3/F, 191,195 East Binjiang Road,<br/>
Haizhu District, Guangzhou, China</p>
        				<p>+86 20 8113 6288</p>
        			</div>
        			<div className='map'>
        				<button><span>查看地图</span></button>
        			</div>
        		</div>
        	</div>
        	<div className='add_bar'>
        		<div className='add_title clear'>
        			<span className='add_button'>南京
        				<span className='trigon right'></span>
        			</span>
        		</div>
        		<div className='add_bar_more'>
        			<div className='address'>
        				<p>江苏省南京市鼓楼区中山北路8号云峰大厦19层<br/>19/F Yunfeng Tower,<br/>
Gulou District, Nanjing</p>
        				<p>+86 25 5226 2349</p>
        			</div>
        			<div className='map'>
        				<button><span>查看地图</span></button>
        			</div>
        		</div>
        	</div>
        	<div className='add_bar'>
        		<div className='add_title clear'>
        			<span className='add_button'>厦门
        				<span className='trigon right'></span>
        			</span>
        		</div>
        		<div className='add_bar_more'>
        			<div className='address'>
        				<p>厦门市思明区鹭江道96号钻石海岸B栋33楼<br/>
33/F, Diamond Coast Building B,<br/>96 Lujiang Road,<br/>Siming District, Xiamen</p>
        				<p>+86 592 806 9696</p>
        			</div>
        			<div className='map'>
        				<button><span>查看地图</span></button>
        			</div>
        		</div>
        	</div>
        </div>
        <div id="allmap" className='left'></div>
      </div>
    );
  }
}
export default Contant;