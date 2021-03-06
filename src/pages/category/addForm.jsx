import React, { Component } from 'react'
import {Form, Select, Input} from 'antd'
import PropTypes from 'prop-types'
const Item = Form.Item;
const Option = Select.Option;
export default class AddForm extends Component {
  static propTypes = {
    categorys: PropTypes.array.isRequired,
    parentId: PropTypes.string.isRequired,        
    setForm: PropTypes.func.isRequired
  }
  formRef = React.createRef();
  componentDidMount(){
    this.props.setForm(this.formRef.current)
  }
  render() {
    const {categorys,parentId} = this.props;
    return (
      <Form ref= {this.formRef}>
        <Item name="parentId" initialValue = {parentId}
        >
          <Select >
            <Option value = '0'>一级分类</Option>
            {
              categorys.map((item)=><Option value = {item._id}>{item.name}</Option>)
            }
          </Select>
        </Item> 
        <Item name = "categoryName" initialvalues = ''
        rules={[
          { required: true, whitespace:true, message: '分类名称输入'}
        ]}>
          <Input placeholder = '请输入分类名称' ></Input>
        </Item>      
      </Form>
    )
  }
}
