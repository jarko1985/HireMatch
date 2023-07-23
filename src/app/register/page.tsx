"use client";
import React from "react";
import { Button, Form, Radio, message } from "antd";
import Link from "next/link";
import axios from "axios";
import {useDispatch} from 'react-redux';
import { setLoading } from '@/redux/loadersSlice';

function Register() {
  const dispatch = useDispatch();
  const handleSubmit = async(values: any) => {
    try {
      dispatch(setLoading(true)); 
      const response = await axios.post('/api/users/register',values);
      message.success(response.data.message);
    } catch (error:any) {
      message.error(error.response.data.message || "Something went wrong!!")
    }finally{
      dispatch(setLoading(false)); 
    }
  };
  return (
    <div className="flex justify-center h-screen items-center bg-primary">
      <div className="card p-5 w-450">
        <h1 className="text-xl">HireMatch - Register</h1>
        <hr />

        <Form
          layout="vertical"
          className="flex flex-col gap-5"
          onFinish={handleSubmit}
        >
          <Form.Item label="Register As" name="userType">
            <Radio.Group>
              <Radio value="employer">Employer</Radio>
              <Radio value="employee">Employee</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Name" name="name">
            <input type="text" className="input" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <input type="email" className="input" />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <input type="password" className="input" />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Register
          </Button>

          <Link href="/login">Already have an account? Login</Link>
        </Form>
      </div>
    </div>
  );
}

export default Register;
