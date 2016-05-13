import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { Icon, Affix, Breadcrumb, Tag, Row, Col } from 'antd'
import { query } from '../common/query'

class Company extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="content">
          <Affix>
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item href="about">关于我们</Breadcrumb.Item>
              <Breadcrumb.Item>公司信息</Breadcrumb.Item>
            </Breadcrumb>
          </Affix>
          <br/><br/><br/>
          <div>
            <Row>
              <Col span="12">
                <img className="img-res" src="/public/images/company.jpg" alt=""/>
              </Col>
              <Col span="10" offset="1">
                <h2>九千年文化发展有限公司</h2>
                <br/>
                <article>
                  <p>湖北九千年文化发展有限公司（以下简称“九千年公司”）是年轻的、有远大理想、历史使命感和责任感的文化与互联网科技公司，由文化、体育、医疗，科技和互联网领域的专业人士组建，并得到了政府管理部门、行业协会组织、风投机构、产业孵化园区的大力支持，拥有传统文化领域创新、创意产品，以及互联网开发平台、搜索引擎、大数据分析处理、网络数据安全、游戏设计制作等核心技术。</p>
                  <p>九千年公司将自己定位于有深厚文化底蕴的科技型互联网++公司，致力于互联网+文化健康产业生态体系的创新整合发展，并立志成为世界上伟大的公司之一————一个新兴的文化科技集团。</p>
                  <p>我们的口号是：因为有我，所以会更好! 同时也欢迎各位青年精英来加入我们！</p>
                </article>
              </Col>
            </Row>
          </div>
          <div>

          </div>
        </div>
      </div>
    );
  }
}

export { Company };
