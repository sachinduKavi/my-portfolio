import React, {useState} from 'react'
import {Input, Button, Form} from 'antd'
import database from '../modules/firebase';
import {ref, set} from 'firebase/database'
import {v4} from 'uuid'

import '../styles/contact-me.css'

export default function ContactMe() {

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Form Data: ', values, v4());
        set(ref(database, 'message/' + v4()), values)
        form.resetFields()
      };

  return (
    <div className='container form-container'>
        <h2 className="title text-gradient">Contact Me</h2>
        
        <div style={{ padding: '24px 0', width: '95%'}} className='form-wrapper'>
      <Form
      
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ backgroundColor: 'black', padding: '24px', borderRadius: '8px' }}
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: 'Please enter your first name!' }]}
        >
          <Input placeholder="Enter your first name" />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{message: 'Please enter your last name!' }]}
        >
          <Input placeholder="Enter your last name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { type: 'email', message: 'Please enter a valid email!' },
            { message: 'Please enter your email!' }
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Contact Number"
          name="contactNumber"
          rules={[{message: 'Please enter your contact number!' }]}
        >
          <Input placeholder="Enter your contact number" />
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: 'Please enter your message!' }]}
        >
          <Input.TextArea rows={4} placeholder="Enter your message" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  
    </div>
  )
}
