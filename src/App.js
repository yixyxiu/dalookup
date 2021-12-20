import logo from './logo.svg';
import './App.css';
import {Card, Space, Input, Button, Menu, Dropdown, Radio, Divider, Tooltip, Select} from 'antd';
import {SearchOutlined, DownOutlined, QuestionCircleFilled} from '@ant-design/icons';

const { Option } = Select;

let token_class_list = [
        {
            "name":"Nervape / GROOVY DeFier",
            "bg_image_url":"https://oss.jinse.cc/production/c89fd158-e4bf-4008-a9b8-618df8760517.png",
            "renderer":"https://oss.jinse.cc/production/9c04d9ee-3a4e-451d-a880-7bc4b65e8a13.gltf",
            "renderer_type":"three_d",
            "total":"256",
            "issued":"225",
            "uuid":"7af3a5aa-5922-449c-944a-a89aa6817ed7",
            "class_likes":6,
            "card_back_content_exist":true
        },
        {
            "name":"Nervape / GROOVY Researcher",
            "bg_image_url":"https://oss.jinse.cc/production/7df6c957-597f-4367-9fb2-00803ea9f26d.png",
            "renderer":"https://oss.jinse.cc/production/06cd3cc0-f5dd-4087-9926-7ade659aee00.gltf",
            "renderer_type":"three_d",
            "total":"256",
            "issued":"224",
            "uuid":"8f0f7798-a0c5-4463-b910-6355afd3cdde",
            "class_likes":5,
            "card_back_content_exist":true
        },
        {
            "name":"Nervape / GROOVY NFTer",
            "bg_image_url":"https://oss.jinse.cc/production/05f4a33d-69e2-4ea2-bf0c-4317e3f8e5c7.png",
            "renderer":"https://oss.jinse.cc/production/843796d5-5859-4ad6-977e-58ae4ebb715f.gltf",
            "renderer_type":"three_d",
            "total":"256",
            "issued":"224",
            "uuid":"53af3b8e-8c8b-4180-b623-f17fd4906566",
            "class_likes":4,
            "card_back_content_exist":true
        },
        {
            "name":"Nervape / GROOVY Miner",
            "bg_image_url":"https://oss.jinse.cc/production/fd5fb44f-3de6-4d28-89e8-6d7fc4c5f73e.png",
            "renderer":"https://oss.jinse.cc/production/18cb1f66-8cea-406b-91a8-00b8f8f93a6f.gltf",
            "renderer_type":"three_d",
            "total":"256",
            "issued":"224",
            "uuid":"7fb9565b-56b2-499c-a71c-7bec8d9f456b",
            "class_likes":4,
            "card_back_content_exist":true
        },
        {
            "name":"Nervape / GROOVY Whale",
            "bg_image_url":"https://oss.jinse.cc/production/ef02a041-1f6d-4db3-be2c-d478e3fa92cc.png",
            "renderer":"https://oss.jinse.cc/production/717dbfd0-6d21-492d-b6c6-aa127b0440f8.gltf",
            "renderer_type":"three_d",
            "total":"256",
            "issued":"225",
            "uuid":"2cd815ed-7a3b-45e1-a4a1-178a890bbeec",
            "class_likes":4,
            "card_back_content_exist":true
        },
        {
            "name":"Nervape / GROOVY Rookie",
            "bg_image_url":"https://oss.jinse.cc/production/743b4d23-94fb-4395-8f50-7a88f6229810.png",
            "renderer":"https://oss.jinse.cc/production/078ce193-5634-4207-ba50-2b39bfb68ec4.gltf",
            "renderer_type":"three_d",
            "total":"256",
            "issued":"224",
            "uuid":"92d5c745-7e29-4954-9c51-17d15a5b36ef",
            "class_likes":6,
            "card_back_content_exist":true
        },
        {
            "name":"Nervape / GROOVY Developer",
            "bg_image_url":"https://oss.jinse.cc/production/fa4857e7-37a3-47e2-aec7-34ac06d77650.png",
            "renderer":"https://oss.jinse.cc/production/3aa4759b-08c2-4ee1-b634-43c6d7cffde0.gltf",
            "renderer_type":"three_d",
            "total":"256",
            "issued":"224",
            "uuid":"f39ef2d1-defc-464d-9269-1915c0d0334e",
            "class_likes":5,
            "card_back_content_exist":true
        }
];

let nftFilter = token_class_list[0].name;

function select() {
  console.log('selet');
  loadNFTDetail("",2);
}

function handleFilterChange(value, option) {

  console.log(value);
}

function loadNFTDetail(uuid, index) {
  return new Promise((resolve) => {
    const headers = {
      accept: "application/json",
      "referrer-policy": "strict-origin-when-cross-origin",
      "Access-Control-Allow-Origin": "no-cors"
    };

    let url =
      "https://api.jinse.cc/api/explorer/v1/token_classes/8f0f7798-a0c5-4463-b910-6355afd3cdde/tokens/1";
    /*   "https://api.jinse.cc/api/explorer/v1/token_classes/" +
      uuid +
      "/tokens/" +
      index;*/

    fetch(url, headers)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        let account_onsale = json;
        console.log(account_onsale);
      })
      .catch(function (err) {
        console.log(err);
      });
  });
}


// 精准匹配搜索结果筛选的下拉菜单
const nftOptions = [];
token_class_list.forEach((item) => {
  nftOptions.push(<Option key={nftOptions.length}><span></span>{item.name}</Option>);
})

function App() {
  return (
    <div className="App">


                            <Select value={nftFilter} onChange={handleFilterChange} style={{ width: 300 }}>
                                {nftOptions}
                            </Select>
                            
                            <Button type="primary" size={'normal'} shape="round"
                                    onClick={() => select()}>查询</Button>
    
                        
        <br/>               
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. test
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
