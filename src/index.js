import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , HashRouter , Match , Route , Link ,IndexLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import './common.css';
import './index.css';
import Home from './Home';
import Works from './Works';
import Contant from './Contant';
import Vision from './Vision';
import logo from './img/logo_ogilvy_sm.png';
import searchOne from './img/search_1.png';
import searchTwo from './img/search_2.png';
import registerServiceWorker from './registerServiceWorker';


const Basic = () => (
  <Router>
    <div className='wrap'>
      <div className='header clear'>
      	<a className='logo left'><img src={logo}/></a>
      	<ul className='nav left'>      
	      <li><Link to="/">主页</Link></li>
	      <li>
          <a href='javascript:;'>作品</a>
          <div className='nav_list'>
            <p><Link to="/works">作品</Link></p>
            <p><Link to="/point">奥美观点</Link></p>
          </div>
        </li>
	      <li><Link to="/service">我们的服务</Link></li>
	      <li><a href='javascript:;'>关于奥美</a>
          <div className='nav_list'>
            <p><Link to="/vision">奥美愿景</Link></p>
            <p><Link to="/history">奥美中国历史</Link></p>
            <p><Link to="/team">我们的领导团队</Link></p>
          </div>
        </li>
	      <li>
          <a href='javascript:;'>奥美新闻</a>
          <div className='nav_list'>
            <p><Link to="/press">新闻稿</Link></p>
            <p><Link to="/live">奥美生活</Link></p>
          </div>
        </li>
	      <li><Link to="/contant">联系我们</Link></li>
	    </ul>
	    <div className='right header_inner'>
	    	<a className='search left'><img src={searchOne}/></a>
	    	<div className='select right'>
	    		<ul>
	    			<li>
	    				<a href="#">CN</a>
	    				<ul className='lang'>
		    				<li><a>EN</a></li>
		    			</ul>
	    			</li>
	    		</ul>
	    	</div>
	    </div>
      </div>   
      <Route exact path="/" component={Home}/>
      <Route path="/works" component={Works}/>
      <Route path="/vision" component={Vision}/>
      <Route path="/service" component={Topics}/>
      <Route path="/contant" component={Contant}/>
      <div className='footer_box'>
        <div className='foot_box clear'>
          <div className='left needlist'>
            <p>需要什么帮忙</p>
            <p className='clear'><a>查看我们的作品</a><span></span></p>
            <p className='clear'><a>联系我们</a><span></span></p>
            <p className='clear'><a>查看我们的业务</a><span></span></p>
            <p className='clear'><a>加入我们</a><span></span></p>
          </div>
          <div className='right about_our'>
            <p>关注我们</p>
          </div>
        </div>
        <div className='Copyright_box clear'>
          <ul className='copy left'>
            <li><Link to="/">主页</Link></li>
            <li><Link to="/">全球奥美</Link></li>
            <li><Link to="/">WPP</Link></li>
            <li><Link to="/">隐私政策</Link></li>
          </ul>
          <p className='right copyright'>© Copyright Ogilvy China 2016</p>
        </div>
      </div>
    </div>
  </Router>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
export default Basic;
ReactDOM.render(<Basic/>, document.getElementById('root'));
registerServiceWorker();