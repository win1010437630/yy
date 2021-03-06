import React, { Component } from 'react';
import './Vision.css';
import ogilvy_cannes_lion from './img/ogilvy_cannes_lion.png';
import ogilvy_effies_greaterchina from './img/ogilvy_effies_greaterchina-1.jpg';
class Vision extends Component {
  render() {
    return (
      <div className="Vision">
        <div className='content_top clear'>
       		<div className='left'></div>
       		<div className='right content_top_word'>
    			<div className='top_word'>
       				<h2></h2>
       				<div></div>
       			</div>
       		</div>
        </div>
        <div className='vision_box'>
        	<div className='user_vision'>
	        	<div className='con'>
	        		<div className='user_vision_inner background clear'>
	        			<div className='left user_vision_word'>
	        				<h1>我们的愿景</h1>
	        				<p>&nbsp;</p>
	        				<p>奥美的致力于建设优势品牌，并使之传承百世。我们帮助国内外的客户销售他们的产品，在日益碎片化和愈加喧闹的数字化世界中，让其品牌有所作为。</p>
	        				<p>&nbsp;</p>
	        				<p>奥美依靠众多高效的工具来完成此愿景。通过big ideaL， 我们能够精准定位品牌的市场目标。而对于创意和实效“双峰”的坚持，确保了每一场营销战的创造力和有效性。此外，我们还拥有整合营销的专利工具——FUSION，它能够帮助客户的品牌在复杂多变的市场中有效穿行。</p>
	        				<p>&nbsp;</p>
	        				<h2>奥美的理想在于成为最本土化的跨国公司的同时，也是最国际化的本土公司。</h2>
	        				<p>&nbsp;</p>
	        				<p>自从奥美进入中国的第一天起，我们就把做最本土化的跨国公司和最国际化的本土公司作为愿景，并不断地以敏锐的本土视野和深度了解中国客户来践行此理想。我们也发表了许多有关中国品牌建设以及消费者沟通领域的真知灼见。</p>
	        				<p>&nbsp;</p>
	        				<p>在全世界120个国家范围内，奥美共拥有450个分支机构，服务于500多家公司和组织。其中许多重要的客户与我们的合作关系已历经半个世纪，这令我们感到由衷自豪。自从1992年进入中国市场，25年当中我们帮助了许多本土、国际客户在中国市场取得成功，目前，我们在中国共有14家分支机构，专业覆盖市场营销和品牌建设的各个领域。</p>
	        			</div>
	        		</div>
	        	</div>
	        </div>
	        <div className='user_culture'>
	        	<div className='con'>
	        		<div className='user_culture_inner background clear'>
	        			<div className='right user_culture_word'>
	        				<h1>我们的文化</h1>
	        				<p>&nbsp;</p>
	        				<h2>奥美，永不自满。</h2>
	        				<p>&nbsp;</p>
	        				<p>我们的使命是让客户的事业风生水起，为此将凝聚全部业务单元的力量，不断创造有推动力的项目和营销案例。当行业发生变革时，我们也随之转换思维，利用创意、创新和深度调研来促进客户的收益， 让营销活动助力于品牌发展。</p>
	        				<p>&nbsp;</p>
	        				<p>许多人为了奥美的事业倾尽毕生心血。这是因为这里崇尚，并经营着循循善诱，鼓励创造的氛围。奥美坚守着人尽其才的育人思维，为此投入大量的时间和财力用于员工培训，以确保每个人能够进步与完善。</p>
	        				<p>&nbsp;</p>
	        				<p>我们将此视为第一要务。奥美相信：只有员工时刻保持高涨的士气，并精益求精，才能保证给予客户最优质的服务。</p>
	        			</div>
	        		</div>
	        	</div>
	        </div>
        </div>
        <div className='lions_aifei clear'>
        	<div className='lions_box left'>
        		<div className='lions_padding'>
        			<div className='lions_con'>
	        			<img src={ogilvy_cannes_lion}/>
	        		</div>
	        		<div className='lions_word'>
	        			<h2>戛纳国际创意节<br/>年度代理商</h2>
	        			<p>2012, 2013, 2014 and 2015</p>
	        		</div>
        		</div>
        	</div>
        	<div className='aifei_box left'>
        		<div className='aifei_padding'>
        			<div className='aifei_con'>
        				<img src={ogilvy_effies_greaterchina}/>
	        		</div>
	        		<div className='aifei_word'>
	        			<h2>艾菲实效广告奖<br/>年度代理商</h2>
	        			<p>2012, 2013, 2014 and 2015</p>
	        		</div>
        		</div>
        	</div>
        </div>
        <div className='team_history_box clear'>
        	<div className='history_box left'>
        		<a></a>
        		<div className='history_center'>
        			<a><div className='history_china'>了解奥美中国二十多年的发展历程</div></a>
        			<div className='user_history'><a><button>我们的历史</button></a></div>
        		</div>
        	</div>
        	<div className='team_box left'>
        		<a></a>
        		<div className='team_center'>
        			<a><div className='team_china'>了解奥美中国中西结合的管理团队</div></a>
        			<div className='user_history'><a><button>我们的管理团队</button></a></div>
        		</div>
        	</div>
        </div>
      </div>
    );
  }
}

export default Vision;
