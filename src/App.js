import Card from './components/Cards';
import './App.css';

function App() {
  const openExternalUrl = (url) => {
    window.open(url, '_blank'); // '_blank' opens the URL in a new tab or window
  };
  return (
    
    <div className="App">
      <h1 className="heading">Resources</h1>
      <h2 className="sub-head">Videos</h2>
      <div className="card-container">
      <Card image="https://imgs.search.brave.com/qPlGNKpo9s6V27BxelxnZylmPDr-dM_TGnm7VIidM24/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzc0LzE1Lzkw/LzM2MF9GXzc0MTU5/MDA0X0xENk9DQXRa/c0gwN2ZsQVVWMVlH/ZU8zS3pDekFTTEFl/LmpwZw"  title="Web" description="Extensive Resources for web Development" onClick={() => openExternalUrl('https://search.brave.com/videos?q=html%20videos')}/>

      <Card image="https://imgs.search.brave.com/-1m6iy1B_pwTJ1R_nF46MoOoI9mrALVOCh3nO5VWkB4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L2Nkbi11/cGxvYWRzLzIwMjMw/MzE4MjI1ODE0L01M/LVR1dG9yaWFsLmpw/Zw"  title="AI/ML" description="Extensive Resources for AI/ML" onClick={() => openExternalUrl('https://search.brave.com/videos?q=machine+learning+videos&source=web')}/>

      <Card image="https://imgs.search.brave.com/nGNeL_MCABzWS9rwWsvasUTbRmV3TFjxTfsD6DTkrRY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMy/MzQxOTE5OS9waG90/by9ibG9ja2NoYWlu/LWFuZC1uZXR3b3Jr/LWJhY2tncm91bmQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXF4anl5eTJWZ29H/am1teUZfd3JRSGct/V1VlbDRZUHVmc0pL/bE1jbzV6OWM9"  title="Blockchain" description="Extensive Resources for BlockChain" onClick={() => openExternalUrl('https://search.brave.com/videos?q=blockchain+videos&source=web')}/>
      </div>
      
      <br/> <br/>
      <h2 className="sub-head">Articles</h2>
      <div className="card-container">
      <Card image="https://imgs.search.brave.com/qPlGNKpo9s6V27BxelxnZylmPDr-dM_TGnm7VIidM24/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzc0LzE1Lzkw/LzM2MF9GXzc0MTU5/MDA0X0xENk9DQXRa/c0gwN2ZsQVVWMVlH/ZU8zS3pDekFTTEFl/LmpwZw"  title="Web" description="Extensive Resources for web Development" onClick={() => openExternalUrl('https://developer.mozilla.org/en-US/')}/>
      <Card image="https://imgs.search.brave.com/-1m6iy1B_pwTJ1R_nF46MoOoI9mrALVOCh3nO5VWkB4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L2Nkbi11/cGxvYWRzLzIwMjMw/MzE4MjI1ODE0L01M/LVR1dG9yaWFsLmpw/Zw"  title="AI/ML" description="Extensive Resources for AI/ML"onClick={() => openExternalUrl('https://www.analyticsvidhya.com/blog/2021/05/aiml-a-language-for-chatbots/')}/>
      <Card image="https://imgs.search.brave.com/nGNeL_MCABzWS9rwWsvasUTbRmV3TFjxTfsD6DTkrRY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMy/MzQxOTE5OS9waG90/by9ibG9ja2NoYWlu/LWFuZC1uZXR3b3Jr/LWJhY2tncm91bmQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXF4anl5eTJWZ29H/am1teUZfd3JRSGct/V1VlbDRZUHVmc0pL/bE1jbzV6OWM9"  title="Blockchain" description="Extensive Resources for BlockChain" onClick={() => openExternalUrl('https://blockchain.mit.edu/articles')}/>
      </div>
          <br/> <br/>
      <h2 className="sub-head">PDFs</h2>
      <div className="card-container">
      <Card image="https://imgs.search.brave.com/qPlGNKpo9s6V27BxelxnZylmPDr-dM_TGnm7VIidM24/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzc0LzE1Lzkw/LzM2MF9GXzc0MTU5/MDA0X0xENk9DQXRa/c0gwN2ZsQVVWMVlH/ZU8zS3pDekFTTEFl/LmpwZw"  title="Web" description="Extensive Resources for web Development" onClick={() => openExternalUrl('')}/>
      <Card image="https://imgs.search.brave.com/-1m6iy1B_pwTJ1R_nF46MoOoI9mrALVOCh3nO5VWkB4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L2Nkbi11/cGxvYWRzLzIwMjMw/MzE4MjI1ODE0L01M/LVR1dG9yaWFsLmpw/Zw"  title="AI/ML" description="Extensive Resources for AI/ML" onClick={() => openExternalUrl('')}/>
      <Card image="https://imgs.search.brave.com/nGNeL_MCABzWS9rwWsvasUTbRmV3TFjxTfsD6DTkrRY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMy/MzQxOTE5OS9waG90/by9ibG9ja2NoYWlu/LWFuZC1uZXR3b3Jr/LWJhY2tncm91bmQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXF4anl5eTJWZ29H/am1teUZfd3JRSGct/V1VlbDRZUHVmc0pL/bE1jbzV6OWM9"  title="Blockchain" description="Extensive Resources for BlockChain" onClick={() => openExternalUrl('')}/>
      </div>
    </div>
  );
}

export default App;
